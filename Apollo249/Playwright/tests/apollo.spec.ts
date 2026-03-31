import {test,expect,Page,BrowserContext} from "@playwright/test";
import {CreditCardPOM} from "../pages/credit-card-form";
import {fetchCreditData} from "../utils/excelDataReader";
import { execPath } from "process";

test.use({storageState:'auth.json'});

let page : Page;
let pageData :CreditCardPOM;

interface CreditDataCredentials{
    pan : string,
    gender : string,
    nationality : string,
    mother_name : string,
    email : string,
    pincode : number,
    message : string,
    scenario : string,
}

const creditCredentials : CreditDataCredentials[] = fetchCreditData("credit_data.xlsx","Sheet1");

test.beforeEach(async ({page})=>{
    await page.goto("https://www.apollo247.com/apollo-sbi-credit-card-form");
    pageData = new CreditCardPOM(page);
});

creditCredentials.forEach((data : CreditDataCredentials,index : number)=>{

    // test case 1
    if(data.scenario == 'valid'){
        test(`To evaluate the credit card form functionality with valid credentials ${index}`,async ({page}) => {
            await pageData.SignInWithCredentials(page,data.pan,data.gender,data.nationality,data.mother_name,data.email,data.pincode,data.message);
        });
    }

    // test case 2
    if(data.scenario == 'invalid'){
        test(`To evaluate the credit card form functionality with invalid credentials ${index}`,async ({page})=>{
            await pageData.SignInWithCredentials(page,data.pan,data.gender,data.nationality,data.mother_name,data.email,data.pincode,data.message);
        });
    }

    // test case 3
    if(data.scenario == "username")
    {
        test(`To evaluate the credit card form functionality with blank personal email ${index}`,async ({page}) => { 
            await pageData.SignInWithCredentials(page,data.pan,data.gender,data.nationality,data.mother_name,data.email,data.pincode,data.message);
        });
    }

    // test case 4
    if(data.scenario == "pincode"){
        test(`To evaluate the credit card form functionality with blank address ${index}`,async ({page}) => {
            await pageData.SignInWithCredentials(page,data.pan,data.gender,data.nationality,data.mother_name,data.email,data.pincode,data.message);
        });
    }

    // test case 5
    if(data.scenario == "mother_name"){
        test(`To evaluate the credit card form functionality with blank mother's name ${index}`,async ({page}) => {
            await pageData.SignInWithCredentials(page,data.pan,data.gender,data.nationality,data.mother_name,data.email,data.pincode,data.message);
        });
    }
});

// test case 6
test("to validate the user is able to type in the pan card text field",async ({page})=>{
    await pageData.panField.clear();
    await pageData.testField(page,pageData.panField,"EPKPA1234");
})

// test case 7
test("to validate the dob field is visible",async ({page})=>{
    await pageData.panField.fill("EPKPA7238P");
    await expect(await pageData.dobField.getAttribute('value')).toBe("15/08/2003");
    await pageData.testElementValue(pageData.panField,'value','EPKPA7238P');
});

// test case 8
test("to validate the gender drop down is present",async ({page})=>{
    await pageData.panField.fill("EPKPA7238P");
    await pageData.testElement(page,pageData.genderBox);
    await pageData.genderBox.click();
    await pageData.testElement(page,pageData.genderSelect.locator("//span[text()='Male']//ancestor::li"));
    await pageData.testElement(page,pageData.genderSelect.locator("//span[text()='Female']//ancestor::li"));

});

// test case 9
test("to validate the nationality radio button is present",async ({page})=>{
    await pageData.panField.fill("EPKPA7238P");
    await pageData.testElement(page,pageData.nationalitySelect.locator("//span[text()='Indian']/parent::label/preceding-sibling::input"));
    await pageData.testElement(page,pageData.nationalitySelect.locator("//span[text()='Others']/parent::label/preceding-sibling::input"));
    await pageData.nationalitySelect.locator("//span[text()='Indian']/parent::label/preceding-sibling::input").click();
    await pageData.testElementValue(pageData.nationalitySelect.locator("//span[text()='Indian']/parent::label/preceding-sibling::input"),'value','INDIAN');
})

// test case 10
test("to validate the user is able to see and type in mother's name field",async ({page})=>{
    await pageData.panField.fill("EPKPA7238P");
    await pageData.motherNameField.fill('Mama');
    await pageData.testField(page,pageData.motherNameField,"Mama");
})

// test case 11
test("to validate the user is able to see and type in emaail field",async ({page})=>{
    await pageData.panField.fill("EPKPA7238P");
    await pageData.emailField.fill('robot@automation.com');
    await pageData.testField(page,pageData.emailField,"robot@automation.com");
})

// test case 12
test.only("to validate whether the user is able to see and click next button",async({page})=>{
    await pageData.panField.fill("EPKPA7238P");
    await pageData.testElement(page,pageData.nextButton);
    await pageData.nextButton.click();
    await pageData.verifyByText(page,'Select occupation type');
});


import {test,expect,Page,BrowserContext} from "@playwright/test";
import {CreditCardPOM} from "../pages/credit-card-form";
import {fetchCreditData} from "../utils/excelDataReader";

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
    await page.goto("https://www.apollo247.com/apollo-sbi-credit-card-form");

    const panPlaceHolder = await page.locator('input[title="PAN"]');

    await expect(panPlaceHolder).toBeVisible();
    await expect(panPlaceHolder).toBeEnabled();
    
    await panPlaceHolder.fill("EPKPA1234");
    await expect(panPlaceHolder).toHaveValue("EPKPA1234");
});

// test case 7
test("to validate the dob field is visible",async ({page})=>{
    await page.goto("https://www.apollo247.com/apollo-sbi-credit-card-form");
    await page.locator('input[title="PAN"]').fill("EPKPA7238P");

    const dobHolder = await page.getByPlaceholder('DD-MM-YYYY');

    await expect(dobHolder).toBeVisible();
    await expect(dobHolder).toHaveValue("15/08/2003");
});
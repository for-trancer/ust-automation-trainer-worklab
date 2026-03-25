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
    pincode : string,
    message : string,
}

const creditCredentials : CreditDataCredentials[] = fetchCreditData("credit_data.xlsx","Sheet1"); 

test.beforeEach(async ({page})=>{
    await page.goto("https://www.apollo247.com/apollo-sbi-credit-card-form");
    pageData = new CreditCardPOM(page);
});

// test case 1
[creditCredentials].forEach(data=>[
        test.only("To evaluate the credit card form functionality with valid credentials",async ({page}) => {
        await pageData.SignInWithCredentials(page,"EPKPA7238P","Male","Indian","Mama","robot@automation.com","685552","Step 2 of 4");
}),
])



// test case 2
test("To evaluate the credit card form functionality with invalid credentials",async ({page})=>{
    await page.goto("https://www.apollo247.com/apollo-sbi-credit-card-form");

    await page.locator('input[title="PAN"]').fill("NOPANFORYO");
    await page.waitForTimeout(1000);

    let errorMessage = await page.locator('span[class="eb"]').textContent();
    await expect(errorMessage).toBe("PAN not valid, please enter a valid PAN");
});

// test case 3
test("To evaluate the credit card form functionality with blank personal email",async ({page}) => {
    await page.goto("https://www.apollo247.com/apollo-sbi-credit-card-form");

    await page.locator('input[title="PAN"]').fill("EPKPA7238P");
    await page.waitForTimeout(1000);
    await page.getByRole('button',{name : "Male"}).click();

    await page.getByRole('radio').first().check();

    await page.locator('input[placeholder="Mother\'s First Name *"]').fill("Mama");
    await page.locator('input[placeholder="Enter Personal Email"]').fill("");
    await page.locator('input[placeholder="Enter Current Residential Address Pincode"]').fill("685552");


    let errorMessage = await page.locator('span[class="eb"]').textContent();
    await expect(errorMessage).toBe("Please enter a valid email ID");
});

// test case 4
test("To evaluate the credit card form functionality with blank address",async ({page}) => {
    await page.goto("https://www.apollo247.com/apollo-sbi-credit-card-form");

    await page.locator('input[title="PAN"]').fill("EPKPA7238P");
    await page.waitForTimeout(1000);
    await page.getByRole('button',{name : "Male"}).click();

    await page.getByRole('radio').first().check();

    await page.locator('input[placeholder="Mother\'s First Name *"]').fill("Mama");
    await page.locator('input[placeholder="Enter Personal Email"]').fill("personal@gmail.com");
    await page.locator('input[placeholder="Enter Current Residential Address Pincode"]').fill("");

    const button = await page.getByLabel('Next');
    await expect(button).toBeDisabled;
});

// test case 5
test("To evaluate the credit card form functionality with blank mother's name",async ({page}) => {
    await page.goto("https://www.apollo247.com/apollo-sbi-credit-card-form");

    await page.locator('input[title="PAN"]').fill("EPKPA7238P");
    await page.waitForTimeout(1000);
    await page.getByRole('button',{name : "Male"}).click();

    await page.getByRole('radio').first().check();

    await page.locator('input[placeholder="Mother\'s First Name *"]').fill("");
    await page.locator('input[placeholder="Enter Personal Email"]').fill("personal@gmail.com");
    await page.locator('input[placeholder="Enter Current Residential Address Pincode"]').fill("685552");

    let errorMessage = await page.locator('span[class="eb"]').textContent();
    await expect(errorMessage).toBe("Please enter a valid mother's name (minimum 3 characters)");
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

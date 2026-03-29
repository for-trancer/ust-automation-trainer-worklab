import {createBdd,DataTable} from "playwright-bdd";
import { CreditCardPOM } from "../../pages/credit-card-form";
import { test,expect,Page } from "@playwright/test";

const {Given,When,Then} = createBdd();

let creditData : CreditCardPOM;

interface CreditCardCredentials{
    pan: string,
    gender: string,
    nationality: string,
    mother_name: string,
    email: string,
    pincode: number,
    message: string,
    scenario: string,
}

/*
    Created By  : Arjun
    Reviewed By : 
    Description : Pre Condition/Before Each
*/

Given('User is authenticated and at credit card form page', async ({page}) => {
    await page.goto("https://www.apollo247.com/apollo-sbi-credit-card-form");
    creditData = new CreditCardPOM(page);
});

Given('All text field is cleared', async ({}) => {
    await creditData.emailField.clear();
    await creditData.motherNameField.clear();
    await creditData.pinCodeField.clear();
});

/*
    Created By  : Arjun
    Reviewed By : 
    Description : Form validation with valid credentials
*/

When('User enters {string} card number', async ({page}, pan: string) => {
    await creditData.enterPan(page,pan);
});

When('User selects {string} from dropdown', async ({}, gender: string) => {
    await creditData.selectGender(gender);
});

When('User checks {string} from checkbox', async ({}, nationality: string) => {
    await creditData.selectNationality(nationality);
});


When('User enters {string} in mother_name text field', async ({page}, motherName: string) => {
    await creditData.enterMotherName(motherName);
    await page.waitForTimeout(3000);
});

When('User enters {string} in email text field', async ({}, email: string) => {
    await creditData.enterEmail(email);
});

When('User enters {string} in address text field', async ({}, pincode: number) => {
    await creditData.enterPincode(pincode);
});

Then('User will be able to click next button', async ({}) => {
    await creditData.clickNextButton();
});

Then('User will be navigated to next section', async ({page}, dataTable: DataTable) => {
    await creditData.validatNextSection(page);
});

/*
    Created By  : Arjun
    Reviewed By : 
    Description : Form validation with invalid credentials
*/

Then('User gets the error message {string}', async ({page}, message: string,element: string) => {
    await creditData.checkError(page,message);
});

Then('User will not be able to click next button', async ({page}) => {
    await creditData.checkElement(creditData.nextButton);
});

/*
    Created By  : Arjun
    Reviewed By : 
    Description : ui testing. fields,elements
*/

When('User clicks the element {string}', async ({}, elementName: string) => {
    const element = await creditData.getLocator(elementName);
    await element.click();
});

When('User enters {string} in the field {string}', async ({page}, inputData: string, elementName: string) => {
    const creditData = new CreditCardPOM(page);
    const element = creditData.getLocator(elementName);
    await element.fill(inputData);
    console.log("element text : "+await element.textContent());
});

Then('User is able to see {string} in the field {string}', async ({},  expectedText: string,elementName: string) => {
    const element = await creditData.getLocator(elementName);
    const elementText = await element.textContent();
    await expect(elementText).toBe(expectedText);
});

Then('User will be able to see {string}', async ({}, elementName: string) => {
    const element = await creditData.getLocator(elementName);
    await creditData.checkElement(element);
});

import {test,Page,BrowserContext, expect, Locator} from "@playwright/test";
import { error } from "node:console";

export class CreditCardPOM{
    readonly page : Page;
    readonly panField;
    readonly genderBox;
    readonly motherNameField;
    readonly emailField;
    readonly pinCodeField;
    readonly nextButton;
    readonly genderSelect;
    readonly nationalitySelect;

    readonly dobField;
    readonly errorText;

    constructor(page: Page) {
        this.page = page;
        this.panField = page.locator('input[title="PAN"]');
        this.genderBox = page.locator("//button[@aria-haspopup='listbox']");
        this.motherNameField = page.locator('input[placeholder="Mother\'s First Name *"]');
        this.emailField = page.locator('input[placeholder="Enter Personal Email"]');
        this.pinCodeField = page.locator('input[placeholder="Enter Current Residential Address Pincode"]');
        this.nextButton = page.locator("//button[@aria-label='Button']");
        this.genderSelect = page.locator("//span[@class='']/ancestor::li/parent::ul");
        this.nationalitySelect = page.locator("//div[@class='ApolloSbiCreditCard_radioGroup__qc9aJ']");

        this.dobField = page.locator("//input[@placeholder='DD-MM-YYYY']");
        this.errorText = page.locator("//span[@class='eb']");
    }

    // Fill Pan Details
    async enterPan(page: Page,pan: string){
        if(pan != 'none'){
            await this.panField.fill(pan)
            await page.waitForTimeout(300); // Pan Detail Fetch Take Some Time
        }
    }

    // Select Gender
    async selectGender(gender: string){
        if(gender != 'none'){
            await this.genderBox.click();
            if(gender == 'Male'){
                await this.genderSelect.locator("//span[text()='Male']/ancestor::li").click();
            }
            else if(gender == 'Female'){
                await this.genderSelect.locator("//span[text()='Female']/ancestor::li").click();
            }
        }
    }

    // Select Nationality
    async selectNationality(nationality :string){
        if(nationality != "none"){
            if(nationality == 'Indian'){
                await this.nationalitySelect.locator("//span[text()='Indian']//parent::label//preceding-sibling::input").click();
            }
            else if(nationality == 'Others'){
                await this.nationalitySelect.locator("//span[text()='Others']//parent::label//preceding-sibling::input").click();
            }
        }
    }

    // Enter Mother Name
    async enterMotherName(motherName: string){
        if(motherName != "none"){
            await this.motherNameField.fill(motherName);
        }
    }

    // Enter Email
    async enterEmail(email: string){
        if(email != "none"){
            await this.emailField.fill(email);
        }
    }

    // Enter Pincode
    async enterPincode(pincode: number){
        if(pincode != 0){
            await this.pinCodeField.fill(String(pincode));
        }
    }

    // Click Next Button
    async clickNextButton(){
        await expect(this.nextButton).toBeVisible();
        await this.nextButton.click();
    }

    // Next Section Validation
    async validatNextSection(page:Page){
        const textHolder = await page.locator("//p[text()='Fill Your Professional Details']");
        await expect(await textHolder.textContent()).toBe("Fill Your Professional Details");
    }

    // Function to test ui element with input
    async testFieldWithValue(page : Page,element : any,submitValue: string){
        await expect(element).toBeVisible();
        await expect(element).toBeEnabled();
        await element.fill(submitValue);
        await expect(element).toHaveValue(submitValue);
    }

    // Function to test ui element is enabled or visible
    async checkElement(element : any){
        await expect(element).toBeVisible();
        await expect(element).toBeEnabled();
    }

    // Function to check error message
    async checkError(page: Page,message: string){
        const errorMessage = await this.errorText.textContent();
        await expect(errorMessage).toBe(message);
    }

    // String to locator map function
    getLocator(elementName: string): Locator{
        const locators : Record<string,Locator> = {
            panField: this.panField,
            genderBox: this.genderBox,
            motherNameField: this.motherNameField,
            emailField: this.emailField,
            pinCodeField: this.pinCodeField,
            nextButton: this.nextButton,
            genderSelect: this.genderSelect,
            dobField: this.dobField,
        }

        const locator = locators[elementName];
        if(!locator) throw new Error('No locator found!');
        return locator;
    }
} 
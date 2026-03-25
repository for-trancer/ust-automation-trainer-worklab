import {test,Page,BrowserContext, expect} from "@playwright/test";



export class CreditCardPOM{
    readonly page : Page;
    readonly panField;
    readonly genderBox;
    readonly motherNameField;
    readonly emailField;
    readonly pinCodeField;
    readonly nextButton;

    readonly maleSelect;
    readonly femaleSelect;

    readonly indianSelect;
    readonly otherSelect;

    constructor(page: Page) {
        this.page = page;
        this.panField = page.locator('input[title="PAN"]');
        this.genderBox = page.locator("//button[@aria-haspopup='listbox']");
        this.motherNameField = page.locator('input[placeholder="Mother\'s First Name *"]');
        this.emailField = page.locator('input[placeholder="Enter Personal Email"]');
        this.pinCodeField = page.locator('input[placeholder="Enter Current Residential Address Pincode"]');
        this.nextButton = page.getByText('Next');

        this.maleSelect = page.locator("//span[text()='Male']/ancestor::li");
        this.femaleSelect = page.locator("//span[text()='Female']/ancestor::li");

        this.indianSelect = page.locator("//span[text()='Indian']/parent::label/preceding-sibling::input");
        this.otherSelect = page.locator("//span[text()='Others']/parent::label/preceding-sibling::input");
    }

    async SignInWithCredentials(page : Page,pan : string,gender : string,nationality : string,motherName : string,email : string,pincode : string,message : string)
    {
        await this.panField.fill(pan);
        await page.waitForTimeout(300);

        await this.genderBox.click();
        await page.waitForTimeout(100);

        if(gender == 'Male'){
            await this.maleSelect.click();
        }
        else if(gender == "Female"){
            await this.femaleSelect.click();
        }

        if(nationality == 'Indian'){
            await this.indianSelect.click();
        }
        else if(nationality == 'Others'){
            await this.otherSelect.click();
        }

        await this.motherNameField.fill(motherName);
        await this.emailField.fill(email);
        await this.pinCodeField.fill(pincode);

        if(message == 'none'){
            await expect(this.nextButton).toBeVisible();
        }
        else{
            await this.nextButton.click();
            let errorMessage = await page.getByText(message!).textContent();
            await expect(errorMessage).toBe(message);
        }
    }
}
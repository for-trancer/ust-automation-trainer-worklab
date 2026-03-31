import {test,Page,BrowserContext, expect, Locator} from "@playwright/test";

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
    }

    async SignInWithCredentials(page : Page,pan : string,gender : string,nationality : string,motherName : string,email : string,pincode : number,message : string)
    {
        await this.emailField.clear();
        await this.pinCodeField.clear();
        await this.motherNameField.clear();

        if(pan != "none"){
            await this.panField.fill(pan);
            await page.waitForTimeout(300);
        }

        if(gender != "none"){
            await this.genderBox.click();
            await page.waitForTimeout(100);

            if(gender == 'Male'){
                await this.genderSelect.locator("//span[text()='Male']/ancestor::li").click();
            }
            else if(gender == "Female"){
                await this.genderSelect.locator("//span[text()='Female']/ancestor::li").click();
            }
        }

        if(nationality != "none"){
            if(nationality == 'Indian'){
                await this.nationalitySelect.locator("//span[text()='Indian']//parent::label//preceding-sibling::input").click();
            }
            else if(nationality == 'Others'){
                await this.nationalitySelect.locator("//span[text()='Others']//parent::label//preceding-sibling::input").click();
            }
        }

        if(motherName != "none"){
              await this.motherNameField.fill(motherName);
        }
        if(email != "none"){
            await this.emailField.fill(email);
        }
        if(pincode != 0){
            await this.pinCodeField.fill(String(pincode));
        }
      
        
        

        if(message == "none"){
            await expect(this.nextButton).toBeVisible();
        }
        else{
            const isEnabled = await this.nextButton.isEnabled();
            if(isEnabled){
                await this.nextButton.click({force:true});
            }
            let errorMessage = await page.getByText(message!).textContent();
            await expect(errorMessage).toBe(message);
        }
    }

    // Function to test ui element
    async testField(page : Page,element : any,submitValue: string){
        await expect(element).toBeVisible();
        await expect(element).toBeEnabled();
        await element.fill(submitValue);
        await expect(element).toHaveValue(submitValue);
    }

    // Function to test element
    async testElement(page: Page,element : any){
        await expect(element).toBeVisible();
        await expect(element).toBeEnabled();
    }

    // Function to test element with value
    async testElementValue(element: Locator,valueName: string,expectedValue : string){
        const elementText = await element.getAttribute(valueName);
        await expect(elementText).toBe(expectedValue);
    }

    // Function to verify page content by text
    async verifyByText(page: Page,verifyText: string){
        const element : Locator = await page.getByText('Select occupation type');
        expect(element).toBeVisible(); 
    }
}
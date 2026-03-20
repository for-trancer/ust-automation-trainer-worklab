import {test,expect} from "@playwright/test";

test("To evaluate the credit card form functionality with valid credentials",async ({page}) => {
    await page.goto("https://www.apollo247.com/apollo-sbi-credit-card-overview");

    await page.locator('a').filter({ hasText: 'Apply Now' }).first().click();
    await page.getByRole('textbox', { name: 'Please enter mobile number' }).click();
    await page.getByRole('textbox', { name: 'Please enter mobile number' }).fill('9778063324');
    await page.getByRole('checkbox').uncheck();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.waitForTimeout(12000);
    await page.getByRole('button', { name: 'Verify' }).click();
    await page.locator('a').filter({ hasText: 'Resume Application' }).first().click();

    await page.locator('input[title="PAN"]').fill("EPKPA7238P");
    await page.waitForTimeout(1000);
    await page.getByRole('button',{name : "Male"}).click();

    await page.getByRole('radio').first().check();

    await page.locator('input[placeholder="Mother\'s First Name *"]').fill("Mama");
    await page.locator('input[placeholder="Enter Personal Email"]').fill("personal@gmail.com");
    await page.locator('input[placeholder="Enter Current Residential Address Pincode"]').fill("685552");

    await page.getByText('Next').click();

    let sucessMessage = await page.getByText("Step 2 of 4").textContent();

    await expect(sucessMessage).toBe("Step 2 of 4");
});

test("To evaluate the credit card form functionality with invalid credentials",async ({page})=>{
    await page.goto("https://www.apollo247.com/apollo-sbi-credit-card-overview");

    await page.locator('a').filter({ hasText: 'Apply Now' }).first().click();
    await page.getByRole('textbox', { name: 'Please enter mobile number' }).click();
    await page.getByRole('textbox', { name: 'Please enter mobile number' }).fill('9778063324');
    await page.getByRole('checkbox').uncheck();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.waitForTimeout(12000);
    await page.getByRole('button', { name: 'Verify' }).click();
    await page.locator('a').filter({ hasText: 'Resume Application' }).first().click();

    await page.locator('input[title="PAN"]').fill("NOPANFORYO");
    await page.waitForTimeout(1000);

    let errorMessage = await page.locator('span[class="eb"]').textContent();
    await expect(errorMessage).toBe("PAN not valid, please enter a valid PAN");
});

test("To evaluate the credit card form functionality with blank personal email",async ({page}) => {
    await page.goto("https://www.apollo247.com/apollo-sbi-credit-card-overview");

    await page.locator('a').filter({ hasText: 'Apply Now' }).first().click();
    await page.getByRole('textbox', { name: 'Please enter mobile number' }).click();
    await page.getByRole('textbox', { name: 'Please enter mobile number' }).fill('9778063324');
    await page.getByRole('checkbox').uncheck();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.waitForTimeout(12000);
    await page.getByRole('button', { name: 'Verify' }).click();
    await page.locator('a').filter({ hasText: 'Resume Application' }).first().click();

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

test("To evaluate the credit card form functionality with blank address",async ({page}) => {
    await page.goto("https://www.apollo247.com/apollo-sbi-credit-card-overview");

    await page.locator('a').filter({ hasText: 'Apply Now' }).first().click();
    await page.getByRole('textbox', { name: 'Please enter mobile number' }).click();
    await page.getByRole('textbox', { name: 'Please enter mobile number' }).fill('9778063324');
    await page.getByRole('checkbox').uncheck();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.waitForTimeout(12000);
    await page.getByRole('button', { name: 'Verify' }).click();
    await page.locator('a').filter({ hasText: 'Resume Application' }).first().click();

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

test("To evaluate the credit card form functionality with blank mother's name",async ({page}) => {
    await page.goto("https://www.apollo247.com/apollo-sbi-credit-card-overview");

    await page.locator('a').filter({ hasText: 'Apply Now' }).first().click();
    await page.getByRole('textbox', { name: 'Please enter mobile number' }).click();
    await page.getByRole('textbox', { name: 'Please enter mobile number' }).fill('9778063324');
    await page.getByRole('checkbox').uncheck();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.waitForTimeout(12000);
    await page.getByRole('button', { name: 'Verify' }).click();
    await page.locator('a').filter({ hasText: 'Resume Application' }).first().click();

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
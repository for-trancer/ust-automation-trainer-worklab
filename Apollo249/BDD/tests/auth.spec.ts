// import {test,expect} from "@playwright/test";
// import * as readline from "readline";

// test("Setup: save login session via manual otp",async ({browser})=>{
//     const context = await browser.newContext();
//     const page = await context.newPage();

//     await page.goto("https://www.apollo247.com/lab-tests");
//     await page.locator("//span[@class='HeaderNew_loginCTATxt__nYlvD']").click();
//     await page.locator("//input[@name='mobileNumber']").fill("9778063324");

//     const checkbox = page.locator("//input[@type='checkbox']");
//     if (await checkbox.isChecked()) {
//         await checkbox.uncheck();
//     }

//     await page.locator("//button[contains(text(),'Continue')]").click();

//     await page.waitForTimeout(15000);

//     await page.locator("//button[contains(text(),'Verify')]").click();
//     await page.waitForTimeout(8000);
//     await context.storageState({ path: "auth.json" });

//     console.log("auth.json saved successfully!");

//     context.close();
// });
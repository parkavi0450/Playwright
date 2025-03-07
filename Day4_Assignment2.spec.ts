//Assignment: 3 Create Individuals

import { expect, test } from "@playwright/test";

test("Login sales force", async ({ page }) => {


    await page.goto("https://login.salesforce.com/");

    await page.locator("#username").fill("vidyar@testleaf.com");

    await page.locator("#password").fill("Sales@123");

    await page.locator("#Login").click();

    await page.waitForTimeout(6000);

    await page.locator(`//button[@title="App Launcher"]`).click();

    await page.locator(`//button[text()="View All"]`).click();

    await page.waitForTimeout(6000);

    await page.locator(`//input[@placeholder="Search apps or items..."]`).fill('individuals');

    await page.locator(`//mark[text()='Individuals']`).click();

    await page.locator(`//div[text()='New']`).click();

    await page.locator(`//input[@placeholder="Last Name"]`).fill("Parkavi");

    await page.locator(`//button[@title="Save"]`).click();

    await page.waitForTimeout(6000);

    const individualname = (page.locator(`//span[@class="uiOutputText"]`).getByText(`Parkavi`),{exact : true});
  

    if (individualname) {
        console.log(`individual created successfully`);

    } else {
        console.log("individuals Creation Failed");
    }
})



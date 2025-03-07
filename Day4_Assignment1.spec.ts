//Assignment: 1 Create Lead

import { test } from "@playwright/test";

test("Login sales force", async ({ page }) => {


    await page.goto("https://login.salesforce.com/");

    await page.locator("#username").fill("vidyar@testleaf.com");

    await page.locator("#password").fill("Sales@123");

    await page.locator("#Login").click();

    await page.waitForTimeout(6000);

    await page.locator(`//button[@title="App Launcher"]`).click();

    await page.locator(`//button[text()="View All"]`).click();

    await page.locator(`//p[text()="Sales"]`).click();

    await page.waitForLoadState("domcontentloaded");

    await page.locator(`//span[text()="Leads"]`).first().click();

    await page.locator(`//div[@title='New']`).click();

    await page.waitForLoadState("domcontentloaded");

    await page.locator(`//label[text()='Salutation']`).click();

    await page.locator(`//span[text()='Mrs.']`).click();

    await page.locator(`//input[@name='firstName']`).fill("Parkavi");

    await page.locator(`//input[@name='lastName']`).fill("R");

    await page.locator(`//input[@name='Company']`).fill("CTS");

    await page.locator(`//button[@name='SaveEdit' and text()='Save']`).click();

    await page.waitForTimeout(5000);

    const visible = await page.locator(`//lightning-formatted-name[text()='Mrs. Parkavi R']`).isVisible();

    console.log(visible);

    if (visible) {
        console.log("Lead created successfully");

    } else {
        console.log("Lead Creation Failed");
    }
})

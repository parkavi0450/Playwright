//Assignment: 4 Edit Individuals

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

    await page.locator(`//input[@placeholder="Search this list..."]`).fill("Parkavi");

    await page.waitForTimeout(6000);

    await page.locator(`//button[@name="refreshButton"]`).click();

    await page.waitForLoadState("domcontentloaded");

    await page.locator(`//span[text()='Show Actions']`).first().click();

    await page.locator(`//div[@title="Edit"]`).first().click();


    await page.locator(`//a[@role='combobox']`).first().click();

    await page.locator(`//a[@title='Mrs.']`).click();

    await page.locator(`//input[@placeholder="First Name"]`).fill("Ramesh");

    await page.locator(`//span[text()='Save']`).last().click();

    
})



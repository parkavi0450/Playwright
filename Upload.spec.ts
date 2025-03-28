import { expect, test } from "@playwright/test";

test("File Upload", async ({ page }) => {


    await page.goto("https://login.salesforce.com/");

    await page.locator("#username").fill("vidyar@testleaf.com");

    await page.locator("#password").fill("Sales@123");

    await page.locator("#Login").click();

    await page.waitForTimeout(6000);

    await page.locator(`//button[@title="App Launcher"]`).click();

    await page.locator(`//button[text()="View All"]`).click();

    await page.locator(`//input[@placeholder="Search apps or items..."]`).fill('Accounts');

    await page.locator(`//mark[text()='Accounts']`).click();

    await page.waitForTimeout(6000);

    await page.locator(`//div[@title="New"]`).click();

    await page.locator(`//input[@name="Name"]`).fill('Acc');

    await page.locator(`//label[text()="Rating"]/following-sibling::div`).first().click();

    await page.locator(`//*[text()="Warm"]`).first().click();

    await page.locator(`//label[text()="Type"]/following-sibling::div`).first().click();

    await page.locator(`//*[text()="Prospect"]`).first().click();

    await page.locator(`//label[text()="Industry"]/following-sibling::div`).first().click();

    await page.locator(`//*[text()="Banking"]`).first().click();

    await page.locator(`//label[text()="Ownership"]/following-sibling::div`).first().click();

    await page.locator(`//*[text()="Public"]`).first().click();

    await page.waitForTimeout(9000);

    await page.locator(`//*[@name='SaveEdit']`).click();

    const filePromise = page.waitForEvent('filechooser')

    await page.locator(`//div[@title="Upload Files"]`).click();

    const fileUpload = await filePromise;

    await fileUpload.setFiles(["TestFiles/TestLeafLogo.png", "TestFiles/myfile.pdf", "TestFiles/FileUpload.txt"])

    await page.locator(`//span[text()="Done"]`).click();

    await expect(page.locator(`//div[text()="Success notification.."]`)).toBeVisible();

    
})





import test from "@playwright/test"

test(`Handling multiple windows`,async({context,page})=>{

await page.goto("https://login.salesforce.com/");

await page.locator("#username").fill("vidyar@testleaf.com");

await page.locator("#password").fill("Sales@123");

await page.locator("#Login").click();

await page.waitForTimeout(6000)

await page.locator("//button[@title='Next']").click();

const newpage=context.waitForEvent('page') 
page.locator("//button[text()='Learn More']").click();  
const childPage = await newpage;
await childPage.waitForLoadState('load')
const title= await childPage.title();
const url = childPage.url();

if (title==="Service Cloud: AI-powered Customer Service Agent Console | Salesforce US" && url==="https://www.salesforce.com/service/cloud/"){
    console.log("The New Page title is: "+ title)
    console.log("The New Page url is: "+ url)
}else{
   console.log("The Window is not Handled")
}

})

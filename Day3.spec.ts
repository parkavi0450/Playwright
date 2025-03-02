
//Red Bus and Flipkart in Edge and Firefox Browser Instances

import { chromium,firefox,test } from "@playwright/test";

test("Red Bus and Flipkart - Launch browser", async() =>{

    const browserInstance1 = await chromium.launch({headless: false,channel: "msedge"});
    const browserContext1 = await browserInstance1.newContext();
    const page1 = await browserContext1.newPage();
    await page1.goto("https://www.redbus.in");
    console.log(`The Title of the page is - ${await page1.title()}`);    
    console.log(`The URL of the page is ${page1.url()}`); 

    const browserInstance2 = await firefox.launch({headless: false,channel: "firefox"});
    const browserContext2 = await browserInstance2.newContext();
    const page2 = await browserContext2.newPage();
    await page2.goto("https://www.flipkart.com");
    console.log(`The Title of the page is - ${await page2.title()}`);    
    console.log(`The URL of the page is ${page2.url()}`); 
    

})
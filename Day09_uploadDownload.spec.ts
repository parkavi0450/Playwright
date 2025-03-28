import test from "@playwright/test"

test(`FileDownload`,async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/download")

     const filepromise=page.waitForEvent('download')
     page.locator("//a[text()='myfile.pdf']").click()
     const fdown=await filepromise;
     await fdown.saveAs('TestFiles/'+fdown.suggestedFilename());


})
test(`FileUpload`,async({page})=>{

await page.goto("https://the-internet.herokuapp.com/upload")
await page.locator("#file-upload").setInputFiles("TestFiles/FileUpload.txt")
await page.waitForTimeout(6000)

const filePromise=page.waitForEvent('filechooser')
page.locator("#drag-drop-upload").first().click()
const fileUpload=await filePromise;
await fileUpload.setFiles("TestFiles/TestLeafLogo.png")
page.locator("#file-submit").click();
await page.waitForTimeout(6000)

const text = (page.locator("//h3").getByText(`File Uploaded!`),{exact : true});
  
    if (text) {
        console.log(`File Uploaded successfully`);

    } else {
        console.log("File Not Uploaded!");
    }
})



//DataTypes

function HOMEWORK(){
    let firstName = "Parkavi";
    let companyName = 'CTS';
    let mobileNumber = 78368883;
    let isAutomation = true;
    let hasPlaywright;
    console.log("First Name: "+firstName, typeof firstName);
    console.log("Company Name: "+companyName, typeof companyName);
    console.log("mobileNumber: "+mobileNumber, typeof mobileNumber);
    console.log("isAutomation: "+isAutomation, typeof isAutomation);
    console.log("hasPlaywright: "+hasPlaywright, typeof hasPlaywright);
    }
    HOMEWORK()
    
    //homework2
    //Variables
    const browserName = "chrome";
    
    function getBrowserVersion(){
        if (browserName.startsWith("chrome")){
            var browserVersion ="v1.10";
        }
        console.log(browserVersion);
    }
    
    getBrowserVersion();
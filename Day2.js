
//ODD or EVEN

function isOddOrEven(num){
    if(num%2==0){
        console.log("Even Number");
        }
        else
        console.log("ODD Number");
        
    }
    
    isOddOrEven(4);
    
    //Palindrome
    
    let result;
    
    function reverseString(name){
        let splitString = name.split("");
        console.log(splitString)
    let reversedString="";
    for(let i= splitString.length-1;i>=0; i--){
      reversedString += splitString[i];
      }
      console.log(reversedString)    
    
    if(reversedString===name){
        console.log("ITS A PALINDROME");
        result =true;    
    }
    else{
        console.log("ITS NOT A PALINDROME");
        result =false;
    }
    return result;
    }
    console.log(reverseString("MOM"));
    
    //Number Type
    
    let Type;
    function numberType(num){
    
        if(num>0){
            console.log("Positive number");
            Type = `${num}` + " is Positive Number"
    
        }if(num<0){
            console.log("Negative number");
            Type = `${num}` + " is Negative Number"
    
        }if(num===0){
            console.log("Neutral number");
            Type = `${num}` + " is Neutral"
    
    }
    return Type;
    }
    
    console.log(numberType(-2));
    
    //Grade calculation
    
    let grade;
    function gradeCalculate(score){
    
        switch(true){
            case (score >=80 && score <=100):
                grade = `${score}`+ " is A Grade";
                break;
            case (score >=50 && score <=80):
                grade = `${score}`+ " is B Grade";
                break;
            case (score >=35 && score <=50):
                grade = `${score}`+ " is C Grade";
                break;
            case (score <35 && score >=0):
                grade = `${score}`+ " is Fail";
                break;
            default:
                grade = "Invalid Input";
                break;
        }
    
        return grade;
    }
    
    console.log(gradeCalculate(30))
    
    //Looping Statement
    
    function printOddNumber(){
        for(let i=1;i<=25;i++){
            if(i%2 !=0){
                console.log(`${i}`+ " is ODD NUMBER");
                
            }      
        }
    }
    
    printOddNumber();
    
    //String
    //Example1
    let inputWord = "Hello World";
    let splittedWord = inputWord.split(" ");
    console.log(splittedWord)
    let lastword = `${splittedWord.slice(-1)}`;
    console.log(lastword)
    let wordLength = `${lastword.length}`;
    console.log("The Length of the last word -" +`${lastword}` +" is "+wordLength);
    
    //Example2
    let inputWord2 = " fly me to the moon ";
    let splittedWord2 = inputWord2.trim().split(" ");
    let lastword2= `${splittedWord2.slice(-1)}`;
    let wordLength2 = `${lastword2.length}`;
    console.log("The Length of the last word -" +`${lastword2}` +" is "+wordLength2);
    
    //Example3
    let isAnagram;
    function anagram(input1,input2) {
       let string1=input1.trim().toUpperCase().split("").sort();
       let string2=input2.trim().toUpperCase().split("").sort();
       
       let str1=string1.toString();
       let str2=string2.toString();
       console.log(str1);
       console.log(str2);
       if(str1===str2){
        console.log("The given string is Anagram");
        
        isAnagram= true;
       }else
       isAnagram = false;
       return isAnagram;
    }
    
    console.log(anagram("listen","SILENT"));
    
    //Conditional statements
    
    function launchBrowser(browserName){
        if(browserName==="chrome"){
            console.log("The Browser is "+ `${browserName}`);
            
        }else if (browserName !=="chrome"){
            console.log("The Browser is "+ `${browserName}`);
           
        }
    
    }
    
    function runTests(testType){
    
        switch(testType){
            case "smoke":
                console.log("The test type is "+`${testType}`+ " Testing")
                break;
            case "sanity":
                console.log("The test type is "+`${testType}`+ " Testing")
                break;
            case "regression":
                console.log("The test type is "+`${testType}`+ " Testing")
                break; 
            default:
                console.log("Invalid Test Type");
                break;   
        }
    
    }
    
    launchBrowser("firefox");
    runTests("sanity");
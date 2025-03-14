
//occurrences of a specific element in an array

    const nums =[2,4,5,2,1,2];
    const k=2;
    let count =0 ;
    
function occurances(nums: number[], k: number){
   
    for (let x = 0; x < nums.length; x++) {
       
           if (nums[x]===k) {
            count++;
             
        }
   }
   return count;
}

console.log(occurances(nums,k));
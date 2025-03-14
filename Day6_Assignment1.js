var nums = [2, 4, 5, 2, 1, 2];
var k = 2;
var count = 0;
function occurances(nums, k) {
    for (var x = 0; x < nums.length; x++) {
        if (nums[x] === k) {
            count++;
        }
    }
    return count;
}
console.log(occurances(nums, k));

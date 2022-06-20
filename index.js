function hasTargetSum(array, target) {
    for (let i = 0; i < array.length; i++) {
        const comp = target - array[i];
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] === comp) return true
        }
    }
    return false
}

/* 
  Add your pseudocode here
  Start
  Input numbers x,y,z,a,b,c,d
  if a+b x+y c+z d+a e.tc equals to value,
  return output = true
  else return output = false
  output the output
  stop

*/

/*
  Add written explanation of your solution here
  function hasTargetSum(array, target) {
    for (let startIndex = 0; startIndex < array.length / 2; startIndex++) {
        let num1 = array.length - 1 - startIndex;
        //middle number found
        console.log(num1);
        let num2 = array[startIndex] + num1;
        console.log(num2);
        if (num2 === target) {
            let newArr = array.remove(num1, num2)
            console.log(newArr)
        } else return false
    }
}
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
// add your own custom tests in here
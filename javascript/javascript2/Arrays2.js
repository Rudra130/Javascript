const arr1 = ["rudra" ,"preet" ,"tiwari"]
const arr2 =["rt1766285" ,"rudraksha4566" ,"rudratiwari464646"]

console.log(arr1.push(arr2))
console.log(arr1)
/*
the push method will push all the array in the array 
*/


 
/*
this is concat method which only push the element in the array
*/

const newArr = [...arr1,...arr2]
console.log(newArr)
/*
this is the spread operator which do same thing as concat thing
*/

console.log(Array.isArray("rudra"))

//isArray check whether the given array is array or not
console.log(Array.from("preet tiwari"))

//from method the given input in array--->



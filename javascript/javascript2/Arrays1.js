const myArr = [0,1,2,3,4,5,[123, 345 , 567]]

//Array methods;
console.log("retrieving data from the array")
console.log(myArr[6])

console.log("the elength of the array is the - > ")
console.log(myArr.length)

myArr.push(6)
myArr.pop()
 
console.log(myArr.includes(3))
console.log(myArr)

console.log("this is my slice method in javascript ");
console.log(myArr.slice(0,3))
console.log(myArr)
console.log("this is my splice method in java script")
console.log(myArr.splice(0,3))
console.log(myArr);

//the difference between slice and splice method of the array is the 
//in the slice method out original array doesnot change but in splice method 
//our original array changed.......As we can see in above line of code

//splice method is used to delete the element from the original array 
//but the slice method is only used to retrive the data from the original array








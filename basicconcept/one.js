
// //for loop
// for (let index = 1; index <=20; index++) {
//     console.log(`value is ${index}`);
// }

// //while lopp
// let index=0;
// while(index<=10){
//     console.log(`index is ${index}`);
//     index=index+1/2;
// }

// //do while loop
// let score=1;
// do{
//     console.log(`score is ${score} `);
//     score++;
// }
// while(score<=10)

// for of loop********************************************************
// const arr=[1,2,3,4,5];
// for (const num of arr) {
//     console.log(num);
    
// }

// const greet="hello everyone"
// for (const i of greet) {
//     console.log(i);
// }

/// map******************************************
// const map=new Map()
// map.set("IN","INDIA")
// map.set("USA","AMERICA")
// map.set("FR","FRANCE")
// console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }

// const map=new Map()
// map.set("IN","INDIA")
// map.set("USA","AMERICA")
// map.set("FR","FRANCE")
// console.log(map);

// for (const [key,value] of map) {
//     console.log(key,':-',value);
    
// }

//object iteration**************************
//use of for in loop for only object
// const myObject={
//     js:'javascript',
//     cpp:'c++',
//     rb:'ruby',
//     swift:'apple'
// }
// for (const key in myObject) {
//     console.log(key);
// }
//for react loop************************
//const coding=["js","ruby","c++","python","cpp"]

// // coding.forEach( function (item) {
// //     console.log(item);
// // })

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })


//for each dont return value so ue suse filter*****************************

// const myNums=[1,2,3,4,5,6,7,8,9,10];
// //const newnum=myNums.filter((num)=>num>4)

// //0r
// const newnum=myNums.filter((num)=>{
//     return num>5
// })
// console.log(newnum);

///map***************************************
// const myNumbers=[1,2,3,4,5,6,7,8,9,10];
// //const newnum=myNumbers.map((num)=> num+10)


// console.log(newnum);
///array reduce***********************
// const mynum=[1,2,3,4]
// const mytotal=mynum.reduce(function(acc,currcval){
//     return acc+currcval
// }, 0)
// console.log(mytotal);//it adds the all number in mynumsn array

const mynum=[1,2,3,4]
const mytotal=mynum.reduce((acc,curr)=>acc+curr,0)
console.log(mytotal);//it adds the all number in mynumsn array

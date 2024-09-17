// function one(){
//     const username="hitesh"
//     function two(){
//         const website="youtube"
//         console.log(username);
//     }
//     two();
// }
// one();
// console.log(one());//it will give undifined

// console.log(addone(5))//we can pass value to  bwlow type function any were in code; we cant do it if we store function in variable or const

// function addone(num){
//     return num+1;
// }

// const addtwo=function(num){
//     return num+2;
// }
// console.log(addtwo(7))

//*********************************************************************************************** */
// const user={
//     username:"om prakash",
//     price:999,
//     WelcomeMessage:function(){
//         console.log(`${this.username},welcome to website`);
//     }

// }
// user.WelcomeMessage()
// user.username="bye bye"
// user.WelcomeMessage()


//arrow function
// const addtwo=(num1,num2)=>{
//   return num1+num2
// }
// console.log(addtwo(4,5))
//immediately invoked function expression(IIFE)
// function chai(){
//     console.log(`helooooooo jiiii`)
// }
// chai()


// (function chai(){
//     console.log(`helooooooo jiiii`);
// })();


(()=>{
    console.log(`helooooooo jiiii`);
})();

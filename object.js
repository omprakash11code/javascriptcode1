//const tinderuser=new Object()
const tinderuser={}
tinderuser.id="123acv"
tinderuser.name="om"
tinderuser.isloggedin=false;

console.log(tinderuser)


const obj1={1:"a",2:"b"}
const obj2={4:"a",5:"b"}
//const obj3={obj1,obj2};// o/p const obj1={1:"a",2:"b"}


//const obj3=Object.assign({},obj1,obj2);

const obj3={...obj1,...obj2}
console.log(obj3)
console.log(tinderuser)

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
// object destructure

const course={
    coursename:"javascript",
    price:"99999",
    courseinstructor:"hitesh"

}
const {courseinstructor:instructor}=course;// destructuring
console.log(instructor);



// const name = "Tony";
// const age = 24;
// const gender = "male";

// const sayHi = (name:string, age:number, gender:string):void => {
//     console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
// }

const sayHi = (name:string, age:number, gender:string):string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}!`;
}

console.log(sayHi("Tony", 30, "mail")); // argument의 type이 맞지 않으면 에러 발생

export{};
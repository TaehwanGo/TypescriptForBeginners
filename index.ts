const name = "Tony";
const age = 24;
const gender = "male";


const sayHi = (name, age, gender?) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
}

sayHi(name, age); // 만약 parameter중 하나라도 빠지면 에러 발생, js에선 발생 안함(undefined인채로 실행 됨)

export{};
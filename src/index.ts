interface Human{
    name:string,
    age:number,
    gender:string
}

const person = {
    name: "Tony",
    age: 30,
    gender: "male"
}

const sayHi = (person: Human):string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
}

console.log(sayHi(person)); // argument의 type이 맞지 않으면 에러 발생

export{};
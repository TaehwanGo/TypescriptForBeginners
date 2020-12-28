// interface Human{
//     name:string,
//     age:number,
//     gender:string
// }

// const person = {
//     name: "Tony",
//     age: 30,
//     gender: "male"
// }

class Human {
    public name: string;
    public age: number; // private age: number; 로 바꾸면 class밖에서 person.age 와 같이 접근 할 수 없음
    public gender: string;
    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const tony = new Human("tony", 31, "male");

const sayHi = (person: Human):string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
}

console.log(sayHi(tony)); // argument의 type이 맞지 않으면 에러 발생

export{};
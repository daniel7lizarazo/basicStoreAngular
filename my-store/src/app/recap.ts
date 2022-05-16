import { throwIfEmpty } from "rxjs";

const username : string | number = 5;

const sum = (a : number, b : number) : number => {
  return a+b;
}

sum(1,username);

// class persona {
//   private age : number;
//   name : string;

//   constructor(age : number, name : string) {
//     this.age = age;
//     this.name = name;
//   }

// }

class persona {
  constructor(private age : number, public name : string) {}
}


const daniel = new persona(25, 'Daniel');

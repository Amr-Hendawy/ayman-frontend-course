export function CharFreq(message) {
  this.message = message;

  this.ASCIIMethod = function () {
    console.log("ASCIIMethod");

    let freq = new Array(128).fill(0);

    for (let i = 0; i < this.message.length; i++) {
      let current_code = this.message.charCodeAt(i);

      freq[current_code]++;
    }

    for (let i = 0; i < freq.length; i++) {
      if (freq[i] > 0) {
        let c = String.fromCharCode(i);

        console.log(c + " " + freq[i]);
      }
    }
  };
}

// pradigm - style - functional programing - structural programing - object oriented programing
// class

// const student1 = {
//   name: "Ahmed",
//   age: 20,
//   grade: "A",
// };
// const student2 = {
//   name: "Ahmed",
//   age: 20,
//   grade: "A",
// };
// const student3 = {
//   name: "Ahmed",
//   age: 20,
//   grade: "A",
// };
// constructor
// function Student(myName, age, grade) {
//   this.name = myName;
//   this.age = age;
//   this.grade = grade;
// }
// const s1 = new Student("Ahmed", 22, "A");
// const s2 = new Student("Amr", 40, "B");
// const s3 = new Student("Ayman", 50, "C");
// console.log(s1);
// console.log(s2);
// console.log(s3);
// function Calculator(num1, num2) {
//   this.n1 = num1;
//   this.n2 = num2;
//   this.sum = function () {
//     console.log(this.n1 + this.n2);
//   };
// }
// const calc1 = new Calculator(10, 20);
// const calc2 = new Calculator(50, 13);
// const calc3 = new Calculator(7, 8);
// calc1.sum();
// calc1.sum();
// calc2.sum();
// calc3.sum();
// let x = {
//   speed: "50 km/h",
//   fun: () => {
//     this.color
//   }
// };

// console.log(x.speed);
// x.color = "red";
// console.log(x.color);
// console.log(x);

// console.log(s1);
// let obj = {
//   age: 50,
// };
// console.log(obj);

// class Calculator {
//   constructor(num1, num2) {
//     this.n1 = num1;
//     this.n2 = num2;
//   }
//   sum() {
//     console.log(this.n1 + this.n2);
//   }
// }

// const calc1 = new Calculator(10, 20);
// calc1.sum();

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`My Name is ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
}

const stu = new Student("Ahmed", 20, "A");
console.log(stu.name);
console.log(stu.age);
console.log(stu.grade);

// class CharFreq {
//   constructor(message) {
//     this.message = message;
//   }

//   ASCIIMethod() {
//     console.log("ASCIIMethod");
//     let freq = new Array(128).fill(0);

//     for (let i = 0; i < this.message.length; i++) {
//       let current_code = this.message.charCodeAt(i);

//       freq[current_code]++;
//     }
//     for (let i = 0; i < freq.length; i++) {
//       if (freq[i] > 0) {
//         let c = String.fromCharCode(i);

//         console.log(c + " " + freq[i]);
//       }
//     }
//   }
// }

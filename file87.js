// (10:35:15- 10:42:47)

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating.`;
    }
    isSuperCute(){
        return this.age<=1;
    }
    isCute(){
        return true;
    }
}
// const animal1 = new Animal("tom",2);
// console.log(animal1);
// console.log(animal1.eat());
// console.log(animal1.isCute());
// console.log(animal1.isSuperCute());



// class Cat{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating.`;
//     }
//     isSuperCute(){
//         return this.age<=1;
//     }
//     isCute(){
//         return true;
//     }
// }
// const catte = new Cat("tom",1);
// console.log(catte);
// console.log(catte.eat());
// console.log(catte.isCute());
// console.log(catte.isSuperCute());



// class Dog{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating.`;
//     }
//     isSuperCute(){
//         return this.age<=1;
//     }
//     isCute(){
//         return true;
//     }
// }
// const tommy = new Dog("tommy",3);
// console.log(tommy);
// console.log(tommy.eat());
// console.log(tommy.isCute());
// console.log(tommy.isSuperCute());



// Dog is "sub-class/ Derived"
// Animal is "parent-class / super-class / Base-class"
// Agr koi method "Dog" class ma nhi mle ga tu "Animmal" class me dakha ge
class Dog extends Animal{

}
const tommy = new Dog("tommy",3);
console.log(tommy);
console.log(tommy.eat());
console.log(tommy.isCute());
console.log(tommy.isSuperCute());

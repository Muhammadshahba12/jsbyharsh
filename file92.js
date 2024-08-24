// class CreateUser{
//     constructor( firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     about(){
//         return `${this.firstName} ${this.lastName}`;
//     }
//     is18(){
//         return this.age>18;
//     }
//     sing(){
//         return `lkkh jjhj`;
//     }
//     func(a){
//         console.log(a);
//     }
// }
// const user1 = new CreateUser("M.","Shahbaz", 78);
// console.log(user1.age);
// console.log(user1.firstName);
// console.log(user1.lastName);
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user1.sing());
// user1.func("w");


// class CreateUser{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     about(){
//         return `${this.firstName} ${this.lastName}`;
//     }
//     is18(){
//         return this.age<=18;
//     }
//     func(a){
//         console.log(a);
//     }
// }
// const user1 = new CreateUser("abc","d",3);
// console.log(user1.firstName);
// console.log(user1.lastName);
// console.log(user1.age);
// console.log(user1.about());
// console.log(user1.is18());
// user1.func("ddkkslsll");



// class Animal{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     eat(){
//         return `${this.firstName} is eating`;
//     }
//     isSuperCute(){
//         return this.age<1;
//     }
//     isCute(){
//         return true;
//     }
// }
// const animal1 = new Animal("tommt","dk",0); 
// console.log(animal1.firstName);
// console.log(animal1.lastName);
// console.log(animal1.age);
// console.log(animal1.eat());
// console.log(animal1.isSuperCute());
// console.log(animal1.isCute());

// class Dog extends Animal{

// }
// const tommy = new Dog("tom","my",1);
// console.log(tommy);
// console.log(tommy.firstName);
// console.log(tommy.lastName);
// console.log(tommy.age);
// console.log(tommy.eat());
// console.log(tommy.isSuperCute());
// console.log(tommy.isCute());





// class Animal{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     eat(){
//         return `${this.firstName} is eating.`;
//     }
//     isSuperCute(){
//         return this.age<1;
//     }
//     isCute(){
//         return true;
//     }
// }
// const person1 = new Animal("too","mmy", 2.5);
// console.log(person1);
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.eat());
// console.log(person1.isCute());
// console.log(person1.isSuperCute());

// class Dog extends Animal{

// }
// const tommy = new Dog("t","k",6);
// console.log(tommy);
// console.log(tommy.firstName);
// console.log(tommy.lastName);
// console.log(tommy.age);
// console.log(tommy.eat());
// console.log(tommy.isCute());
// console.log(tommy.isSuperCute());



// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating.`;
//     }
// } 
// class Dog extends Animal{
//     constructor(name, age, speed){
//         super(name, age);
//         this.speed = speed;
//     }
//     run(){
//         return `${this.name} is running at speed ${this.speed}km/h.`;
//     }
// }

// const doggy = new Dog("sheru",4,43); 
// console.log(doggy.run());



// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating.`;
//     }
// }
// class Dog extends Animal{
//     constructor(name, age, speed){
//         super(name, age);
//         this.speed = speed;
//     }
//     eat(){
//         return `modified: ${this.name} is eating.`;
//     }
//     run(){
//         return `${this.name} is runnning at speed ${this.speed}km/h`;
//     }
// }
// const doggy = new Dog("sheru", 5, 56);
// console.log(doggy.run());
// console.log(doggy.eat());


class Person{
    constructor(firstName, lastName ){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName(){
        return `${this.firstName} ${this.lastName} is eating.`;
    }
    get full(){
        return `${this.firstName} ${this.lastName} is eaten`;
    }
    set gullName(again){
        const [firstName,lastName] = again.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    setAgain(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person1 = new Person("M.","Shahbaz");
console.log(person1.fullName());
console.log(person1.full);

person1.setAgain("Abdul","Bari")
console.log(person1.full);

person1.firstName = "Abdul";
person1.lastName = "Razzaq";
console.log(person1.full);

person1.gullName =  "Abdul Haddi";
console.log(person1.full);

// (10:47:18- 10:49:33)
// (11:01:50 - 11:02:47)
// same methods in sub-class

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

class Dog extends Animal{
     constructor(name, age, speed){
        super(name,age);
        // super ka matlab "parent-class" ha
        // name & age property "super-class" ka constructor add krde ga
        this.speed = speed;
     }
     eat(){
        return `Modified eat: ${this.name} is eating.`;
     }
     run(){
        return `${this.name} is running at ${this.speed} km/h`;
     }
}
// object / instance
const tommy = new Dog("tommy",3,50);
console.log(tommy);
console.log(tommy.run());
console.log(tommy.eat());

const animal1 = new Animal("sheru",1,40);
console.log(animal1);
console.log(animal1.eat());
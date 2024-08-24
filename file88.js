// (10:42:48- 10:47:17)
// "super" keyword

// object(tommy) also known as "Instance"

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
     run(){
        return `${this.name} is running at ${this.speed} km/h`;
     }
}
// object / instance
const tommy = new Dog("tommy",3,50);
console.log(tommy);
console.log(tommy.eat());
console.log(tommy.isCute());
console.log(tommy.isSuperCute());
console.log(tommy.run());
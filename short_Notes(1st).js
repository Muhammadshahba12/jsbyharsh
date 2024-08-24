// more practice required 29, 31 ,37, 38, 43(nested destructurin),53(parameter destructuring)
// 56 (forEach),  67 sets,  68 maps, 74

        // 90
// class Person{
//      constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//      }  
//      get fullName(){
//         console.log(this.firstName, this.lastName);
//      }
//      get eat(){
//         return "you reating";
//      }
//      setName(firsName,lastName){
//         this.firstName = firsName;
//         this.lastName = lastName;
//      }
//      first(firsName){
//         this.firstName = firsName;
//      }
//      set fullName(fullName){
//         const [firstName, lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//      }
// };      
// const person1 = new Person("M.","Sami",19);
// // console.log(person1.firstName,person1.lastName);
// // person1.fullName;
// // person1.eat;
// // person1.setName("M.","Danish");
// // person1.fullName;
// // person1.first("M.");
// // person1.firstName = "M.";
// // person1.lastName = "Huzaifa";
// // person1.fullName;

// person1.fullName = "M. Shahbaz";
// person1.fullName;

        // 89 same methods in sub-class
// class Animal{
//     constructor(firstName, lastName ,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     } 
//     eat(){
//         return `${this.firstName}${this.lastName} is eating.`;
//     }  
//     isSuperCute(){
//         return this.age<1;
//     } 
//     isCute(){
//         return true;
//     }
// };
// const animal1 = new Animal("tom","mmy",0);
// console.log(animal1.eat());
// console.log(animal1.isSuperCute());
// console.log(animal1.isCute());

// class Dog extends Animal{
//     constructor(firstName,lastName,age,speed){
//         super(firstName,lastName,age);
//         this.speed = speed;
//     }
//     eat(){
//         return `updated class: ${this.firstName}${this.lastName} is eating.`;
//     } 
//     run(){
//         return `${this.firstName}${this.lastName} is runnig at speed ${this.speed}km/h`;
//     }   
// };
// const dog1 = new Dog("do","gyyy",5,233);
// console.log(dog1.eat());
// console.log(dog1.isSuperCute());
// console.log(dog1.isCute());
// console.log(dog1.run());

        // 88 "super" keyword 
// class Animal{
//     constructor(firstName, lastName ,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     } 
//     eat(){
//         return `${this.firstName}${this.lastName} is eating.`;
//     }  
//     isSuperCute(){
//         return this.age<1;
//     } 
//     isCute(){
//         return true;
//     }
// };
// const animal1 = new Animal("tom","mmy",0);
// console.log(animal1.eat());
// console.log(animal1.isSuperCute());
// console.log(animal1.isCute());

// class Dog extends Animal{
//      constructor(firstName,lastName,age,speed){
//         super(firstName,lastName,age);
//         this.speed = speed;
//      }
//      run(){
//         return `${this.firstName}${this.lastName} is runnig at speed ${this.speed}km/h`;
//      }   
// };
// const dog1 = new Dog("do","gyyy",5,233);
// console.log(dog1.eat());
// console.log(dog1.isSuperCute());
// console.log(dog1.isCute());
// console.log(dog1.run());


        // 87 
// class Animal{
//     constructor(firstName, lastName, age){
//         console.log("...........................Animal: constructor started.");
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     eat(){
//         return `${this.lastName} is eating.`;
//     }
//     about(){
//         return `${this.firstName}${this.lastName} is ${this.age} years old.`;
//     }
//     isSuperCute(){
//         return this.age<1;
//     }
//     isCute(){
//         return true;
//     }
// };        
// const animal1 = new Animal("M.","Shahbaz",0);
// console.log(animal1.about());
// console.log(animal1.isSuperCute());
// console.log(animal1.isCute());
// console.log(animal1.eat());


// class Cat{
//      constructor(firstName, lastName, age){
//         console.log("...........................Cat: constructor started.");
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//      }   
//      eat(){
//         return `${this.firstName} is eating.`;
//      }
//      about(){
//         return `${this.firstName}${this.lastName} is ${this.age} years old.`;
//      }
//      isSuperCute(){
//          return this.age<1;
//      }
//      isCute(){
//           return true;
//      }
// };
// const cat1 = new Cat("Tommy","cat",1);
// console.log(cat1.eat());
// console.log(cat1.about());
// console.log(cat1.isSuperCute());
// console.log(cat1.isCute());


// class Lion{
//     constructor(firstName, lastName, age){
//         console.log("...........................Lion: constructor started.");        
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age; 
//     }
//     about(){
//         return `${this.firstName}${this.lastName} is ${this.age} years old.`;
//     }
//     eat(){
//         return `${this.firstName} ${this.lastName} is eating.`;
//     }
//     isSuperCute(){
//         return this.age<1;
//     }
//     isCute(){
//         return true;
//     }
// };
// const lion1 = new Lion("sheru","katt",4);
// console.log(lion1.eat());
// console.log(lion1.about());
// console.log(lion1.isSuperCute());
// console.log(lion1.isCute());

// class Dog extends Animal{

// };
// const dog1 = new Dog("dogg","gyyy",7);
// console.log(dog1.about());
// console.log(dog1.eat());
// console.log(dog1.isSuperCute());
// console.log(dog1.isCute());




        // 86 Classes
// class CreateUser{
//     constructor(firstName, lastName, age){
//         console.log("constructor called");
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     } 
//     about(){
//         console.log(`${this.firstName} ${this.lastName} ${this.age}`);
//     }
//     is18(){
//         return this.age>18;
//     }
//     naat(){
//         return "ALLAH Ho...";
//     }
//     func(a){
//         console.log(a);
//     }
// }       
// const user1 = new CreateUser("M.","Shahbaz", 109); 
// user1.about();
// console.log(user1.is18());
// user1.func("fghjk");
// console.log(user1);
// console.log(Object.getPrototypeOf(user1));


        // 85 
// const arr = [1,2,3];
// // console.log(arr); 
// console.log(Array.prototype);

// function hello(){
// //     console.log("hello");    
// }
// hello();
// // console.log(hello.prototype);
// console.log(Object.prototype);


        // 84 hasOwnProperty()
// function CreateUser(firstName, lastName, age, email, address){
//      this.firstName = firstName;
//      this.lastName = lastName;
//      this.age  = age;  
//      this.email = email;
//      this.address = address;
// }
// CreateUser.prototype.about = function(hobby, roll){
//      console.log(` ${this.firstName} ${this.lastName}, ${hobby}, ${roll} `);   
// };
// CreateUser.prototype.is18 = function(){
//      return this.age>18;   
// };
// CreateUser.prototype.naat = function(){
//       console.log("ALLAH Ho...");  
// };

// const user1 = new CreateUser("M.","Shahbaz",23,"shahbaz@gmail.com","H#9900");
// // for(let key in user1){
// //      console.log(key);   
// // }

// // for(let key in user1){
// //      if(user1.hasOwnProperty(key) ){
// //         console.log(key);
// //      }  
// // }


// for(let key in user1){
//      if(user1.hasOwnProperty(key)){
//         console.log(key);
//      }   
// }

        // 83 new keyword
// function CreateUser(firstName, lastName, age, email, address){
//      this.firstName = firstName;
//      this.lastName = lastName;
//      this.age  = age;  
//      this.email = email;
//      this.address = address;
// }
// CreateUser.prototype.about = function(hobby, roll){
//      console.log(` ${this.firstName} ${this.lastName}, ${hobby}, ${roll} `);   
// };
// CreateUser.prototype.is18 = function(){
//      return this.age>18;   
// };
// CreateUser.prototype.naat = function(){
//       console.log("ALLAH Ho...");  
// };


// const user1 = new CreateUser("M.","Shahbaz",23,"shahbaz@gmail.com","H#9900");
// const user2 = new CreateUser("M.","Dawood",12,"dawood@gmail.com","H#9090");

// console.log(user1);
// user1.about("cricket",9090);
// console.log(user2.is18());


        // 82
// function createUser(firstName, lastName, age, email, address){
//      const user = Object.create(createUser.prototype);
//      user.firstName = firstName;
//      user.lastName = lastName;
//      user.age  = age;  
//      user.email = email;
//      user.address = address;

//      return user;
// }
// createUser.prototype.about = function(hobby, roll){
//      console.log(` ${this.firstName} ${this.lastName}, ${hobby}, ${roll} `);   
// };
// createUser.prototype.is18 = function(){
//      return this.age>18;   
// };
// createUser.prototype.naat = function(){
//       console.log("ALLAH Ho...");  
// };


// const user1 = createUser("M.","Shahbaz",23,"shahbaz@gmail.com","H#9900");
// const user2 = createUser("M.","Dawood",12,"dawood@gmail.com","H#9090");

// console.log(user1);
// user1.about("cricket",9090);
// console.log(user2.is18());


        // 81
// function hello(){
//     console.log("Hello world!");
// }         
// hello();

// console.log(hello.name);
// hello.myOwnProperty = "unique elements";
// console.log(hello.myOwnProperty);
// hello.toString = "M.Shahbaz";
// console.log(hello.toString);
// hello.length = "fghj";
// console.log(hello.length);

// console.log(hello.prototype);
// if(hello.prototype){
//       console.log("prototype is present");  
// }
// else{
//       console.log("protytype is not presennt"); 
// }

// const arr = ["value"];
// if(arr.prototype){
//       console.log("prototype is present");
// }
// else{
//       console.log("prototype is not present");  
// }

// const obj = {key:"value1"};
// if(obj.prototype){
//        console.log("prototype is present"); 
// }
// else{
//        console.log("prototype is Not present"); 
// }


// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.naat = function(){
//       console.log("ALLAH Hoo.....");  
// }
// console.log(hello.prototype.abc);
// console.log(hello.abc);
// console.log(hello.prototype.xyz);
// console.log(hello.xyz);
// hello.prototype.naat();
// hello.naat();



        // 80
// const obj1 = {
//      key1: "value1",
//      key2: "value2"   
// };       
// const obj2 = {
//      key3: "value3"   
// }; 
// console.log(obj1.key1);
// console.log(obj1.key2);
// console.log(obj2.key3);
// // console.log(obj2.key1);


// const obj1 = {
//      key1: "value1",
//      key2: "value2"   
// };
// const obj2 = {};
// obj2.key3 = "value3";
// console.log(obj2.key3);


// const obj1 = {
//     key1: "value1",
//     key2: "value2"    
// };
// const obj2 = Object.create(obj1);
// obj2.key3 = "value3";
// // console.log(obj2.key3);
// // console.log(obj2.key1);
// // console.log(obj2);
// console.log(obj2.__proto__);



// const obj1 = {
//      key1:"value1",
//      key2:"value2"
// };
// const obj2 = Object.create(obj1);

// obj2.key3 = "value3";
// console.log(obj2.key3);
// console.log(obj2.__proto__);



// const userMethods = {
//      about: function(){
//          console.log(`${this.firstName} ${this.lastName}`);
//      },
//      is18: function(){
//           return this.age>18;
//      },
//      naat: function(){
//           return "ALLAH Ho...";
//      }
// };
// function createUser(firstName, lastName, age, email, address ){
//      const user = Object.create(userMethods);
//      user.firstName = firstName;
//      user.lastName = lastName;
//      user.age = age;
//      user.email = email,
//      user.address = address;

//      return user;
// }
// const user11 =  createUser("M.","Shahbaz",34,"shahbaz@gmail.com","H#231");
// console.log(user11);


        // 78, 79
// const userMethods = {
//      welcome: function(){
//         return `${this.firstName} ${this.lastName} ${this.age} years old`;
//      },
//      is18: function(){
//         return this.age>18;
//      },
//      sing(){
//         return "fghjiyash";
//      }
// };
// function createUser(firstName, lastName, age, email, address){
//      const user = {};
//      user.firstName = firstName;
//      user.lastName = lastName;
//      user.age = age;
//      user.email = email;
//      user.address = address;
//      user.welcome = userMethods.welcome;
//      user.is18 = userMethods.is18;
//      user.sing=userMethods.sing;
     
//      return user;
// }
// const user1 = createUser("Abdul","Rehman",63,"Abdul@gmail.com","H#321");
// const user2 = createUser("Ali","Raza",24,"raza@gmail.com","H#121");

// console.log(user1);
// console.log(user1.welcome() );

        // 77   function create multiple objects
// const user1 = {
//       firstName: "M.",
//       lastName: "Shahbaz",
//       age: 26,
//       email: "MuhammadShahbaz@gmail.com",
//       address:"H#25,B#5, Mughalpura Lahore", 
//       welcome: function(){
//          return `Assalam-o-alaikum! ${this.firstName}${this.lastName}...`;
//       }, 
//       is18: function(){
//            return this.age>18;
//       }
// };      
// console.log(user1.welcome());
// console.log(user1.is18());
// console.log(user1.firstName);


// const user1  = {};
// user1.firstName = "M.Shahbaz";
// user1.age  = 45;
// user1.about = function(){
//       console.log(this.firstName, this.age);  
// }
// user1.about();



// function CreateUser( firstName, lastName, age, email, address ){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.age = age;
//     user.email = email;
//     user.address  = address;
//     user.about  = function(){
//         return `Your name is ${this.firstName}${this.lastName} and age is ${this.age}`;
//     },
//     user.is18 = function(){
//         return this.age>18;
//     } 
//     return user;
// }
// const user1 = CreateUser("M.","Danish",32,"danish@gmail.com","H#4567");
// const user2 = CreateUser("M.","Shahbaz",21,"Shahbaz@gmail.com","H#9090");
// const user3 = CreateUser("M.","Dawood",65,"Dawood@gmail.com","H#1123");

// console.log(user1);
// console.log(user2);
// console.log(user1.about());
// console.log(user1.is18());



        // 76 short syntax
// const user1  = {
//         firstName:"M.Shahbaz",
//         age: 67,
//         about:function(){
//                 console.log(this);
//                 console.log(this.firstName, this.age);
//         }   
// };        
// user1.about();

// const user1  = {
//      firstName:"M.Shahbaz",
//      age: 67,
//      about(hobby){
//         console.log(this);
//         console.log(this.firstName, this.age, hobby);
//      }   
// };
// // user1.about("tennis");
// user1.about.call(user1,"cricket");



        // 75 Arrow function
// const user1  = {
//         firstName:"M.Shahbaz",
//         age: 67,
//         about: ()=>{
//                 console.log(this);
//                 console.log(this.firstName, this.age);
//         }   
// };        
// user1.about();
// // user1.about.call();

// const user1  = {
//      firstName:"M.Shahbaz",
//      age: 67,
//      about: (hobby)=>{
//         console.log(this);
//         console.log(this.firstName, this.age, hobby);
//      }   
// };
// // user1.about();
// user1.about.call(user1,"cricket");


        // 74 Don't do these mistakes

// const obj = {
//      firstName:"M.Shahbaz",
//      age: 45,
//      about: function(){
//         console.log(this);
//         console.log(` ${this.firstName}, ${this.age}`);
//      }   
// }       
// const fun = obj.about;
// fun();

//  because
// const fun = function(){
//      console.log(this);
//      console.log(` ${this.firstName}, ${this.age}`);
// }

// here "this" is window object that's why when you do
// const fun = obj.about;
// fun();
// it will show error


        // 73 window object

// function helo(){
//     console.log("Hello world!");    
// }
// helo();
// helo.call();


// const obj = {
//      about: function(){
//         console.log("Hello world1");
//      }   
// };
// obj.about();
// obj.about.call();

// const obj1 = {
//      firstName:"M.Shahbaz",
//      age: 67,
//      about: function(){
//         console.log(`your name is ${this.firstName} and age is ${this.age}`);
//      }   
// };

//  call() :-
// const obj2 = {
//       firstName:"M.Dawood",
//       age:78  
// };
// // obj1.about();
// // obj1.about.call();

// obj1.about.call(obj1);
// obj2.about.call(obj2);



// const obj1 = {
//      firstName:"M.Shahbaz",
//      age: 67,
//      about: function(hobby, roll){
//          console.log(` Name: ${this.firstName}, Age: ${this.age}, Roll No.: ${roll}, hobby: ${hobby} `)
//      }   
// };
// const obj2 = {
//       firstName:"M.Dawood",
//       age:32  
// };
// obj1.about.call(obj1, "hockey", 90);
// obj1.about.call(obj2, "cricket", 1231 );


//  apply() && bind()  :-
// const person = function(hobby, roll){
//      console.log(`${this.firstName} ${this.age} ${hobby} ${roll}`);   
// }
// const obj1 = {
//      firstName: "M.Shahbaz",
//      age: 67   
// };
// const obj2 = {
//       firstName: "M.Dawood",
//       age: 34   
// };
// person.apply(obj1,["hockey","78906"]);
// person.apply(obj2,["cricket",56778]);


// const a = person.bind(obj1,"cricket","678");
// a();

// const b = person.bind(obj2,"hockey",9909);
// b();

        // 72 window object

// console.log(this);  
// console.log(window);

// "use strict";
// function hello(){
//         // "use strict";
//      console.log("hello");   
//      console.log(this);
// }
// hello();
// // window.hello();


        // 71 Methods (Function inside objects)

// const obj = {
//      firstName: "M.Shahbaz",
//      age: 45,
//      about: function(){
//         // console.log(`your name is ${this.firstName} and age is ${this.age}`);
//         console.log(this);
//      }   
// }; 
// // console.log(obj.about);
// obj.about();

// const personInfo  = function(){
//       console.log(`your name is ${this.name} and age is ${this.age}`);
// }
// const obj1 = {
//       name: "M.Shahbaz",
//       age:29,
//       about: personInfo  
// };
// const obj2 = {
//       name:"M.Dawood",
//       age: 34,
//       about: personInfo  
// };

// obj1.about();
// obj2.about();
// personInfo();


        // 70 optional changes
// const person = {
//      firstName: "M.Shahbaz",
//      address: {houseNumber:'123'}   
// };     
// console.log(person); 
// console.log(person.firstName);
// console.log(person.address.houseNumber);

// const person = {
//      firstName: "M.Shahbaz",

// };
// console.log(person?.address?.houseNumber);
// console.log("hello ");

        // 69 clone using object.assign
// const obj1 = {
//         key1:"value1",
//         key2:"value2"
// };
// const obj2 = obj1;
// obj2.key3  = "value3";
// console.log(obj1);
// console.log(obj2);


// const obj1 = {
//         key1: "value1",
//         key2: "value2"
// };
// const obj2 = {...obj1};
// obj2.key3 = "value3";
// console.log(obj1);
// console.log(obj2);



// const obj1 = {
//        key1: "value1",
//        key2: "value2" 
// };

// const obj2 = Object.assign( {}, obj1 );
// obj2.key3 = "value3";
// console.log(obj1);
// console.log(obj2);

        // 68 maps
// const person = {
//       firstName:"M.Shahbaz",
//       age:28 ,
//       1: "one" 
// };        
// console.log(person);
// console.log(person.firstName);
// console.log(person['firstName']);
// console.log(person['1']);
// console.log(person[1]);

// for(let key in person){
//       console.log(typeof key,key)  
// }


// const person = new Map();
// console.log(person);
// person.set('firstName','M.Shahbaz');
// person.set('age',25);
// person.set(1,'one');
// // console.log(person);

// person.set([1,2,3],'oneTwoThree');
// person.set({firsName:'M.Shahbaz'},'name');
// // console.log(person.get([1,2,3]));
// // console.log(person['firsName']);
// console.log(person);
// console.log(person.get('firstName') );
// console.log(person.get('age'));
// console.log(person.get(1));
// console.log(person.get([1,2,3]) );

// for(let per in person){
//      console.log(typeof per, per);   
// }

// console.log( person.keys());
// for(let key of person.keys()){
//       console.log(typeof key, key);  
// }

// for(let key of person){
//      console.log(typeof key, key);   
// }

// for(let key,value of person){
//      console.log(key,value);   
// }

// for(let [key,value] of person){
//     console.log(typeof key,":", key, ",", typeof value,":", value); 
// }

// const person  = new Map([ ['firstName','M.Shahbaz'],['age','56']] );
// console.log(person);




        // 67 sets
// Array:-  
// const arr = [5,6,9,7];
// console.log(arr);


// const numbers = new Set([1,2,3]);
// console.log(numbers);
// console.log(numbers[1]);
// console.log(numbers.length);


// const num = new Set("abc");
// console.log(num);
// console.log(num.length);
// console.log(num[1]);


// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(3);
// console.log(numbers);


// const numbers = new Set();
// const arr = ["item3","item4"];
// const a = [8,9];
// numbers.add(1);
// numbers.add(2);
// numbers.add(arr);
// numbers.add(["item5","item6"]);
// numbers.add(7);
// numbers.add(a);
// // dublicate
// numbers.add(arr);
// console.log(numbers);
// // if(numbers.has(1)){
// //     console.log("1 is present");
// // }
// // else{
// //      console.log("not present");   
// // }

// for(let num of numbers){
//      console.log(num);   
// }


// const arr = [21,82,53,53,64,95];
// const numbers = new Set(arr);
// console.log(arr);
// console.log(numbers.length);
// console.log(numbers);


// const arr = [21,82,53,53,64,95];
// const numbers = new Set(arr);
// let length = 0;
// for(let num of numbers){
//      console.log(num);
//      length++;   
// }
// console.log("Numbers have length:",length);

        // 66 iterables (jn pr "for of" loop lg skta ha)        
 
// Array:- 
// const arr = ["apple","mango","strawberry","orange"];
// for(let array of arr){
//     console.log(array);
// }
// console.log(arr.length);
// console.log(arr[0]);


// String:- 
// const str = "M.Shahbaz";        
// for(let char of str){
//      console.log(char);
// }
// console.log(str.length);
// console.log(str[0]);


// Object:- 
// let obj  = {
//         firstName:"M.Shahbaz",
//         age:36
// };
// for(let user of obj){
//      console.log(user);    
// }
// console.log(obj.length);
// console.log(obj[2]);



        
        // 65 splice method
// const arr = ["item0","item1","item2","item3"];

// // delete (starting index, next how much elements deleted)
// arr.splice(1,2);
// arr.splice(0,1);
// console.log(arr);

// // insertion (at which index insert, how much next elements deleted, inserted value)
// arr.splice(2,0,"inserted");
// console.log(arr);

// console.log(arr); 
// const delet = arr.splice(0,1);
// console.log(delet);
// console.log(arr); 

// console.log(arr);
// const del = arr.splice(0,1,"insert1","insert2");
// console.log("deleted items",del);
// console.log(arr);


        // 64 fill method
// const arr = new Array(5).fill(9);
// console.log(arr);

// const arr = new Array(5).fill(-1);
// console.log(arr);


// const arr = [0,1,2,3,4,5,6,7,8,9];
// arr.fill(9,0,5);
// console.log(arr);


        // 63  some method( ek bhi number esa jo even hai answer "true" ho ga)
// const numbers = [21,44,96,34,56,329];
// const a = numbers.some( num=>{
//         return num%2===0;
// });
// console.log(a);

// const b = numbers.some(num=>{
//         return num>50;
// });
// console.log(b);


// //              Assignment
// // check product is less than 30k.
// const userCart = [
//         { productId:1, productName:"mobile", price:120000},
//         { productId:2, productName:"laptop", price:22000},
//         { productId:3, productName:"tv", price:15000},
//         { productId:4, productName:"laptop", price:5000},
//         { productId:5, productName:"tv", price:75000}
//     ];
// const a = userCart.some(user=>{
//      return user.price>30000;   
// });
// console.log(a);


        // 62  every method

// const numbers = [300,600,42,1249,908]; 
// const a = numbers.every( num=>{
//         return num>50;
// });
// console.log(a);


// // check every product is less than 30k.
// const userCart = [
//         { productId:1, productName:"mobile", price:12000},
//         { productId:2, productName:"laptop", price:22000},
//         { productId:3, productName:"tv", price:15000},
//         { productId:4, productName:"laptop", price:5000},
//         { productId:5, productName:"tv", price:75000}
//     ];
// const a = userCart.every( user=>{
//      return user.price<30000;   
// }); 
// console.log(a);   

        // 61  find method

// const numbers = [300,600,42,1249,908];        
// const num = numbers.find( n=>{
//         return n>600;
// });
// console.log(num);

// const animals = ["deer","monkey","lion","cat"]; 
// const a = animals.find( animal=>{
//       return animal.length==6;
// });
// console.log(a);



// const users = [
//         {userId:1, userName:"M.Shahbaz"},
//         {userId:2, userName:"M.Danish"},
//         {userId:3, userName:"M.Dawood"}
//     ]; 

// for(let user of users){
//      if(user.userId===3){
//         console.log(user.userName);
//      }
// }

// const a = users.forEach(user=>{
//         if(user.userId===3){
//               console.log(user.userName);   
//         }
// });

// const a = users.map(user=>{
//         if(user.userId===3){
//              console.log(user.userName);    
//         }
// });

// const a = users.filter( user=>{
//       if(user.userId===3){
//            console.log(user.userName);
//       }
// });

// const a = users.find(user=>{
//         if(user.userId===3){
//              console.log(user.userName);    
//         }
// });


        // 60  sort method
// let numbers = [1100, 150, 964, 99,6];
// let num = numbers.sort();
// console.log(num);


// // const userName = ["hrshit", "abcd", "mohit"];
// const userName = ['hrshit', 'abcd', 'mohit', 'nitish', 'aabc', 'ABC', 'AAZ', 'Harshit'];
// const user = userName.sort();
// console.log(user);



// // Descending to Ascending
// let numbers = [1100, 150, 964, 99,6];
// const a = numbers.sort( (a,b)=>{ 
//     return a-b;
// });
// console.log(a);



// //  Ascending to Descending
// let numbers = [1100, 150, 964, 99,6];
// const a = numbers.sort( (a,b)=>{ 
//     return b-a;
// });
// console.log(a);




// const products = [
//         { productId:1, productName:"p1", price:300},
//         { productId:2, productName:"p2", price:3000},
//         { productId:3, productName:"p3", price:200},
//         { productId:4, productName:"p4", price:8000},
//         { productId:5, productName:"p5", price:500}
//     ];
// const a = products.sort( (a,b)=>{
//         return a.price-b.price
// });    
// console.log(a);


// const b = products.sort((a,b)=>{
//         return b.price- a.price;
// });

// const bb = products.sort( (a,b)=>{
//       return b.productId-a.productId;
// });
// console.log(bb);

// const lth = products.slice(0).sort( (a,b)=>{
//         return a.price-b.price;
// });
// console.log(lth);
// console.log(products);



        // 59 reduce methods
// let numbers = [12000, 5000, 2000, 14000, 40000];

// let sum = numbers.reduce( ( total,current)=>{
//     return total+current;
// });
// console.log(sum);

// let sum = numbers.reduce( (total,current)=> total+current);
// console.log(sum);

// console.log( numbers.reduce( (total, current)=> total+current ));



// console.log( numbers.reduce( (total,current)=>{ 
//         return total+current}, 1000);
// );

// const items = [
//         {productId:1, name:"TV", price:12000},
//         {productId:2, name:"Mobile", price:5000},
//         {productId:3, name:"Laptop", price:3000}
// ];
// const sum = items.reduce( (total, current)=>{
//         return total+current.price;
// }, 10);
// console.log(sum);


        //    ruff work
// const items = [
//         {productId:1, name:"tv", price:200},
//         {productId:2, name:"mobile", price:300},
//         {productId:3, name:"laptop", price:500}
// ];
// const fil = items.filter( (item)=>{
//         return item.price>200;
// });
// const sum = fil.reduce( (total, current)=>{
//         return total+current.price;
// },0);
// console.log(sum);
// console.log(fil);


        // 58 filter methods( return true/false)
// let numbers = [3,5,1,2,6,8,90];

// const iseven = (num)=>{
//      console.log(num%2===0);
// }
// const a = numbers.filter(iseven);
// console.log(a);      
        

// let numbers = [3,5,1,2,6,8,90];

// const iseven = (num)=>{
//     return num%2===0;
// }
// const a = numbers.filter(iseven);
// console.log(a);


// let numbers = [3,5,1,2,6,8,90];
// const iseven = numbers.filter((num)=>{
//         return num%2===0;
// });
// console.log(iseven);

// let numbers = [3,5,1,2,6,8,90];
// const isodd = (num)=>{
//         return num%2!==0;
// };
// const odd = numbers.filter(isodd);
// console.log(odd);



// const items = [
//     {productId:1, name:"T.V", price:12000},
//     {productId:2, name:"Mobile", price:2000},
//     {productId:3, name:"iphone", price:85000},
//     {productId:4, name:"laptop", price:25000},
//     {productId:5, name:"android", price:14000}
// ];
// const  fil = items.filter( (item)=>{
//      return item.price > 12000;
// });
// console.log(fil);




// ruff work
// const items = [
//     {productId:1, name:"T.V", price:12000},
//     {productId:2, name:"Mobile", price:2000},
//     {productId:3, name:"iphone", price:85000},
//     {productId:4, name:"laptop", price:25000},
//     {productId:5, name:"android", price:14000}
// ];
// const fil = items.filter( item=>{ 
//      return item.price>5000; 
// });
// for(let id of fil){
//         console.log(id.productId);
// }
//  fil.forEach((id)=>{
//      console.log(id.productId,id.name);
//  });
// console.log(fil);




        // 57 map methods



        // 56 Important Array methods
// forEach(), map(), filter(), reduce()


// let arr = [1,2,3,4,5,6,7];
// function find(num, i){
//     console.log(`index is: ${i}`);
//     console.log(`Number is: ${num}*2 = ${num*2}`);
// }
// find(arr[0],0);
// find(arr[1],1);
// find(arr[2],2);
// find(arr[3],3);
// find(arr[4],4);
// find(arr[5],5);

// let arr = [2,43,89,11,93];
// function find(num,i){
//     console.log(`index is : ${i}`);
//     console.log(` ${num}*2 = ${num*2}`);
// }
// function send(array){
//     for(let i=0; i<array.length; i++){
//         find(array[i],i);
//     }
// }
// send(arr);


// let arr = [2,43,67,98,10];
// function find(arr,i){
//     console.log(`index is ${i}`);
//     console.log(`${arr}*2 = ${arr*2}`);
// }
// arr.forEach(find);


// let arr = [3,24,94,54,35];
// arr.forEach(function(arr,i){
//     console.log(`index is ${i}`);
//     console.log(`${arr}*2 = ${arr*2}`);
// });


// let arr = [3,29,94,54,11];
// arr.forEach(function(arr,i){
//     console.log(`${arr}*3 = ${arr*3}, index is ${i}`);
// });

// const users = [
//     { firstName:"M.Ali", age:23},
//     { firstName:"M.Sami", age:24},
//     { firstName:"M.Shahbaz", age:35},
//     { firstName:"M.Danish", age:55},
//     { firstName:"M.Dawood", age:12}
// ];
// for(let user of users){
//     console.log(user.firstName);
// }
// users.forEach(function(user){
//     console.log(user.firstName,user.age);
// });
// users.forEach((user,index)=>{
//     console.log(`${user.firstName},${index}`);
// });


// let numbers = [32,54,90,11,2];
// numbers.forEach( num=>{
//     console.log(`your number is ${num}`);
// });

        // 55 function returning function
// function my(){
//     return "a";
// }
// const f = my();
// console.log(f);


// function my(){
//     return [1,2,3,4,5];
// }
// const f = my();
// console.log(f);

// function my(){
//     return {age:23, firsrName:"M.Shahbaz"};
// }
// const f = my();
// console.log(f);

// function my(){
//     return 1;
// }
// const f = my();
// console.log(f);


// function main(){
//     function inside(){
//         return "Hello world!";
//     }
//     return inside;
// }
// const f = main();
// console.log(f());


// function main(){
//     return function(){
//         return "Hello world";
//     }
// }
// const f = main();
// console.log(f());


// function main(){
//     return function(){
//         console.log("hello");
//     }
// }
// const f = main();
// f();


// function my1(name){
//     console.log("Hello my1");
//     console.log(`${name}`);
// }
// function my2(shah){
//     console.log("my2");
//     shah("M.Shahbaz");
// }
// my2(my1);



        // 54 callback function
// const my = ()=>{
//     console.log("Hello world!");
// }        
// my();

// const my = (a)=>{
//    console.log(a);
//    console.log("Hello world");
// }
// my([1,2,3,4,5]);


// const my = (a)=>{
//     console.log(a);
//     console.log("Hello world");
// }
// my("abcdefghijklmnopqrstuvwxyz");


// const person ={
//     firstName:"M.",
//     lastName:"Shahbaz",
//     age:24
// };
// function my(a){
//     console.log(a);
//     console.log("Hello world!");
// }
// my(person);


// function my2(){
//     console.log("my2 function");
// }
// function my(a){
//     a();
//     console.log("Hello world!");
// }
// my();


// function my2(){
//     console.log("my2 function");
// }
// function my(a){
//     console.log(a);
//     console.log("Hello world!");
// }
// my(my2);


// function my2(){
//     console.log("Inside myFunc");
// }
// function my1(a){
//     console.log("my1 function");
//     a();
// }
// my1(my2);


// function my2(name){
//     console.log("my1 func Inside");
//     console.log(`your name is ${name}`);
// }
// function my1(callback){
//     console.log("my2 Inside func");
//     callback();
// }
// my1(my2);


// function my2(name){
//     console.log("my1 func Inside");
//     console.log(`your name is ${name}`);
// }
// function my1(callback){
//     console.log("my2 Inside func");
//     callback("M.Shahbaz");
// }
// my1(my2);

//  ruff work
// function my2(){
//     return "Inside myFunc";
// }
// function my1(a){
//     console.log("my1 function");
//     console.log(a());
// }
// my1(my2);

// function my2(){
//     return "Inside myFunc";
// }
// function my1(a){
//     console.log("my1 function");
//     console.log(a);
// }
// my1(my2());


// function my2(){
//     console.log("Inside myFunc");
// }
// function my1(a){
//     console.log("my1 function");
//     a;
// }
// my1(my2());



        // 53  Parameter  Destructuring
// const person = {
//     firstName:"M.",
//     lastName: "Shahbaz",
//     age:45
// };       

// function print(obj){
//     console.log(obj.firstName);
//     console.log(obj.lastName);
//     console.log(obj.age);
// }
// print(person);

// const person = {
//     firstName:"M.",
//     lastName:"danish"
// };
// function print( {firstName, lastName,age} ){
//     console.log(firstName);
//     console.log(lastName);
//     console.log(age);
// }
// print(person);


// const person = {
//     firstName:"M.",
//     lastName:"Dawood",
//     school:"pr"
// };
// function print( {firstName,lastName , school} ){
//     console.log(firstName);
//     console.log(lastName);
//     console.log(school);
// }
// print(person);
// // print( {
// //     school:"pp",
// //     age:22,
// //     firstName:"Danish"
// // } );



        //  52 Rest parameters
// function rest(a, b, c){
//     console.log("a:",a);
//     console.log("b:",b);
//     console.log("c:",c);
// }        
// rest(1,2,3);


// function rest(a,b,c){
//     console.log("a:",a);
//     console.log("b:",b);
//     console.log("c:",c);
// }
// rest(1,2,3,4,5);

// function rest(a,b,c){
//     console.log("a:",a);
//     console.log("b:",b);
//     console.log("c:",c);
//     console.log("d",d);
// }
// rest(1,2,3);


// function reset(a,b,...c){
//     console.log("a:",a);
//     console.log("b:",b);
//     console.log("c:",c);
//     console.log("d:",d);
// }
// reset(1,2,3,4,5,6);


// function rest(a,...num){
//     console.log(a);
//     console.log(Array.isArray(a) );
//     console.log(num);
//     console.log( Array.isArray(num) );
// }
// rest(1,2,3,4,5,6,7);

// function rest(...num){
//     let total = 0;
//     for(let n of num){
//         // console.log(n);
//         total +=n;
//     }
//     console.log(total);
// }
// rest(1,2,3,4,5);

// function rest(a,b,c,...num){
//    console.log("a:",a);
//    console.log("b:",b);
//    console.log("c:",c);
//    console.log("num:",num);

//    let total = 0;
//        for(let n of num){
//           total += n;
//        }

//     //    for(let i=0; i<num.length; i++){
//     //       total +=num[i];
//     //    }

//     //   let i=0;
//     //   while(i<num.length){
//     //     total +=num[i];
//     //     i++;
//     //   }

//     //   for(let i in num){
//     //      total +=num[i];
//     //   }
//    console.log(total);
// }
// rest(1,2,3,4,5);


         // 51 Default parameter

// function sum(a, b){
//     return a+b;
// }         
// console.log( sum(5,5) );


// function sum(a,b){
//     if(typeof b==="undefined"){
//         b=1;
//     }
//     return a+b;
// }
// console.log( sum(5) );


// function sum(a, b=0){
//    return a+b;
// }
// console.log( sum(12, 3) );


          // 50 Block scope VS function scope

// {
//     let firstName = "M.Shahbaz";
// }
// console.log(firstName);


// {
//     let firstName = "M.Shahbaz";
//     console.log(firstName);
// }


// {
//     let firstName = "M.shahbaz";
//     console.log(firstName);
// }
// {
//     let lastName = "M.Dawood";
//     console.log(lastName);
// }


// {
//     const firstName = "M.Shahbaz";
// }
// console.log(firstName);
// {
//      const firstName = "M.Dawood";
//      console.log(firstName);
// }


// {
//     const firstName = "M.Shahbaz";
//     console.log(firstName);
// }
// {
//     const firstName = "M.Dawood";
//     console.log(firstName);
// }
//  const firstName = "M.Danish";
//  console.log(firstName);


// {
//     var firstName = "M.Shahbaz";
// }
// console.log(firstName);

// {
//     var firstName = "M.Shahbaz";
//     console.log(firstName);
// }
// {
//     // var firstName = "M.Danish";
//     console.log(firstName);
// }


// {
//     let firstName = "M.Shahbaz";
//     console.log(firstName);
// }
// {
//     console.log(firstName);
// }


// if(true){
//     let firstName = "M.Shahbaz";
//     console.log(firstName);
// }
// console.log(firstName);

// if(true){
//     var firstName = "M.Danish";
//     console.log(firstName);
// }
// console.log(firstName);

// function app(){
//    if(true){
//        let firstName  = "M.Shahbaz";
//        console.log(firstName);
//    }
//    console.log(firstName);
// }
// app();

// let firstName = "M.Shahbaz";
// function app(){
//     if(true){
//         let firstName = "M.Danish";
//         console.log(firstName);
//     }
//     console.log(firstName);
// }
// app();


// function app(){
//     if(true){
//         var firstName = "M.Shahbaz";
//         console.log(firstName);
//     }
//     console.log(firstName);
// }
// app();


// function app(){
//    if(true){
//        let firstName = "M.Shahbaz";
//        console.log(firstName);
//    }
//    if(true){
//        console.log(firstName);
//    }
//    console.log(firstName);
// }
// app();

           // 49 lexical scope
// function app(){
//      const myVar = "value12";
//      function f1(){};
//      const f2 = function(){};
//      const f3 = ()=>{};

//     console.log(myVar);
// }   
// app();   


// function app(){
//     const myVar = "value12";
//     const f1 = function(){
//         console.log("Inside loop!");
//     }
//     console.log(myVar);
//     f1();
// }
// app();


// function app(){
//     let myVar = "value12";
//     const f1 = ()=>{
//         myVar = "value59";
//         console.log("f1", myVar);
//     }
//     console.log(myVar);
//     f1();
// }
// app();

// let myVar = "value12";
// function app(){
//    const f1 = ()=>{
//       console.log("f1", myVar);
//    }
//    console.log(myVar);
//    f1();
// }
// app();


// let myVar = "value12";
// function app(){
//      function f1(){
//         myVar = "value1"
//         const f2 = ()=>{
//             myVar = "value2"
//             console.log("f2", myVar);
//         }
//         console.log("f1", myVar);
//         f2();
//      }
//      console.log(myVar);
//      f1();
// }
// app();


           // 48 functions inside function

// const app = ()=>{
//     console.log("Inside loop!");
// }           
// app();


// const app = ()=>{
//     function myFunc(){
//         console.log("Hello myFunc");
//     }

//     const addTwoNumber = (num1, num2)=>{
//         return num1+num2;
//     }

//     const mul = (num1, num2)=> num1*num2;

//     console.log("Inside App");
//     console.log( addTwoNumber(4,4) );
//     console.log( mul(4,4) );
// }
// app();



           // 47 hoisting 

// hello();
// function hello(){
//     console.log("Hello world!");
// }

// hello();
// const hello = function(){
//     console.log("Hello world");
// }
// // o/p:Uncaught ReferenceError: Cannot access 'hello' before initialization


// hello();
// const hello = ()=>{
//     console.log("Hello");
// }
// // o/p:Uncaught ReferenceError: Cannot access 'hello' before initialization


// hello();
// let hello = function(){
//     console.log("Hello world!");
// }
// // o/p:Uncaught ReferenceError: Cannot access 'hello' before initialization


// hello();
// let hello =()=>{
//     console.log("hello world!");
// }
// // o/p:Uncaught ReferenceError: Cannot access 'hello' before initialization


// hello();
// var hello = function(){
//     console.log("hello world!");
// }
// // o/p: Uncaught TypeError: hello is not a function



// hello();
// var hello =()=>{
//     console.log("hello world!");
// }
// // o/p: Uncaught TypeError: hello is not a function


// console.log(hello);
// const hello = "M.Shahbaz";
// console.log(hello);
// // o/p: Uncaught ReferenceError: Cannot access 'hello' before initialization


// console.log(hello);
// let hello = "M.Shahbaz";
// console.log(hello);
// // o/p: Uncaught ReferenceError: Cannot access 'hello' before initialization 


// connsole.log(hello);
// var hello = "M.Shahbaz";
// console.log(hello);
// // o/p:-undefined




// o/p: Uncaught TypeError: hello is not a function




            // 46   Arrow Function
// const happy = ()=>{
//     console.log("Hello world!");
// }
// happy();

// const twoPlusFour = ()=>{
//     return 2+4;
// }
// console.log( twoPlusFour() );


// const sum = (num1, num2, num3)=>{
//     return num1+num2+num3;
// }
// console.log( sum(4,4,4) );


// const isEven = (num)=>{
//     if(num%2===0){
//         return true;
//     }
//     return false;
// }
// console.log( isEven(4) );


// const arr = [1,2,3,4,5];
// const findTarget = (arr, target)=>{
//      for(let i=0; i<arr.length; i++){
//         if(arr[i]===target){
//             return i+1;
//         }
//      }
//      return -1;
// }
// console.log( findTarget(arr, 3) );


            // 45 Function Expression
// const happy = function(){
//     console.log("Happy Birthday!");
// }            
// happy();

// const twoPlusFour = function(){
//     return 2+4;
// }
// console.log( twoPlusFour() );

// const sum = function( num1, num2, num3){
//     return num1 + num2 + num3;
// }
// console.log( sum(4,4,4) );


// const isEven = function(num){
//     if(num%2===0){
//         return true;
//     }
//     return false;
// }
// console.log( isEven(1) );



// const arr = [1,2,3,4,5,6,7,8,9,10,11,12];

// const findTarget = function(arr, target){
//      for(let i=0; i<arr.length; i++){
//         if(arr[i]===target){
//             return i+1;
//         }
//      }
    
// }
// console.log( findTarget(arr, 15 ) );


            // 44 function Declaration

// function happy(){
//     console.log("Happy Birthday!");
// }
// happy();
// happy();
// happy();
// happy();
// happy();



// function twoPlusFour(){
//     return 2+4;
// }
// // console.log( twoPlusFour() );
// const a = twoPlusFour();
// console.log(a);



// function sumThreeNumber(num1, num2, num3){
//     return num1 + num2 + num3;
// }
// console.log( sumThreeNumber(5,5,5) );

// function isEven(num){
//     if(num%2===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven(1));


// function isEven(num){
//     if(num%2===0){
//         return true;
//     }
//     return false;
// }
// console.log( isEven(4) );


// function isEven(num){
//     return (num%2===0);
// }
// console.log( isEven(12) );


// function firstChar( value){
//     return value[0];
// }
// console.log( firstChar("M.Shahbaz") );


// const array = [1,2,3,4,5,6,7,8,9,10,11,12];
// function findTarget(arr, target){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]===target){
//             return i+1;
//         }
//     }
//     return -1;
// }
// console.log( findTarget(array, 87) );


 
            // 43   Nested destructuring

// const users = [
//     { userId:1, name:"M.Ali", gender:"Male"},
//     { userId:2, name:"M.Sami", gender:"Male"},
//     { userId:3, name:"Eram", gender:"Female"},
//     { userId:4, name:"M.Shahbaz", gender:"Male"},
//     { userId:5, name:"M.Danish", gender:"Male"}
// ];

// const[ {userId: u1id},{},{userId:u3id, gender:u3g},{},{name:u5name}] = users;
// console.log(u1id);
// console.log(u3id);
// console.log(u3g);
// console.log(u5name);

// const [{userId:u1id, name:u1n, gender:u1g},{userId:u2id, gender:u2g}, {gender:u3g},{gender:u4g},{gender:u5g}] = users;
// console.log(u1id);
// console.log(u1n);
// console.log(u1g);
// console.log(u2id);
// console.log(u2g);
// console.log(u3g);
// console.log(u4g);
// console.log(u5g);


// 42 object inside array
// very useful in real world application

// const users = [
//     { userId:1, name:"M.Ali", gender:"Male"},
//     { userId:2, name:"M.Sami", gender:"Male"},
//     { userId:3, name:"Eram", gender:"Female"},
//     { userId:4, name:"M.Shahbaz", gender:"Male"},
//     { userId:5, name:"M.Danish", gender:"Male"}
// ];
 

// for(let user of users){
//     console.log(user.userId, user.name, user.gender);
// }



// 41 (Object destructuring)

// const person  = {
//     person_firstName: "M.",
//     person_lastName: "shahbaz",
//     person_age : "54",
// };
//  let firstName = person.person_firstName;
//  let lastName = person.person_lastName;
//  let age = person.person_age;
//        age = 33;
// console.log(firstName);
// console.log(lastName);
// console.log(age);

// const person  = {
//     person_firstName: "M.",
//     person_lastName: "shahbaz",
//     person_age : "54",
// };
//  const firstName = person.person_firstName;
//  const lastName = person.person_lastName;
//  const age = person.person_age;
//        age = 33;
// console.log(firstName);
// console.log(lastName);
// console.log(age);



//                  destructuring
// const person  = {
//     firstName: "M.",
//     lastName: "shahbaz",
//     person_age : "54",
// };
// let {firstName, lastName, person_age} = person;
// console.log(firstName);
// console.log(lastName);
// console.log(person_age);



// const person  = {
//     firstName: "M.",
//     lastName: "shahbaz",
//     person_age : "54",
// };
// const {firstName, lastName, person_age} = person;
//     person_age = 45;
// console.log(firstName);
// console.log(lastName);
// console.log(person_age);    

// const person = {
//     firstName: "M.",
//     lastName: "Shahbaz",
//     age: 34,
//     school: "P.R Boys High School"
// };
// const { firstName:fname, lastName:lname, ...rest} = person;
// // console.log(firstName);
// // console.log(lastName);
// console.log(fname);
// console.log(lname);
// console.log(rest);



// 40 (spread operator "Array")
// const array1 = [1,2,3];
// const array2 = [4,5,6];

// const newArray = [...array1, ...array2];
// const newArray2  = [...array1, ...array2, 89,99];

// console.log(newArray);
// console.log(newArray2);

// const n = [..."123456789"];
// console.log(n);
// console.log(typeof n);
// console.log( Array.isArray(n) );

// const v = [2,4,6,8];
// const l = [...v];
// console.log(l);
// console.log(typeof l);
// console.log( Array.isArray(l) );

// const b = [..."abxyz"];
// console.log(b);

// const t = [...212345];
// console.log(t);


// spread operator "Object"

// const obj1 = {
//     key1: "value1",
//     key2: "value2",
//     key1: "67"
// };
// console.log(obj1);


// const obj1 = {
//     key1: "value1",
//     key2: "value2",
// };

// const obj2 = {
//     key1: "67",
//     key3: "value3",
//     key4: "value4"
// };

// const obj3 = {...obj1, ...obj2};
// console.log(obj3);

// const newObj1 ={..."abcdefghijklmnopqrstuvuxyz"}; 
// const newObj2 ={...["item1","item2"]};
// console.log(newObj1);
// console.log(newObj2);

// 39
// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";


// const person = {
//     [key1]: value1,
//     [key2]: value2
// };

// const person = {};
// person[key1] = value1;
// person[key2] = value2;

// console.log(person);



// 38
// const person = {
//     firstName: "M.",
//     lastName: "Shahbaz",
//     age: 29
// };
// let a  = "key";
// person[a] = "M.Shahbaz@gmail.com";
// person["gender"] = "Male";
// console.log(person);

// console.log(a,person[a]);




// for(let key in person){
//     console.log(key);
//     // console.log(person.i);
// }

// for(let key in person){
//     console.log(person[key]);
// }

// for(let i in person){
//     console.log(i +": "+ person[i]);
// }

// for(let i in person){
//     console.log(`${i}: ${person[i]}`);
// }

// console.log(Object.keys(person));
// console.log( typeof Object.keys(person));
// console.log( Array.isArray( Object.keys(person) ));

// for(let key of person){
//     // console.log(key);
//     console.log(key+":"+ person[key]);
// }



// 36, 37   (Object)
// const person = {
//     firstName: "M.",
//     lastName: "Shahbaz",
//     age:29,
//     games: ["cricket", "hockey", "tennis"],
//     "person hobbies": ["sleep","gardening"]
// };
// console.log(person.age);
// console.log(person["age"]);

// person.gender= "Male";
// person["school"] = "P.R public high school";

// console.log(person["person hobbies"]);
// console.log(person);

// const key = "email";
// const person = {
//     firstName: "M.",
//     lastName: "Shahbaz",
//     age: "22"
// };
// // person.key = "khan@gmail.com";
// // person["key"] = "khan@gmail.com";
// person[key] = "khan@gmail.com";
// console.log(person);


// 35 (Array Destructuring)

// let fruits = ["apple","mango","lemon"];
// let variable1 = fruits[0]; 
// let variable2 = fruits[1];
// let variable3 = fruits[2];
// console.log(variable1);
// console.log(variable2);
// console.log(variable3);

// let fruits = ["apple","mango","lemon"];
// // const [ar1,ar2,ar3] = fruits;
// let [ar1,ar2,ar3] = fruits;

// ar1 = "value changed";

// console.log(`Fruit at index 0: ${ar1}`);
// console.log(`Fruit at index 1: ${ar2}`);
// console.log(`Fruit at index 2: ${ar3}`);

//  Scenario- I
// let fruits = ["apple","mango","lemon"];
// let [ar1,ar2] = fruits;
//    ar1 = "value changed";
// console.log(ar1);
// console.log(ar2);
// console.log(ar3);

//  Scenario- II
// let fruits = ["apple"];
// let [ar1,ar2] = fruits;

// console.log(ar1);
// console.log(ar2);

//  Scenario- III
// let fruits = ["apple","mango","lemon"];
// let [ar1,ar2] = fruits;
//    ar1 = "value changed";
// console.log(ar1);
// console.log(ar2);
// console.log(ar3);


//  Scenario- IV
// let fruits = ["apple","mango","grapes","lemon"];
// let [ar1, ar2] = fruits;
// let newArray = fruits.slice(2);

// console.log(ar1);
// console.log(ar2);
// console.log(newArray);


// let fruits = ["apple","mango","grapes","lemon"];
// let [v1,v2,...v3] = fruits;
// console.log(v1);
// console.log(v2);
// console.log(v3);



// 34 ("for in" loop in array)
// const fruits = ["apple","mango","lemon"];
// const fruits1 = [];
// for(let i in fruits){
//     fruits1.push( fruits[i] );
// }

// console.log(fruits);



// 33 ("for of" loop in array)
// const fruits = ["apple","grapes","lemon"]; 
// const fruits1 = [];

// for(let i of fruits){
//     fruits1.push(i.toUpperCase() );
// }

// console.log(fruits1);


// 32 ( "while" loop in Array)

// const fruits = ["apple","mango","lemon","grapes"];
// const fruits1 = [];

// let i = 0;
// while(i < fruits.length){
//     fruits1.push( fruits[i]);
//     i++;
// }
// console.log(fruits1);



// 31 use "const" for creating array
// const fruits = ["apple","grapes"];

// // fruits[1] = "banana";
// // fruits = ["mango"];
// // fruits.push("orange");

// console.log(fruits);


// 30  "for" loop in Arrray
// let arr = ["apple","grapes","mango"];
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i].toUpperCase());
// }

// let arr1 = [];
// for(let i=0; i<arr.length; i++){
//     arr1.push(arr[i].toUpperCase());
// }
// console.log(arr1);


// 29 How to clone array
// How to concatenate two arrays

// 1st method
// let arr = ["apple","grapes"];
// let arr1 = ["apple","grapes"];
// console.log(arr===arr1);

// arr.push("mango");
// arr.unshift("strawberry");

// console.log(arr);
// console.log(arr1);
// console.log(arr===arr1);

// 2nd
// let arr = ["apple","mango","grapes"];
// let arr2 = arr.slice(0);
// //let arr2 = arr;
// arr.push("oranges");
// console.log(arr);
// console.log(arr2);

// 2nd Method:-
// let array1 = ["item1", "item2"];
// let array2 = array1.slice(0);

// array1.push("item3");

// console.log(array1);
// console.log(array2);
// console.log(array1 === array2);


// 3rd
// let arr = ["apple","mango"];
// let arr1 = [].concat(arr);

// arr.push("orange");

// console.log(arr);
// console.log(arr1);
// console.log(arr === arr1);


// 4th
// let arr = ["apple","mango"];
// let arr1 = [...arr];

// arr.push("orange");

// console.log(arr);
// console.log(arr1);
// console.log(arr===arr1);


// let arr = ["apple","mango","banana"];
// let arr2 = ["straberry","oranges"];
// // let arr1 = [].concat(arr,["ko","po"]);
// // let arr1 = arr.slice(0).concat(arr2,["lo","ko"]);
// let arr1 = [...arr].concat("ko","po");

// console.log(arr);
// console.log(arr2);
// console.log(arr1);
// console.log(arr===arr1);


// 28 primitive vs reference

// let num = 6;
// let num1 = num;
// console.log("num:", num);
// console.log("num1:", num1);

// num++;

// console.log("num:", num);
// console.log("num1:", num1);

// let arr = ["apple","grapes","mango"];
// let arr1 = arr;
// console.log("Arr:", arr);
// console.log("Arr1:", arr1);

// arr.push("appricot");
// arr.push("banana");
// console.log("After incremented in `arr`");
// console.log("Arr:", arr);
// console.log("Arr1:", arr1);


// arr1.unshift("straberry");
// arr1.unshift("oranges");
// console.log("After incremented `arr1`");
// console.log("Arr:", arr);
// console.log("Arr1:", arr1);



// 27 ( push()/pop(), unshift(),shift() )

// let arr = [];
// arr.push("Apple");
// arr.push("Banana");
// arr.push("grapes");
// arr.push("appricot");
// arr.push("app");
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr);

// let array = [];
// array.unshift("Apple");
// array.unshift("Banana");
// array.unshift("grapes");
// array.unshift("appricot");
// array.unshift("app");
// console.log(array);
// array.shift();
// console.log(array);
// array.shift();
// array.shift();
// array.shift();
// console.log(array);


// let a =  [];
// a.push("Apple");
// a.unshift("mango");
// a.unshift("grapes");
// a.push("banana");
// console.log(a);

// a.shift();
// a.pop();
// console.log(a);


// 26 intro to arrays
// reference type
// how to create array
// ordered collection of items

// (Array)
// let arr = ["apples","grapes"];
// let num = [1,2,3,3,4,5];
// let mixed = [1,2,3,"String","abc",null,undefined,5];

// console.log(arr);
// console.log(num);
// console.log(mixed);
// console.log(mixed[3]);

// console.log(arr[0]);
// console.log(arr[1]);
// arr[1]= "Mango";
// console.log(arr[1]);
// console.log(typeof arr[1]);


// console.log(Array.isArray(arr));

// let obj = {};
// console.log(obj);
// console.log(typeof arr);
// console.log(typeof obj);




// 25 do while
// let i=0;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=5)



// 24 break keyword, continue keyword
// for(let i=0; i<=5; i++){
//    if(i===3){
//       break;
//    }
//    console.log(i);
// }
// console.log("Hello");

// for(let i=0; i<=10; i++){
//    if(i===5){
//       continue;
//    }
//    console.log(i);
// }



// 23 for loop example
// let total = 0;
// for(let i=0; i<=5; i++){
//     total +=i;
// }
// console.log(total);



// 22  for loop
// for(var i=0; i<=5; i++){
//     console.log(i);
// }
// console.log(i);



// 21 while loop example
// let i = 0;
// let total = 0;
// while(i<=5){
//     total += i;
//     i++;
// }
// console.log(total);
// console.log("hello  world!");

// let a = 5;
// console.log( a*(a+1)/2); 

// 20 while loop
// let i =0;
// let total;
// while(i>10){
//     total = total+i; 
// }
// console.log(total);


// 19



// 18
// let temp = -56;
// if(temp<0){
//    console.log("Extremely cold!");
// } 
// else if(temp<15){
//     console.log("cold weather");
// }
// else if(temp<25){
//     console.log("weather 0");
// }
// else if(temp<35){
//     console.log("Go to swim");
// }
// else if(temp<45){
//     console.log("Extremely Hot!");
// }
// else{
//     console.log("Turn on A.C");
// }


// 17  Nested if - else
// let num = 18;
// let userGuess = +prompt("Guess Number!");
// // console.log(typeof userGuess, userGuess);
// if(userGuess>num){
//     console.log("Number is too high!");
// }
// else{
//     if(userGuess==num){
//         console.log("You Won!");
//     }
//     else{
//         console.log("Number is too low!");
//     }
// } 

// let num = 18;
// let userGuess = +prompt("Guess Number!");
// if(userGuess>num){
//     console.log("Number is too high!");
// }
// else if(userGuess==num){
//     console.log("You Won!");
// }
// else{
//     console.log("Number is too low!");
// }



// 16 and or operator
// var firstName = "M.Shahbaz";
// var age = 29;
// if( firstName[0]==="M" && age>18){
//     console.log("yes");
// }
// else{
//     console.log("No");
// }

// let firstName = "M.Shahbaz";
// let age = 2;
// if(firstName[0]==="M" || age>18){
//     console.log("yes");
// }
// else{
//     console.log("No");
// }



// 15 ternary operator
// let age = 32;
// const a = age>18? "you can watch video":"you can't watch video.";
// console.log(a);

// console.log(age>18? "you can watch video":"you can't watch video.");

// 14 if-else condition
// let a = 16;
// if(a>10){
//    console.log("yes");
// }
// else{
//    console.log("false");
// }

// let b = 1;
// if(b%2===0){
//    console.log("even");
// }
// else{
//    console.log("odd");
// }

// let b = "";
// if(b){
//    console.log("fill");
// }
// else{
//    console.log("empty");
// }


// 13 truthy and falsy values

// falsy values
// var a = null;
// var a;
// var a = "";
// var a = 0;
// var a = false;

// truthy values
// 1
// -1
// abc

// var a  = "abc";
// if(a){
//    console.log("value is true");
// }
// else{
//     console.log("value is false");
// }


// 12
// var a = 23;
// var b = 12;
// console.log(a>b);
// console.log(a<b);

// console.log(7=="7");
// console.log(7==="7");

// console.log(7!=7);
// console.log(7!=="7");



// 11 undefined, Null, BigInt
// let firstName;
// let lastName = "Shahbaz";
// console.log(typeof firstName, firstName);
// console.log(typeof lastName, lastName);

// let a= null;
// console.log(typeof a,a);

// let b = 123n;
// let c = BigInt(568);
// console.log(typeof b, b);
// console.log(typeof c, c);


// 10
// var firstName = "M.";
// var lastName = "Shahbaz";
// var age = 29;
// var bio = `My name is ${firstName}${lastName} my age is ${age}`;
// console.log(bio);



// 9 string Concatenation
// var firstName = "M.";
// var lastName = "Shahbaz";
// var age = 29;
// var bio = "My name is " + firstName + lastName + " myage is " +age;
// console.log(bio);  


// 8 typeof operator, data types (primitive data types)
// data types (primitive data types)
// 1. string "M.Shshbaz"
// 2. number 2,3,4,5,6
// 3. booleans
// 4. BigInt
// 5. undefined
// 6. null
// 7. symbol

// console.log(typeof "ghj");
// console.log(typeof 63);

// console.log(typeof 466n);
// console.log(typeof true);

// var a = null;
// console.log(typeof a);

// var a$;
// console.log(typeof a$);

// // Number---> string
// var num = 245;
// // var b = "" + num;
// var b = String(num);
// console.log(typeof b);

// // string---> Number 
// var firstName = "lahore";
// // var a = +firstName;
// var a = Number(firstName); 
// console.log(typeof a);



// 7 trim(), toUpperCase(), toLowerCase(),slice()
// var firstName = "   M.Shahbaz";
// var trimmer = firstName.trim();
// console.log(`After trim:${trimmer}`);

// var firstName = "M.Shahbaz";

// var cap = firstName.toUpperCase();
// console.log(`After upperCase:${cap}`);

// var low = firstName.toLowerCase();
// console.log(`After lowerCase:${low}`);

// // const slicer = firstName.slice(2);
// const slicer = firstName.slice(0,2);
// console.log(`After slice:${slicer}`);


// 6 string indexing
// var firstName = "M.Shahbaz";
// console.log(firstName[firstName.length-1]);
// console.log(firstName.length);
// console.log(firstName[5]);


// 5 const keyword
// const pi = 3.14;
// const pi = 4;

// const pi = 3.14;
//  pi = 4;
// console.log(pi);



// 4 let keyword 
// let city = "lahore";
// city = "karachi";

// let city = "lahore";
// let city = "karachi";
// console.log(city);


 

// 3 Rules for naming variables
// let a = "hello world";
// let 11a = "hello world";
// var vary variable= "hello world";

// var vary_variable = "hello world!";
// var _varyvariable = "hello world!";
// var $varyvariable = "hello world!";
// var vary$variable = "hello world!";

// console.log($varyvariable);



// 2 "use strict";
// //  var a = "helo var";
// // let a = "helo let";
// // const a = "helo const";
// let a;
// a = "hello wprld";

// console.log(a);



// 1
// console.log("hello world!");
// console.log('hello world!');
// console.log(`hello world!`);
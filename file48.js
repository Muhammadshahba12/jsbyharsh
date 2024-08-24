// (5:29:23- 5:33:19)
// functions inside function

// const app = ()=>{
//     console.log("Inside Loop");
// }
// app();


function app(){
    const myFunc = ()=>{
        console.log("Hello from my Func");
    }

    const addTwoNumber = (num1, num2)=>{
        return num1 + num2;
    }

    const mul = (num1, num2)=> num1*num2;
    console.log("Inside App");
    myFunc();
    console.log( addTwoNumber(10,2) );
    console.log( mul(10,2) );
}
app();
// (2:40 - )



// console.log(this);
// console.log(window);
// var firstName = ."Harshit";
// console.log(firstName);
// sara code run hone se pahla "error" aya ha...iss lya "parsing" zarori ha 

// 2types of language
// interprater ==> 1st line interprate and execute(run)
// Compiler ===>  1st compile(sare code ko dakhta ha)

// in js
// 1st code is "compile" ( known as compiation phase/ parsing phase)
    // 1. Tokenizing/lexing(chote chote "chunks/ tukro" me torte hn code)
    // 2. parsing (chote chote code kosaamaj ke "AST => abstract syntax tree" bnate hn)
    //    iss ke badd code "ececutable" format ma geerate hota ha...ja ko hm execute kr sakte hn
    // 3. Code Generation( js ko hm execute kr sakte hn)
    // after compilation phase we know code belong to global scope(just information) 
// 2nd code is "execute" ()
// all code execute in execution context
// sab se pehla jo "Execution context" create hota ha use "Global Execution context" kehta hn
// 1. "Creation phase" of "Global Execution context".
    // Global memory (all below data is present in Blobal memory)
    // 1. window: {} ( window is "Global object"...in browser "window is Global object"...in Node environment "window object is different".
    // 2. firstName : undefined (var) 
    // 3. this: window   (window is provided by "browser"...jo hr waqat available hota ha aur hm ese kabhi bhi use kr sakte hn)   
// 2. code execution phase
    // 1. console.log(this);
    // 2. console.log(window);
    // 3. console.log(firstName);
    // 4. var firstName = "Harshit";
    // 5. console.log(firstName);

    // execution phase in console
    // 1. {window}
    // 2. {window}
    // 3. undefined
    // 4. firstName = harshit
    // 5. harshit

// EcmaScript( ke documentation ma khi nhi mention ka code ko pehla "compile" krna 
// ha...hn ye 2 condition ko complete krna ha..is ke ly code ko "parse" krna he pre ga)
// 1. Early error checking
// 2. Determining appropriate scope for variable

// why parse?
// taka hme pta chal ske knsa variable kss "scope" se belong krta ha
// kaha tk access kr sakte hn (it is decided before code execution)


// var firstName = ."Harshit";
// console.log(firstName);
//  javaScript ka jo code function ma nhi hota wo "Global scope" ma hota ha


//          Global Scope
//  firstName (ye "variable" nhi bne ga...ya "instruction" ha...javascript knows this information before code execution )
// 

// JavaScript
// javaScript is synchronous programming language
//    .synchronous la matlab ha jb hmara code execute ho ga...1st line execute ho rhe ha tu 2nd line pr move ni kre ga jb tk 1st line execute nhi ho jate.  
//    .Asynchronous featur is provided by "browser"
// javaScropt is single Threaded
//    . Single thread execute our code..1st ine execute nhi hoti 2nd line pr mve nhi kre ga.
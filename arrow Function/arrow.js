const greeting = ()=>{
    console.log("Good Morning");
};

greeting();
 
// const greet = value =>{console.log("Good Morning" + value);}; --> We can skip parenthesis in arguements if there is only one arguement
// greet(" Angry Bird");
 

// Defination

// Arrow functions are functions without a name and are not bound by an identifier.
// Arrow functions do not return any value and can be declared without the function keyword. 

// Usable Scenerios

// 1.It increases the readability of the code. 
// 2.Arrow functions provide a lexical this binding.
// 3.It means, they inherit the value of “this” from the enclosing scope.
// 4.This feature can be advantageous when dealing with event listeners or callback functions where the value of “this” can be uncertain.
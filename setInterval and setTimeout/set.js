let sayHi = function sayHi(){
   console.log("Good Morning Dib");
};  
let sayAlert = function sayAlert(){
   alert("Khatra Dib");
};  

setTimeout(sayAlert,2000);
setInterval(sayHi,4000);    

// Syntax 

// setTimeout(()=>{
//     console.log("Good Morning");
// },5000)

// setInterval(()=>{
//     console.log("Hi");
// },2000)

//Defination

//SetTimeout : Its is a method used to execute a code after a particular time given to it.
//SetInterval : Its is a method used to execute a code after a fixed interval(periodic time) given to it.

// Senerios :

// setInterval:It is used in senerios when we want the code not to be execute now but after some specific time we prefer.
// setTimeout:It is used in senerios when we want the code to be executed over and over after a periodic time we prefer.
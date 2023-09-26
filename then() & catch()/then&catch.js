let p1 = new Promise((resolve, reject)=>{
    console.log("Promise is pending...");
    setTimeout(()=>{
        // console.log("The promise is fullfilled");
        resolve(true);
    },2000)
})

let p2 = new Promise((resolve, reject)=>{
    console.log("Promise is pending...");
    setTimeout(()=>{
        // console.log("The promise is Rejected");
        reject(new Error("There is an error, the code is rejected"));
    },2000)
})

//To get the value

// p1.then((value)=>{
//     console.log(value); 
// })

// //To catch or access the error

// p2.catch((error)=>{
//     console.log("Some error occured in p2");
// })

//Both secerios
p2.then((value)=>{
    console.log(value); 
},(error)=>{
    console.log(error);
})



// console.log(p1);
// console.log(p2);

//Defination

//Then(promise.then) : Methods used to get the resolve value when promise is fullfilled.
//Catch(promise.catch) : Method used to catch or access the error when promise is rejected.



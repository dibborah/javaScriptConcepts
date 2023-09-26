// React is just about to get started 
// Focus on Js

// Defination: Any function can be made 'async' and the promise inside can be awaited

async function harry(){
  return 5;
}

harry().then((x) => {
  alert(x);
})

let delhiWeather = new Promise((resolve, rejected)=>{
    setTimeout(()=>{
        resolve("27 Degrees");
    },2000)
})

let bangaloreWeather = new Promise((resolve, rejected)=>{
    setTimeout(()=>{
        resolve("21 Degrees");
    },3000)
})

// async function harry(){
//     let delhiWeather
// }


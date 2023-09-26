// React is just about to get started
// Focus on Js

// Defination: Any function can be made 'async' and the promise inside can be awaited
async function harry() {
  let delhiWeather = new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve("27 Deg");
    }, 2000);
  })

  let bangaloreWeather = new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve("21 Degrees");
    }, 3000);
  })
  
  delhiWeather.then(alert);
}

console.log("Welcome to weather control room");
harry();

// harry().then((x) => {
//   alert(x);
// });

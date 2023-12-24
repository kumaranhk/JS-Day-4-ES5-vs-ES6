let jsonObj = {
    name: 'Kumaran',
    age: 22,
    city: 'Thanjavur',
    email : "kumaran@gmail.com"
  };

let keys = Object.keys(jsonObj);

//Iteration using simple for loop
console.log("Iteration using simple for loop");
for (let i = 0; i < keys.length; i++) {
  console.log(`${keys[i]} : ${jsonObj[keys[i]]}`);
}
console.log("\n");

//iteration using for in loop
console.log("Iteration using for in loop");
for (let key in jsonObj) {
    console.log(`${key} : ${jsonObj[key]}`);
}
console.log("\n");

//iteration using for of loop
console.log("Iteration using for of loop");
for (let key of keys) {
    console.log(`${key} : ${jsonObj[key]}`);
}
console.log("\n");

//iteration using for each loop
console.log("Iteration using for each loop");
keys.forEach(key => {
    console.log(`${key}: ${jsonObj[key]}`);
});
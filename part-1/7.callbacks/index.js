const fs = require("fs");

function person(name, callbackFn) {
  console.log(`Hello ${name}`);
  callbackFn();
}

function address() {
  console.log("india");
}

person("Milan Koradiya", address);

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file", err);
    return;
  }

  console.log(data);
});

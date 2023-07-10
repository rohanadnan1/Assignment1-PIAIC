let personName: string = "rohan ul hasan najmi";
let lowercaseName: string = personName.toLowerCase();
let uppercaseName: string = personName.toUpperCase();
let titlecaseName: string = personName.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase());

console.log("Lowercase Name:", lowercaseName);
console.log("Uppercase Name:", uppercaseName);
console.log("Titlecase Name:", titlecaseName);


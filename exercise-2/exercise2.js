var personName = "rohan ul hasan najmi";
var lowercaseName = personName.toLowerCase();
var uppercaseName = personName.toUpperCase();
var titlecaseName = personName.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase(); });
console.log("Lowercase Name:", lowercaseName);
console.log("Uppercase Name:", uppercaseName);
console.log("Titlecase Name:", titlecaseName);

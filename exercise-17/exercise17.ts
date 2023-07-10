let placesToVisit: string[] = ["England", "Australia", "Saudi Arabia", "Turkey", "Maldives"];

console.log("Original Order:");
console.log(placesToVisit);

console.log("\n Alphabetical Order without modifying the original list:");
placesToVisit.sort();
console.log(placesToVisit);

console.log("\n Still in Original Order:");
console.log(placesToVisit);

console.log("\n Reverse Alphabetical Order without modifying the original list:");
placesToVisit.sort().reverse();
console.log(placesToVisit);

console.log("\n Still in Original Order:");
console.log(placesToVisit);

console.log("\n Reversed Order:");
placesToVisit.reverse();
console.log(placesToVisit);

console.log("\n Reversed Order Again Back to Original:");
placesToVisit.reverse();
console.log(placesToVisit);

console.log("\n Sorted in Alphabetical Order:");
placesToVisit.sort();
console.log(placesToVisit);

console.log("\n Sorted in Reverse Alphabetical Order:");
placesToVisit.sort().reverse();
console.log(placesToVisit);

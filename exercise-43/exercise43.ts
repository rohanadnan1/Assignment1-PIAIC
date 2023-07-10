function orderSandwich(...items: string[]) {
  console.log("Sandwich Summary:");
  console.log("Bread: Whole Wheat");
  console.log("Items:");

  for (let i = 0; i < items.length; i++) {
    console.log(`- ${items[i]}`);
  }

  console.log("Enjoy your sandwich!");
  console.log("----------------------");
}
orderSandwich("Cheese", "Mayo Garlic");
orderSandwich("Onions", "Cocumber" , "Tomato");
orderSandwich("Chicken");

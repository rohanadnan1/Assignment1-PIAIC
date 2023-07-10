function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    console.log("Bread: Whole Wheat");
    console.log("Items:");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
    console.log("Enjoy your sandwich!");
    console.log("----------------------");
}
orderSandwich("Cheese", "Mayo Garlic");
orderSandwich("Onions", "Cocumber", "Tomato");
orderSandwich("Chicken");

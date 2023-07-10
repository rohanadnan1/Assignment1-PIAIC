function createCar(manufacturer, modelName) {
    var kwargs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        kwargs[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    for (var i = 0; i < kwargs.length; i += 2) {
        var key = kwargs[i];
        var value = kwargs[i + 1];
        car[key] = value;
    }
    return car;
}
var car = createCar("Hyundai", "Sonata", "color", "White", "optionalFeature", "sunroof");
console.log(car);

function createCar(manufacturer: string, modelName: string, ...kwargs: string[]): object {
  let car: any = {
    manufacturer: manufacturer,
    modelName: modelName
  };

  for (let i = 0; i < kwargs.length; i += 2) {
    const key = kwargs[i];
    const value = kwargs[i + 1];
    car[key] = value;
  }

  return car;
}

let car = createCar("Hyundai", "Sonata", "color", "White", "optionalFeature", "sunroof");
console.log(car);

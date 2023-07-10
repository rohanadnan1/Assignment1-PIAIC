let city: string[] = ["Karachi", "Sydney", "London"];
let country: string[] = ["Pakistan", "Australia", "England"];
function describe_country() {
    for (let index = 0; index < city.length; index++) {
       console.log(`${city[index]} is in ${country[index]}`); 
    }
}
describe_country();
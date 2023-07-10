var city = ["Karachi", "Sydney", "London"];
var country = ["Pakistan", "Australia", "England"];
function describe_country() {
    for (var index = 0; index < city.length; index++) {
        console.log("".concat(city[index], " is in ").concat(country[index]));
    }
}
describe_country();

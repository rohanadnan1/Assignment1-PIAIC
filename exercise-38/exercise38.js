var city = ["Karachi", "London", "Melbourne"];
var country = ["Pakistan", "England", "Australia"];
function city_country() {
    for (var index = 0; index < city.length; index++) {
        console.log("".concat(city[index], " , ").concat(country[index]));
    }
}
city_country();

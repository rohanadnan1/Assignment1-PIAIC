let city: string[] = ["Karachi", "London", "Melbourne"];
let country:string[] = ["Pakistan", "England", "Australia"];
function city_country() {
    for (let index = 0; index < city.length; index++) {
        console.log(`${city[index]} , ${country[index]}`)
    }
}
city_country();
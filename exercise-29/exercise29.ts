let user_name: string[] = ["admin", "rohan", "fahad", "asim", "kamran"];
for (let index = 0; index < user_name.length; index++) {
    if (user_name[index]==="admin") {
        console.log("hey admin would you like to see status report?")
    }
    else{
        console.log(`hey ${user_name[index]} thanks for logging in.`)
    }
}
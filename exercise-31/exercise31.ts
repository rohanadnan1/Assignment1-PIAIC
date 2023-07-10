let current_users: string[]=["Hammad", "Aslam", "Rohan", "Haris"];
let new_users: string[]= ["Rohan", "Daniyal", "Sherry", "Umer"];
for (let index = 0; index < new_users.length; index++) {
    let userExist = false;
    for (let j = 0; j < current_users.length; j++) {
        if (new_users[index].toLowerCase()===current_users[j].toLowerCase()) {
            userExist = true;
            break;
        }
        
    }
    if (userExist) {
        console.log(`the username: ${new_users[index]} already exists please try a new one`)
    }else{
        console.log(`your username: ${new_users[index]} is been alloted`);
    }
}
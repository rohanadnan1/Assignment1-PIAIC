var current_users = ["Hammad", "Aslam", "Rohan", "Haris"];
var new_users = ["Rohan", "Daniyal", "Sherry", "Umer"];
for (var index = 0; index < new_users.length; index++) {
    var userExist = false;
    for (var j = 0; j < current_users.length; j++) {
        if (new_users[index].toLowerCase() === current_users[j].toLowerCase()) {
            userExist = true;
            break;
        }
    }
    if (userExist) {
        console.log("the username: ".concat(new_users[index], " already exists please try a new one"));
    }
    else {
        console.log("your username: ".concat(new_users[index], " is been alloted"));
    }
}

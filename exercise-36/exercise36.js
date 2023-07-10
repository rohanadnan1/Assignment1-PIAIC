var shirt_size = ["large", "medium", "Small/XS"];
var shirt_msg = ["You know nothing JON SNOW", "A Lannister always pays his debt", "Dracarys"];
function make_shirt() {
    for (var index = 0; index < shirt_size.length; index++) {
        console.log("Size: ".concat(shirt_size[index]));
        console.log("Message: ".concat(shirt_msg[index]));
    }
}
make_shirt();

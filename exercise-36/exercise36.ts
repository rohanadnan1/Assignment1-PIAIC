let shirt_size: string[] = ["large", "medium", "Small/XS"];
let shirt_msg: string[] = ["You know nothing JON SNOW", "A Lannister always pays his debt", "Dracarys"];

function make_shirt() {
 for (let index = 0; index < shirt_size.length; index++) {
    console.log(`Size: ${shirt_size[index]}`);
    console.log(`Message: ${shirt_msg[index]}`);    
 }
}

make_shirt();

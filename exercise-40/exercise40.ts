let magicians_names: string[] = ["Harry Houdini", "Darren Brown", "Dynamo"];
function show_magicians() {
    for (let index = 0; index < magicians_names.length; index++) {
        console.log(`${magicians_names[index]}`);
    }
}
show_magicians();
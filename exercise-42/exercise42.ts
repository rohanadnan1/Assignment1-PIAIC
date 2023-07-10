let magicians_names: string[] = ["Harry Houdini", "Darren Brown", "Dynamo"];

function show_magicians(names: string[]) {
    for (let index = 0; index < names.length; index++) {
        console.log(`${names[index]}`);
    }
}

function make_great(names: string[]): string[] {
    let modified_names: string[] = [];

    for (let index = 0; index < names.length; index++) {
        modified_names.push("the Great " + names[index]);
    }

    return modified_names;
}

let modified_magicians_names: string[] = make_great([...magicians_names]);
show_magicians(magicians_names);
show_magicians(modified_magicians_names);

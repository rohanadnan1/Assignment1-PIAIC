var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians_names = ["Harry Houdini", "Darren Brown", "Dynamo"];
function show_magicians(names) {
    for (var index = 0; index < names.length; index++) {
        console.log("".concat(names[index]));
    }
}
function make_great(names) {
    var modified_names = [];
    for (var index = 0; index < names.length; index++) {
        modified_names.push("the Great " + names[index]);
    }
    return modified_names;
}
var modified_magicians_names = make_great(__spreadArray([], magicians_names, true));
show_magicians(magicians_names);
show_magicians(modified_magicians_names);

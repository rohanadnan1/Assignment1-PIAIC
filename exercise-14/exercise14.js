var guest_list = ["Fahad", "Hashim", "Yasir"];
var guest_cant_makeit = "Hashim";
for (var index = 0; index < guest_list.length; index++) {
    var invite_msg = "Hey ".concat(guest_list[index], " I would like to invite to a dinner...");
    console.log(invite_msg);
}
console.log("Unfortunately ".concat(guest_cant_makeit, " cannot come to dinner"));
var new_invite = "Aslam";
guest_list.splice(guest_list.indexOf(guest_cant_makeit), 1, new_invite);
console.log("In place of ".concat(guest_cant_makeit, " ").concat(new_invite, " will join us"));
for (var index = 0; index < guest_list.length; index++) {
    var invite_msg = "Hey ".concat(guest_list[index], " I would like to invite to a dinner...");
    console.log(invite_msg);
}

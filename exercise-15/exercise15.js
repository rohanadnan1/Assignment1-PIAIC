var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guest_list = ["Fahad", "Hashim", "Yasir"];
var guest_cant_makeit = "Hashim";
for (var index = 0; index < guest_list.length; index++) {
    var invite_msg = "Hey ".concat(guest_list[index], " I would like to invite to a dinner...");
    console.log(invite_msg);
}
console.log("Unfortunately ".concat(guest_cant_makeit, " cannot come to dinner"));
var new_invite = ["Aslam", "Daniyal", "Huzaifa"];
guest_list.splice.apply(guest_list, __spreadArray([guest_list.indexOf(guest_cant_makeit), 1], new_invite, false));
console.log("In place of ".concat(guest_cant_makeit, " ").concat(new_invite.join(", "), " will join us"));
for (var index = 0; index < guest_list.length; index++) {
    var invite_msg = "Hey ".concat(guest_list[index], " I would like to invite to a dinner...");
    console.log(invite_msg);
}

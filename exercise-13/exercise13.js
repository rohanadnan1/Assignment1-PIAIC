var guest_list = ["Fahad", "Hashim", "Yasir"];
for (var index = 0; index < guest_list.length; index++) {
    var invite_msg = "Hey ".concat(guest_list[index], " I would like to invite to a dinner...");
    console.log(invite_msg);
}

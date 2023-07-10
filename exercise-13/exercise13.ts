let guest_list: string[]= ["Fahad", "Hashim", "Yasir"];
for (let index = 0; index < guest_list.length; index++) {
    let invite_msg: string = `Hey ${guest_list[index]} I would like to invite to a dinner...`
    console.log(invite_msg);
}
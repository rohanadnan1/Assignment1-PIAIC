let guest_list: string[]= ["Fahad", "Hashim", "Yasir"];
let guest_cant_makeit: string= "Hashim";
for (let index = 0; index < guest_list.length; index++) {
    let invite_msg: string = `Hey ${guest_list[index]} I would like to invite to a dinner...`
    console.log(invite_msg);
}
console.log(`Unfortunately ${guest_cant_makeit} cannot come to dinner`);
let new_invite: string = "Aslam";
guest_list.splice(guest_list.indexOf(guest_cant_makeit), 1, new_invite);
console.log(`In place of ${guest_cant_makeit} ${new_invite} will join us`);
for (let index = 0; index < guest_list.length; index++) {
    let invite_msg: string = `Hey ${guest_list[index]} I would like to invite to a dinner...`
    console.log(invite_msg);
}
let guest_list: string[]= ["Fahad", "Hashim", "Yasir"];
let guest_cant_makeit: string= "Hashim";
for (let index = 0; index < guest_list.length; index++) {
    let invite_msg: string = `Hey ${guest_list[index]} I would like to invite to a dinner...`
    console.log(invite_msg);
}
console.log(`Unfortunately ${guest_cant_makeit} cannot come to dinner`);
let new_invite: string[] = ["Aslam", "Daniyal", "Huzaifa"];
guest_list.splice(guest_list.indexOf(guest_cant_makeit), 1, ...new_invite);
console.log(`In place of ${guest_cant_makeit} ${new_invite.join(", ")} will join us`);
for (let index = 0; index < guest_list.length; index++) {
    let invite_msg: string = `Hey ${guest_list[index]} I would like to invite to a dinner...`
    console.log(invite_msg);
} 
console.log("Unfortunately we can only invite two guests");
while (guest_list.length > 2) {
    let guest_removed: string = guest_list.pop()!;
    console.log(`Sorry ${guest_removed} we cannot invite you to dinner`);
}
for (let index = 0; index < guest_list.length; index++) {
      let invite_msg: string = `Hey ${guest_list[index]} I would like to invite to a dinner...`
    console.log(invite_msg);
}
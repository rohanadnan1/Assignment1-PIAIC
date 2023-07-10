var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    var numb = numbers[i];
    var ordinal = void 0;
    if (numb === 1) {
        ordinal = "1st";
    }
    else if (numb === 2) {
        ordinal = "2nd";
    }
    else if (numb === 3) {
        ordinal = "3rd";
    }
    else {
        ordinal = numb + "th";
    }
    console.log(ordinal);
}

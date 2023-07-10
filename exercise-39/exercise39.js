function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("Taylor Swift", "Lover", 33));
console.log(make_album("Ed Sheeran", undefined, 14));
console.log(make_album("Adele", "25"));

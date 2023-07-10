function make_album(artist: string, title: string, tracks?: number): object {
    const album = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album["tracks"] = tracks;
    }

    return album;
} 

console.log(make_album("Taylor Swift", "Lover", 33));
console.log(make_album("Ed Sheeran",undefined,14));
console.log(make_album("Adele", "25"));


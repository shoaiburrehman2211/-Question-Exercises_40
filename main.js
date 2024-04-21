/*
Write a function called make_album() that builds an Object describing a music album. The
function should take in an artist name and an album title, and it should return a Object containing
these two pieces of information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make
at least one new function call that includes the number of tracks on an album.
*/
function myAlbum(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var album1 = myAlbum("Faisal", "Bewafa");
var album2 = myAlbum("Rameez", "Dile Ohmeed");
var album3 = myAlbum("Zohaib", "Dhowa");
console.log(album1);
console.log(album2);
console.log(album3);
// Number of tracks
function myAlbum2(artistName, albumTitle, numberofTracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberofTracks: numberofTracks };
}
var album4 = myAlbum2("Faisal", "Bewafa", 30);
var album5 = myAlbum2("Rameez", "Dile Ohmeed", 55);
var album6 = myAlbum2("Zohaib", "Dhowa");
console.log(album1);
console.log(album2);
console.log(album3);

let goodLuck = document.getElementById("google-luck");
let answere = ["Moin!", "Wer ist Angela Merkel?", "Wie spät ist es?"];
let searchField = document.getElementById("search-field");
let num;

goodLuck.onclick = function() {
    num = Math.floor(Math.random() * 3);
    searchField.value = answere[num];
}
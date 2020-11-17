function color() {
    var d = new Date();
    document.getElementById("head").style.color="#384d35";
    document.getElementById("head1").innerHTML=d.toDateString();
}
function setDate() {
    var d = new Date();
    document.getElementById("date").innerHTML=d.toDateString();
}
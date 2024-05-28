var count;
load();
var clicker_button = document.getElementById("click");
var reset_button = document.getElementById("reset");
var counter = document.getElementById("counter");
clicker_button.addEventListener("click", click);
reset_button.addEventListener("click", reset)

function click(){
    count++;
    counter.innerHTML = count.toString();
    save();
}

function save() {
    localStorage.setItem('count', count);
}
function load() {
    var counter = document.getElementById("counter");
    var savedContent = localStorage.getItem('count');
    if (savedContent) {
        count = savedContent;
        counter.innerHTML = savedContent;
    }
    else {
        count = 0;
        counter.innerHTML = "click here!";
    }
}
function reset() {
    localStorage.clear();
    count = 0
    counter.innerHTML = "click here!";
}
var count = 0;

load();

var button = document.getElementById("click");
var counter = document.getElementById("counter");
button.addEventListener("click", function () {
    count++;
    counter.innerHTML = count.toString();
    save();
});

function save() {
    localStorage.setItem('count', count);
}

function load() {
    var savedContent = localStorage.getItem('count');
    if (savedContent) {
        var counter = document.getElementById("counter");
        count = savedContent;
        counter.innerHTML = savedContent;
    }
}
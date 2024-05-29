var score = 0;
var score_incriment = 1;
var auto_amount = 0;
load();
var clicker_button = document.getElementById("click");
var reset_button = document.getElementById("reset");
var upgrade_button = document.getElementById("upgrade");
var buy_auto_button = document.getElementById("buy_auto");
var counter = document.getElementById("counter");
clicker_button.addEventListener("click", click);
reset_button.addEventListener("click", reset)
upgrade_button.addEventListener("click", upgrade)
buy_auto_button.addEventListener("click", buy_auto)
auto();

function click() {
    score += score_incriment;
    counter.innerHTML = score.toString();
    save();
}
function upgrade() {
    if (score - 100 < 0) return;
    score -= 100;
    score_incriment++;
    counter.innerHTML = score.toString();
    save();
}
function buy_auto() {
    if (score - 1000 < 0) return;
    score -= 1000;
    auto_amount++;
    counter.innerHTML = score.toString();
    auto();
    save();
}
function auto() {
    setTimeout("auto()", 1000 / auto_amount / score_incriment);
    if (auto_amount <= 0) return;
    score++;
    counter.innerHTML = score.toString();
    save();
}

function save() {
    localStorage.setItem("score", score);
    localStorage.setItem("incriment", score_incriment);
    localStorage.setItem("auto", auto_amount);
}
function load() {
    var counter = document.getElementById("counter");
    if (localStorage.getItem("score")) {
        score = +localStorage.getItem("score");
        score_incriment = +localStorage.getItem("incriment");
        auto_amount = +localStorage.getItem("auto");
        counter.innerHTML = score;
    }
    else {
        score = 0;
        score_incriment = 1;
        auto_amount = 0;
        counter.innerHTML = "click here!";
    }
}
function reset() {
    localStorage.clear();
    location.reload();
}
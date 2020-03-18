// IDs on high score page:
// timer-display
// high-scores-section
// back-btn
// clear-btn
var timerEl = document.querySelector("#timer-display");
var backBtn = document.querySelector("#back-btn");
var clearBtn = document.querySelector("#clear-btn");

var savedScore = localStorage.getItem("savedScore");

function refreshPage(){
    timerEl.textContent = "Timer: " + savedScore;
    console.log("display saved high scores here.");
}

backBtn.addEventListener("click", function(){
    // no need to cleanup, index will reset everything
    window.location.replace("index.html");
});

clearBtn.addEventListener("click", function(){
    console.log(`Clear clicked! But just do something and stay here!!`);
});

refreshPage();
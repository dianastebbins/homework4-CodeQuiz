// IDs on index/intro page:
// timer-display
// intro-section
// start-btn
var timerEl = document.querySelector("#timer-display");
var startBtn = document.querySelector("#start-btn");
var initialTimer = 60;

function refreshPage(){
    timerEl.textContent = "Timer: " + initialTimer;
    localStorage.setItem("savedScore", initialTimer);
    localStorage.removeItem("currentGameScore");
}

startBtn.addEventListener("click", function(){
    window.location.replace("quiz.html");
});

refreshPage();

// IDs on index/intro page:
// timer-display
// intro-section
// start-btn
var timerEl = document.querySelector("#timer-display");
var startBtn = document.querySelector("#start-btn");
var initialTimer = 60;

// refresh the page means refresh timer and score!
function refreshPage(){
    timerEl.textContent = "Timer: " + initialTimer;
    localStorage.setItem("savedScore", initialTimer);
    localStorage.removeItem("currentGameScore");
}

// ...annnnd...GO!
startBtn.addEventListener("click", function(){
    window.location.replace("quiz.html");
});

refreshPage();

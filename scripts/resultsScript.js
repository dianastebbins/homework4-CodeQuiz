// IDs on results page:
// timer-display
// results-section
// final-score
// initials
// submit-btn
var timerEl = document.querySelector("#timer-display");
var finalScoreEl = document.querySelector("#final-score");
var submitBtn = document.querySelector("#submit-btn");

var savedScore = localStorage.getItem("savedScore");

submitBtn.addEventListener("click", function(){
    window.location.replace("highScore.html");
});

function refreshPage(){
    timerEl.textContent = "Timer: " + savedScore;
    finalScoreEl.textContent = "Your final score: " + savedScore;
    // console.log("resultsScript.refreshPage() function");
}

refreshPage();
// IDs on results page:
// timer-display
// results-section
// final-score
// initials
// submit-btn
var timerEl = document.querySelector("#timer-display");
var finalScoreEl = document.querySelector("#final-score");
var initialsEl = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit-btn");

var savedScore = localStorage.getItem("savedScore");
var savedStats = JSON.parse(localStorage.getItem("highScores"));

function refreshPage() {
    timerEl.textContent = "Timer: " + savedScore;
    finalScoreEl.textContent = "Your final score: " + savedScore;
}

submitBtn.addEventListener("click", function (event) {
    // make sure user entered something
    var inits = initialsEl.value;
    if (inits !== "") {
        // create user high score object from validated inits and saved score
        var thisUser = {
            userInits: inits,
            userScore: savedScore
        };
        // add this newest high score to the top of the list
        savedStats.unshift(thisUser);
        // and save it for future reference
        localStorage.setItem("highScores", JSON.stringify(savedStats));
        
        // move to high scores and display
        window.location.replace("highScore.html");
    } else {
        alert("Initials cannot be blank.");
        refreshPage();
    }
});

refreshPage();
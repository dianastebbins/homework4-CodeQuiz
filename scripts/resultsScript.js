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

submitBtn.addEventListener("click", function () {
    // make sure user entered something
    var inits = initialsEl.value;
    if (inits !== "") {
        // combine validated user initials and current score into one object
        var userEntry = {
            userInits: inits,
            userScore: savedScore
        };
        // add object to the top of the list, newest on top,
        // and save it for future reference
        savedStats.unshift(userEntry);
        localStorage.setItem("highScores", JSON.stringify(savedStats));
        
        // move to high scores page
        window.location.replace("highScore.html");
    } else {
        alert("Initials cannot be blank.");
        refreshPage();
    }
});

refreshPage();
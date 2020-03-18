// IDs on high score page:
// timer-display
// high-scores-section
// high-scores-list
// back-btn
// clear-btn
var timerEl = document.querySelector("#timer-display");
var highScoreListEl = document.querySelector("#high-scores-list");
var backBtn = document.querySelector("#back-btn");
var clearBtn = document.querySelector("#clear-btn");

var savedScore = localStorage.getItem("savedScore");
var savedStats = JSON.parse(localStorage.getItem("highScores"));

function refreshPage() {
    // update the timer on this page, although it should not be here...
    timerEl.textContent = "Timer: " + savedScore;

    if (savedStats.length > 0) {
        for (let i = 0; i < savedStats.length; i++) {
            var aStat = savedStats[i];
            var inits = aStat.userInits
            var initsScore = aStat.userScore;
            console.log("userInit: " + inits + " userScore: " + initsScore);

            // since we added newest score at the front of the list, 
            // this will display newest down to oldest
            var aStatEl = document.createElement("li");
            aStatEl.textContent = (inits + " - " + initsScore);
            highScoreListEl.appendChild(aStatEl);
        }
    }
}

backBtn.addEventListener("click", function () {
    // no need to cleanup, index will reset everything
    window.location.replace("index.html");
});

clearBtn.addEventListener("click", function () {
    // add an "are you sure" check before removing the data from localStorage
    if( confirm("Are you sure you want to delete the High Scores?") ){
        localStorage.removeItem("highScores");
        refreshPage();
    } 
    // else do nothing
});

refreshPage();
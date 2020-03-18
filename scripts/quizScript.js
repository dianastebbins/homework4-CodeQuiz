// IDs on quiz page:
// timer-display
// quiz-section
// question
// optionA-btn
// optionB-btn
// optionC-btn
// optionD-btn
// status-section
// status-msg
var timerEl = document.querySelector("#timer-display");
var questionEl = document.querySelector("#question");
var optionABtn = document.querySelector("#optionA-btn");
var optionBBtn = document.querySelector("#optionB-btn");
var optionCBtn = document.querySelector("#optionC-btn");
var optionDBtn = document.querySelector("#optionD-btn");
var statusMsgEl = document.querySelector("#status-msg");

// track players progress, initial currentScore comes from intro page reset to 60. Hopefully
var currentScore = localStorage.getItem("savedScore");
var currentQuestion = 0;    // track current question
var currentAnswer = "";     // track current correct answer option
var timerInterval;          // timer

var questions = [
    {
        question: "Words 1",
        correctOption: "a",
        answerOptions: {
            a: "truth",
            b: "lies",
            c: "more lies",
            d: "pants afire"
        }
    },
    {
        question: "Words 2",
        correctOption: "b",
        answerOptions: {
            a: "lies",
            b: "truth",
            c: "more lies",
            d: "pants afire"
        }
    },
    {
        question: "Words 3",
        correctOption: "c",
        answerOptions: {
            a: "lies",
            b: "more lies",
            c: "truth",
            d: "pants afire"
        }
    },
    {
        question: "Words 4",
        correctOption: "d",
        answerOptions: {
            a: "lies",
            b: "more lies",
            c: "pants afire",
            d: "truth"
        }
    },
    {
        question: "Words 5",
        correctOption: "b",
        answerOptions: {
            a: "lies",
            b: "truth",
            c: "more lies",
            d: "pants afire"
        }
    },
    {
        question: "Words 6",
        correctOption: "a",
        answerOptions: {
            a: "truth",
            b: "lies",
            c: "more lies",
            d: "pants afire"
        }
    },
    {
        question: "Words 7",
        correctOption: "d",
        answerOptions: {
            a: "lies",
            b: "more lies",
            c: "pants afire",
            d: "truth"
        }
    },
    {
        question: "Words 8",
        correctOption: "c",
        answerOptions: {
            a: "lies",
            b: "more lies",
            c: "truth",
            d: "pants afire"
        }
    }
];

function refreshPage() {
    // as long as there is a question left and time has not run out...
    if (currentQuestion < questions.length && currentScore > 0) {
        // get the next question to display
        var aQuestion = questions[currentQuestion];

        // the question...
        questionEl.innerHTML = aQuestion.question;
        // the answer options
        optionABtn.textContent = aQuestion.answerOptions.a;
        optionBBtn.textContent = aQuestion.answerOptions.b;
        optionCBtn.textContent = aQuestion.answerOptions.c;
        optionDBtn.textContent = aQuestion.answerOptions.d;
        // save reference to the correct option
        currentAnswer = aQuestion.correctOption;
    } else {
        stopTimer();
    }
};

function stopTimer() {
    // game is over...stop the time, record the score and then go display it
    clearInterval(timerInterval);
    localStorage.setItem("savedScore", currentScore);
    window.location.replace("results.html");
}

function startTimer() {
    // wow. looks amazingly like a piece of inclass code that starts a timer. Thanks.
    timerInterval = setInterval(function () {
        currentScore--;
        timerEl.textContent = "Timer: " + currentScore;

        if (currentScore === 0) {
            stopTimer();
        }

    }, 1000);
}

function evaluateSelection(theSelection) {
    // TODO...this message flashes off and on, maybe display it for
    // just one or two seconds?
    if (theSelection === currentAnswer) {
        statusMsgEl.textContent = "Correct!";
    } else {
        statusMsgEl.textContent = "Wrong!";
        // let's not allow negative scores
        if (currentScore < 10) {
            currentScore = 0;
        } else {
            currentScore -= 10;
        }
    }

    // setup for the next question
    currentQuestion++;
    refreshPage();
}

// evaluate if the answer selected was the correct one
optionABtn.addEventListener("click", function () {
    evaluateSelection("a");
});

optionBBtn.addEventListener("click", function () {
    evaluateSelection("b");
});

optionCBtn.addEventListener("click", function () {
    evaluateSelection("c");
});

optionDBtn.addEventListener("click", function () {
    evaluateSelection("d");
});

// let's do this!
startTimer();
refreshPage();

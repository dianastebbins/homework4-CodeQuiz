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
        question: "Which company developed JavaScript?",
        correctOption: "c",
        answerOptions: {
            a: "Microsoft",
            b: "Google",
            c: "Netscape",
            d: "IBM"
        }
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        correctOption: "b",
        answerOptions: {
            a: "<!-- comment -->",
            b: "// comment",
            c: "$(`#comment`)",
            d: "[comment]"
        }
    },
    {
        question: 'What would be the result of 3+2+"7" in JavaScript?',
        correctOption: "d",
        answerOptions: {
            a: "10",
            b: "327",
            c: "42",
            d: "57"
        }
    },
    {
        question: "Which is NOT a looping structure in JavaScript?",
        correctOption: "c",
        answerOptions: {
            a: "For",
            b: "While",
            c: "Forever",
            d: "do-while"
        }
    },
    {
        question: "What is the use of Push method in JavaScript?",
        correctOption: "c",
        answerOptions: {
            a: "Push pushes elements out of an array to empty it",
            b: "Push adds only a single element to an array",
            c: "Push adds element(s) to the end of an array",
            d: "Push adds element(s) to the beginning of an array"
        }
    },
    {
        question: "What is an anonymous function in JavaScript?",
        correctOption: "b",
        answerOptions: {
            a: "A function declared without parameters",
            b: "A function declared without any named identifier",
            c: "A function that returns only booleans",
            d: "A function that runs randomly"
        }
    },
    {
        question: "Which is NOT an example of a boolean operator in JavaScript?",
        correctOption: "d",
        answerOptions: {
            a: "&&",
            b: "!",
            c: "||",
            d: "$"
        }
    },
    {
        question: "How do you declare a three dimensional array in JavaScript?",
        correctOption: "c",
        answerOptions: {
            a: "var myArray = [3];",
            b: "var myArray = [][][];",
            c: "var myArray = [[[]]];",
            d: "var myArray = []*3;"
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

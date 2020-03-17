// IDs on quiz page:
// timer-display
// quiz-section
// question
// optionA-btn
// optionB-btn
// optionC-btn
// optionD-btn
// answer-result
// answer-result-msg
var questionEl = document.querySelector("#question");
var optionABtn = document.querySelector("#optionA-btn");
var optionBBtn = document.querySelector("#optionB-btn");
var optionCBtn = document.querySelector("#optionC-btn");
var optionDBtn = document.querySelector("#optionD-btn");
var messageEl = document.querySelector("#answer-result-msg");

var currentQuestion = 0; 
var correctAnswer = "";
var score = 60;

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
    if(currentQuestion < questions.length && score > 0) {
        var aQuestion = questions[currentQuestion];
        questionEl.innerHTML = aQuestion.question; 
        optionABtn.textContent = aQuestion.answerOptions.a;
        optionBBtn.textContent = aQuestion.answerOptions.b;
        optionCBtn.textContent = aQuestion.answerOptions.c;
        optionDBtn.textContent = aQuestion.answerOptions.d;
        correctAnswer = aQuestion.correctOption;
    } else {
        //stop timer
        //reset counter
        window.location.replace("results.html");
    }
};

function evaluateSelection(theSelection) {
    if(theSelection === correctAnswer) {
        messageEl.textContent = "Correct!";
    } else {
        messageEl.textContent = "Wrong!";
        score -= 10;
    }
}

optionABtn.addEventListener("click", function () {
    evaluateSelection("a");
    currentQuestion++;
    refreshPage();
});

optionBBtn.addEventListener("click", function () {
    evaluateSelection("b");
    currentQuestion++;
    refreshPage();
});

optionCBtn.addEventListener("click", function () {
    evaluateSelection("c");
    currentQuestion++;
    refreshPage();
});

optionDBtn.addEventListener("click", function () {
    evaluateSelection("d");
    currentQuestion++;
    refreshPage();
});

refreshPage();

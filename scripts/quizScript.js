// IDs on quiz page:
// timer-display
// quiz-section
// optionA-btn
// optionB-btn
// optionC-btn
// optionD-btn
// answer-result
// answer-result-msg
var optionABtn = document.querySelector("#optionA-btn");
var optionBBtn = document.querySelector("#optionB-btn");
var optionCBtn = document.querySelector("#optionC-btn");
var optionDBtn = document.querySelector("#optionD-btn");

optionABtn.addEventListener("click", function(){
    console.log(`A option clicked!`);
});

optionBBtn.addEventListener("click", function(){
    console.log(`B option clicked!`);
});

optionCBtn.addEventListener("click", function(){
    console.log(`C option clicked!`);
});

optionDBtn.addEventListener("click", function(){
    console.log(`D option clicked!`);
});

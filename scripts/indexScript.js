// IDs on index/intro page:
// timer-display
// intro-section
// start-btn
var startBtn = document.querySelector("#start-btn");

startBtn.addEventListener("click", function(){
    console.log(`Start button clicked!`);
    window.location.replace("quiz.html");
});

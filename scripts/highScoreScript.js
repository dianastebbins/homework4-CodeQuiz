// IDs on high score page:
// timer-display
// high-scores-section
// back-btn
// clear-btn
var backBtn = document.querySelector("#back-btn");
var clearBtn = document.querySelector("#clear-btn");

backBtn.addEventListener("click", function(){
    console.log(`Back clicked!`);
    window.location.replace("index.html");
});

clearBtn.addEventListener("click", function(){
    console.log(`Clear clicked! But just stay here!!`);
});
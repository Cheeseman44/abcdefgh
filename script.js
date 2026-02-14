const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const letterBox = document.getElementById("letterBox");
const questionBox = document.getElementById("questionBox");

// Move button (PC hover + Mobile tap)
function moveButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

// Show romantic letter
yesBtn.addEventListener("click", () => {
    questionBox.style.display = "none";
    letterBox.style.display = "block";
});

function checkAnswer(button, isCorrect) {
  if (isCorrect) {
    button.classList.add("correct");
    button.innerText += " - Correct!";
  } else {
    button.classList.add("wrong");
    button.innerText += " - Try again.";
  }
  // Disable all buttons in this quiz
  const buttons = button.parentElement.querySelectorAll("button");
  buttons.forEach(btn => btn.disabled = true);
}

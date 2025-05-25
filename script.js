
function startQuiz(id) {
    var quiz = document.getElementById(id);
    if (quiz.style.display === "none") {
        quiz.style.display = "block";
    } else {
        quiz.style.display = "none";
    }
}

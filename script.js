const questions = document.querySelectorAll(".accordian__question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    question.classList.toggle("active");
    question.nextElementSibling.classList.toggle("active");
  });
});

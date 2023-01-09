const questions = document.querySelectorAll(".accordion__question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    question.classList.toggle("active");
    question.nextElementSibling.classList.toggle("active");
  });
});

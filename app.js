const submitBtn = document.getElementById("submit");
const ratings = document.querySelectorAll(".rating-container span");
const result = document.getElementById("result");
const card = document.getElementById("card");

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    removeSelected();
    rating.classList.add("selected");
  });
});

const removeSelected = () => {
  ratings.forEach((rating) => rating.classList.remove("selected"));
};

submitBtn.addEventListener("click", () => {
  getRating();
  value = getRating();
  result.innerText = value;
  card.classList.add("show");
  console.log(value);
});

const getRating = () => {
  let score = 0;
  ratings.forEach((rating, idx) => {
    if (rating.classList.contains("selected")) {
      score = idx + 1;
    }
  });
  return score;
};

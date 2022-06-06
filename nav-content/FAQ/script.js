const questionsElements = [];
const answerElements = [];
const featureElements = [];
const answerFeaturesElement = [];

// Navigation movement
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};

const display = function (number) {
  for (let i = 0; i < answerElements.length; i++) {
    answerElements[i].classList.add("hidden");
    questionsElements[i].classList.remove("hover-question");
  }
  answerElements[number].classList.remove("hidden");
  questionsElements[number].classList.add("hover-question");
  if (window.innerWidth < 767) window.scrollTo(0, 600);
};

const displayFeature = function (number) {
  for (let i = 0; i < answerFeaturesElement.length; i++) {
    answerFeaturesElement[i].classList.add("hidden");
    featureElements[i].classList.remove("hover-question");
  }
  answerFeaturesElement[number].classList.remove("hidden");
  featureElements[number].classList.add("hover-question");
  if (window.innerWidth < 767) window.scrollTo(0, 1200);
};

for (let i = 1; i < 11; i++) {
  questionsElements.push(document.querySelector(`.number-${i}`));
}

for (let i = 1; i < 11; i++) {
  answerElements.push(document.querySelector(`.answer-${i}`));
}

for (let i = 1; i < 10; i++) {
  featureElements.push(document.querySelector(`.feature-number-${i}`));
}

for (let i = 1; i < 10; i++) {
  answerFeaturesElement.push(document.querySelector(`.feature-answer-${i}`));
}

for (let i = 0; i < questionsElements.length; i++) {
  questionsElements[i].addEventListener("click", function () {
    display(i);
  });
}

for (let i = 0; i < featureElements.length; i++) {
  featureElements[i].addEventListener("click", function () {
    displayFeature(i);
  });
}

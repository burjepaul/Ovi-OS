const questionsElements = [];
const answerElements = [];
const featureElements = [];
const answerFeaturesElement = [];
// Navigation movement
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) document.querySelector(".navbar").style.top = "0";
    else document.querySelector(".navbar").style.top = "-80px";
    prevScrollpos = currentScrollPos;
};
const display = function(number) {
    for(let i6 = 0; i6 < answerElements.length; i6++){
        answerElements[i6].classList.add("hidden");
        questionsElements[i6].classList.remove("hover-question");
    }
    answerElements[number].classList.remove("hidden");
    questionsElements[number].classList.add("hover-question");
    if (window.innerWidth < 767) window.scrollTo(0, 600);
};
const displayFeature = function(number) {
    for(let i7 = 0; i7 < answerFeaturesElement.length; i7++){
        answerFeaturesElement[i7].classList.add("hidden");
        featureElements[i7].classList.remove("hover-question");
    }
    answerFeaturesElement[number].classList.remove("hidden");
    featureElements[number].classList.add("hover-question");
    if (window.innerWidth < 767) window.scrollTo(0, 1200);
};
for(let i = 1; i < 11; i++)questionsElements.push(document.querySelector(`.number-${i}`));
for(let i1 = 1; i1 < 11; i1++)answerElements.push(document.querySelector(`.answer-${i1}`));
for(let i2 = 1; i2 < 10; i2++)featureElements.push(document.querySelector(`.feature-number-${i2}`));
for(let i3 = 1; i3 < 10; i3++)answerFeaturesElement.push(document.querySelector(`.feature-answer-${i3}`));
for(let i4 = 0; i4 < questionsElements.length; i4++)questionsElements[i4].addEventListener("click", function() {
    display(i4);
});
for(let i5 = 0; i5 < featureElements.length; i5++)featureElements[i5].addEventListener("click", function() {
    displayFeature(i5);
});

//# sourceMappingURL=FAQ.bb9a0110.js.map

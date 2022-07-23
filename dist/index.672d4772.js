// Navigation movement
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) document.querySelector(".navbar").style.top = "0";
    else document.querySelector(".navbar").style.top = "-80px";
    prevScrollpos = currentScrollPos;
};
//Scrolling movement
const allSection = document.querySelectorAll(".observer-section");
const getStartedText = document.querySelector(".plain-text");
const getStartedButton = document.querySelector(".get-started-container");
const revealSection = function(entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.08
});
allSection.forEach(function(section) {
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
});
getStartedButton.addEventListener("click", (event)=>{
    event.preventDefault();
    getStartedText.classList.toggle("hidden");
});

//# sourceMappingURL=index.672d4772.js.map

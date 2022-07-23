// Navigation movement
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) document.querySelector(".navbar").style.top = "0";
    else document.querySelector(".navbar").style.top = "-80px";
    prevScrollpos = currentScrollPos;
};
//Scrolling movement
const allSection = document.querySelectorAll('.observer-section');
const revealSection = function(entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15
});
allSection.forEach(function(section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});

//# sourceMappingURL=autosnap.bba19b89.js.map

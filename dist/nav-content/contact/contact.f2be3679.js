let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) document.querySelector(".navbar").style.top = "0";
    else document.querySelector(".navbar").style.top = "-80px";
    prevScrollpos = currentScrollPos;
};

//# sourceMappingURL=contact.f2be3679.js.map

let prevScrollpos=window.pageYOffset;window.onscroll=function(){let e=window.pageYOffset;document.querySelector(".navbar").style.top=prevScrollpos>e?"0":"-80px",prevScrollpos=e};const allSection=document.querySelectorAll(".observer-section"),revealSection=function(e,o){const[t]=e;t.isIntersecting&&(t.target.classList.remove("section--hidden"),o.unobserve(t.target))},sectionObserver=new IntersectionObserver(revealSection,{root:null,threshold:.15});allSection.forEach((function(e){sectionObserver.observe(e),e.classList.add("section--hidden")}));
//# sourceMappingURL=index.a81d90e5.js.map

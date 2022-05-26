const case1 = document.querySelector('.case-1')
const case2 = document.querySelector('.case-2')
const case3 = document.querySelector('.case-3')

const case1Display = document.querySelector('.case-1-display')
const case2Display = document.querySelector('.case-2-display')
const case3Display = document.querySelector('.case-3-display')
const empty = document.querySelector('.empty-div')
// Navigation movement

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

//Scrolling movement
const allSection = document.querySelectorAll('.observer-section')

const revealSection = function(entries, observer){
  const [entry] = entries;

  if(!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}


const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
})

allSection.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add('section--hidden')
})

const showCase1 = () => {
  case1Display.classList.remove('hidden')
  case2Display.classList.add('hidden')
  case3Display.classList.add('hidden')
  empty.classList.add('hidden')
  window.scrollTo(0, 500)
}

const showCase2 = () => {
  case2Display.classList.remove('hidden')
  case1Display.classList.add('hidden')
  case3Display.classList.add('hidden')
  empty.classList.add('hidden')
}

const showCase3 = () => {
  case3Display.classList.remove('hidden')
  case2Display.classList.add('hidden')
  case1Display.classList.add('hidden')
  empty.classList.add('hidden')
}
const cl = () => console.log(1)

case1.addEventListener('click', showCase1)
case2.addEventListener('click', showCase2)
case3.addEventListener('click', showCase3)

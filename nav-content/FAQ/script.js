const questionsElements=[]
const answerElements = []

const display = function(number){
  for(let i = 0 ; i<answerElements.length; i++){
    answerElements[i].classList.add('hidden')
  }
  answerElements[number].classList.remove('hidden')
}

for (let i = 1; i < 11; i++) {
  questionsElements.push(document.querySelector(`.number-${i}`))
}

for(let i =1; i < 11; i++){
  answerElements.push(document.querySelector(`.answer-${i}`))
}


for(let i = 0; i < questionsElements.length; i++){
  questionsElements[i].addEventListener("click", function(){
    display(i)
  })
}

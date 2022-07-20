const correctAnswers = ["B","B","B","B"]

const form = document.querySelector(".quiz-form")
const resultDiv = document.querySelector(".result")
const resultPercentage = document.querySelector(".resultpercentage")

// Calculate the score when user clicks submit button
form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let score = 0

    let userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value]
    userAnswers.forEach((answer,index)=>{
        if (answer === correctAnswers[index]){
            score += 25
        }
    })

    // Show the score
    resultDiv.classList.remove("d-none")
    resultPercentage.textContent = score + "%"
})


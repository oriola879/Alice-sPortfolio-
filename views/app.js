const feedbackForm = document.getElementById('feedbackForm')
const feedbackContainer = document.querySelector('.feedbacks')
const nameInput = feedbackForm["name"]
const emailInput = feedbackForm["email"]
const messageInput = feedbackForm["message"]

const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

const addFeedback = (name, email, message) => { 
feedbacks.push({
    name,
    email,
    message
})
localStorage.setItem("feedbacks", JSON.stringify(feedbacks))

return {name, email, message}
}

const createFeedbackElement = ({name, email , message}) => { 
    const feedbackDiv = document.createElement('div')
    const feedbackName = document.createElement('h2')
    const feedbackEmail = document.createElement('h6')
    const feedbackMessage= document.createElement('p')

    feedbackName.innerText = "Name: " + name
    feedbackEmail.innerText = "Email: " + email
    feedbackMessage.innerText = "Message: " + message

    feedbackDiv.append(feedbackName, feedbackEmail, feedbackMessage)

    feedbackContainer.appendChild(feedbackDiv)
}

feedbacks.forEach (createFeedbackElement)

feedbackForm.onsubmit = e => { 
e.preventDefault(); 

const newFeedback = addFeedback (
    nameInput.value,
    emailInput.value,
    messageInput.value
)
createFeedbackElement(newFeedback)

nameInput.value = "";
emailInput.value = "";
messageInput.value =  ""

}
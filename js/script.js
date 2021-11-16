// define the Quiz Container, the Result Container and the Submit Button

const quizContainer = document.getElementById("quiz");
const resultsContiner = document.getElementById("result");
const submitContainer = document.getElementById("submit");

const myQuestions = [
    {
        question: "What does HTML stand for?",
        answers: {
            a: "Hyperlinks and Text Markup Language",
            b: "Hypertext Markup Language",
            c: "Home Tool Markup Language"
        },
        correctAnswer: "b"
    },
    {
        question: "What does FTP stand for?",
        answers: {
            a: "Files To Put online",
            b: "File Transfer Protocol",
            c: "File Transfer Please"
        },
        correctAnswer: "b"
    },
    {
        question: "What is a web server?",
        answers: {
            a: "Computer program that delivers content",
            b: "World Wide Web",
            c: "A remote computer that is used to network computers"
        },
        correctAnswer: "a"
    },
    {
        question: "What is a web server?",
        answers: {
            a: "Computer program that delivers content",
            b: "World Wide Web",
            c: "A remote computer that is used to network computers"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the below statements is equivalent to $add += $add ?",
        answers: {
            a: "$add = $add +$add",
            b: "$add = $add + 1",
            c: "$add = $add + $add + 1"
        },
        correctAnswer: "a"
    },
    {
        question: "PHP’s numerically indexed array begin with position __.",
        answers: {
            a: "-1",
            b: "0",
            c: "1"
        },
        correctAnswer: "b"
    },
    {
        question: "What is a web browser?",
        answers: {
            a: "Something in my dashboard",
            b: "Used to make web pages",
            c: "Software application for retrieving and presenting information on the web"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the following is an advantage of using frames in web pages?",
        answers: {
            a: "Frames are used to display multiple web pages in one window",
            b: "Frames takes long to load, especially when they contain alot of pictures",
            c: "Frames adds to the creativity and aesthetic of a web site"
        },
        correctAnswer: "c"
    },
    {
        question: "Choose the correct HTML tag for the largest heading",
        answers: {
            a: "heading",
            b: "head",
            c: "h1"
        },
        correctAnswer: "c"
    },
    {
        question: "Which property is used to change the left margin of an element?",
        answers: {
            a: "padding-left",
            b: "margin-left",
            c: "indent"
        },
        correctAnswer: "b"
    }
];

console.log(`${myQuestions.length} Questions`);
function buildQuiz() {
    // Store the Questions und Answers in HTML Output
    const output = [];

    myQuestions.forEach(function(currentQuestion, questionNumber) {
        const answers = [];

        for(letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter}:
                    ${currentQuestion.answers[letter]}
                </label>`
            )
        }
        output.push(
            `<div class="slide">
                <div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join("")}</div>
            </div>`
        )
    })

    quizContainer.innerHTML = output.join("");
}

buildQuiz();

function showResults() {
    let numCorrect = 0;
    const answerContainers = quizContainer.querySelectorAll(".answers");

    myQuestions.forEach(function(currentQuestion, questionNumber) {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name= question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainer.style.color = "#0984e3";
        } else {
            answerContainer.style.color = "#d63031";
        }
    })
    resultsContiner.innerHTML = `${numCorrect} of ${myQuestions.length} Questions is Correct!`
}
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;


function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    if(currentSlide === 0) {
        previousBtn.style.display = "none"
    } else {
        previousBtn.style.display = "inline-block"
    }
    if(currentSlide === slides.length - 1) {
        nextBtn.style.display = "none";
        submitContainer.style.display = "inline-block"
    } else {
        nextBtn.style.display = "inline-block";
        submitContainer.style.display = "none"
    }
}

showSlide(currentSlide);

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

nextBtn.addEventListener("click", showNextSlide);
previousBtn.addEventListener("click", showPreviousSlide);

submitContainer.addEventListener("click", showResults);
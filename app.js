const quizData = [
    {
        question: 'Which country held the 2016 Summer Olympics?',
        a: 'China',
        b: 'Ireland',
        c: 'Brazil',
        d: 'Italy',
        correct: 'c'
    },
    {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'a'
    },
    {
        question: "What is the color of Donald Duck's bowtie?",
        a: 'Red',
        b: 'Yellow',
        c: 'Blue',
        d: 'White',
        correct: 'a'
    },
    {
        question: "What was the name of the band Lionel Richie was a part of?",
        a: 'King Harvest',
        b: 'Spectrums',
        c: 'Commodores',
        d: 'The Marshall Tucker band',
        correct: 'c'
    },
    {
        question: 'Which animal does not appear in the Chinese zodiac?',
        a: 'Dragon',
        b: 'Rabbit',
        c: 'Dog',
        d: 'Hummingbird',
        correct: 'd'
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;

}

function deselectAnswers() {

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    

    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length){

            loadQuiz();
    
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at 
                ${score}/${quizData.length} questions.</h2> 
                <button onclick="location.reload()">Reload</button>
                `
            //TODO: Show esults
           
        }
    }

   

    
})
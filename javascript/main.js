
/* This is the data of quiz */ 

quizData = [
    {
        Question : 'How fast can a cat run ? ', 
        a : '30mph',
        b : '20mpn',
        c : '10mph',
        correct : 'c',
    },
    {
        Question : 'How long can a house cat live ? ',
        a : 'until 5 years',
        b : 'until 10 years',
        c : 'until 16 years',
        correct : 'c',
    },
    {
        Question : 'How fast can a dog run ? ', 
        a : '30mph',
        b : '20 mph',
        c : '15mph',
        correct : 'b',
    },
];

/* Some important variables */

const mainQuestion = document.getElementById('question'); 
const aText = document.getElementById('a-text');
const bText = document.getElementById('b-text');
const cText = document.getElementById('c-text');
let currentQuestion = 0;
let scores = 0;
const btn = document.getElementById('btn');
const answersEls = document.querySelectorAll('.answer');
const answers = undefined;

/* This function is important to show the questions in your screen */
loadQuiz()
function loadQuiz() {
    deselect()
    // to show main question
    
    mainQuestion.innerText = quizData[currentQuestion].Question;
    // to show options 

    aText.innerText = quizData[currentQuestion].a;

    bText.innerText = quizData[currentQuestion].b;

    cText.innerText = quizData[currentQuestion].c;

    
};


/* This function is for change the content with evrey click on submit */

btn.addEventListener('click' , () => {
    
    let answer = getSelected();
    const quizCon = document.getElementById('quizCon');

    if ( answer){
        if(answer === quizData[currentQuestion].correct){
            scores++
        };
    }

    currentQuestion++;
    getSelected();
    if (currentQuestion < quizData.length){
        loadQuiz();
    }else{
        quizCon.innerHTML = `Your score is ${scores}/${quizData.length}`
    };


});

/* This functions for deselect radio options and get options id*/


function deselect() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    }); 
};

function getSelected(){
    var answer = undefined;
    answersEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    });
    return answer;
    
    
};
getSelected()
/* This function is for calulate the score */ 



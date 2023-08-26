var quiz = {
    "English": [
        {
            "id": 1,
            "question": "What is the plural form of the word 'child'?",
            "options": [
                {
                    "a": "childs",
                    "b": "childes",
                    "c": "children",
                    "d": "childen"
                }
            ],
            "answer": "children",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "Which word is a synonym for 'happy'?",
            "options": [
                {
                    "a": "sad",
                    "b": "joyful",
                    "c": "angry",
                    "d": "confused"
                }
            ],
            "answer": "joyful",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "What is the opposite of the word 'benevolent'?",
            "options": [
                {
                    "a": "kind",
                    "b": "generous",
                    "c": "malevolent",
                    "d": "friendly"
                }
            ],
            "answer": "malevolent",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "Which of the following sentences is grammatically correct?",
            "options": [
                {
                    "a": "Me and my friend went to the park.",
                    "b": "My friend and me went to the park.",
                    "c": "My friend and I went to the park.",
                    "d": "Me and my friend went to park."
                }
            ],
            "answer": "My friend and I went to the park.",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "What is the past tense of the verb 'eat'?",
            "options": [
                {
                    "a": "eated",
                    "b": "ate",
                    "c": "eateded",
                    "d": "eaten"
                }
            ],
            "answer": "ate",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "Which of the following is an example of a preposition?",
            "options": [
                {
                    "a": "run",
                    "b": "jump",
                    "c": "at",
                    "d": "fast"
                }
            ],
            "answer": "at",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "What is the superlative form of the adjective 'big'?",
            "options": [
                {
                    "a": "biggest",
                    "b": "bigger",
                    "c": "bigly",
                    "d": "bigified"
                }
            ],
            "answer": "biggest",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "Which of the following sentences contains a metaphor?",
            "options": [
                {
                    "a": "The sun is shining brightly.",
                    "b": "Her smile is like sunshine.",
                    "c": "The wind whispered through the trees.",
                    "d": "The waves danced on the shore."
                }
            ],
            "answer": "Her smile is like sunshine.",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "What is the correct spelling of the word?",
            "options": [
                {
                    "a": "recieve",
                    "b": "receeve",
                    "c": "recieve",
                    "d": "receive"
                }
            ],
            "answer": "receive",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "Which sentence is written in passive voice?",
            "options": [
                {
                    "a": "The cat chased the mouse.",
                    "b": "The mouse was chased by the cat.",
                    "c": "The dog barked loudly.",
                    "d": "She sings beautifully."
                }
            ],
            "answer": "The mouse was chased by the cat.",
            "score": 0,
            "status": ""
        }
    ]
}






var quizApp = function () {
this.score = 0;
this.qno = 1;
this.currentque = 0;
var totalque = quiz.English.length;
this.displayQuiz = function (cque) {
this.currentque = cque;
if (this.currentque < totalque) {
$("#tque").html(totalque);
$("#previous").attr("disabled", false);
$("#next").attr("disabled", false);
$("#qid").html(quiz.English[this.currentque].id + '.');
$("#question").html(quiz.English[this.currentque].question);
$("#question-options").html("");
for (var key in quiz.English[this.currentque].options[0]) {
if (quiz.English[this.currentque].options[0].hasOwnProperty(key)) {
$("#question-options").append(
"<div class='form-check option-block'>" +
"<label class='form-check-label'>" +
"<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.English[this.currentque].options[0][key] + "'><span id='optionval'>" +
quiz.English[this.currentque].options[0][key] +
"</span></label>"
);
}
}
}
if (this.currentque <= 0) {
$("#previous").attr("disabled", true);
}
if (this.currentque >= totalque) {
$('#next').attr('disabled', true);
for (var i = 0; i < totalque; i++) {
this.score = this.score + quiz.English[i].score;
}
return this.showResult(this.score);
}
}
this.showResult = function (scr) {
$("#result").addClass('result');
$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
for (var j = 0; j < totalque; j++) {
var res;
if (quiz.English[j].score == 0) {
res = '<span class="wrong">' + quiz.English[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
} else {
res = '<span class="correct">' + quiz.English[j].score + '</span><i class="fa fa-check c-correct"></i>';
}
$("#result").append(
'<div class="result-question"><span>Q ' + quiz.English[j].id + '</span> &nbsp;' + quiz.English[j].question + '</div>' +
'<div><b>Correct answer:</b> &nbsp;' + quiz.English[j].answer + '</div>' +
'<div class="last-row"><b>Score:</b> &nbsp;' + res +
'</div>'
);
}
}
this.checkAnswer = function (option) {
var answer = quiz.English[this.currentque].answer;
option = option.replace(/</g, "&lt;") //for <
option = option.replace(/>/g, "&gt;") //for >
option = option.replace(/"/g, "&quot;")
if (option == quiz.English[this.currentque].answer) {
if (quiz.English[this.currentque].score == "") {
quiz.English[this.currentque].score = 1;
quiz.English[this.currentque].status = "correct";
}
} else {
quiz.English[this.currentque].status = "wrong";
}
}
this.changeQuestion = function (cque) {
this.currentque = this.currentque + cque;
this.displayQuiz(this.currentque);
}
}
var jsq = new quizApp();
var selectedopt;
$(document).ready(function () {
jsq.displayQuiz(0);
$('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
//var radio = $(this).find('input:radio');
$(this).prop("checked", true);
selectedopt = $(this).val();
});
});
$('#next').click(function (e) {
e.preventDefault();
if (selectedopt) {
jsq.checkAnswer(selectedopt);
}
jsq.changeQuestion(1);
});
$('#previous').click(function (e) {
e.preventDefault();
if (selectedopt) {
jsq.checkAnswer(selectedopt);
}
jsq.changeQuestion(-1);
});


document.addEventListener("DOMContentLoaded", function () {
    jsq.displayQuiz(0);
    generateQuestionNavigation();

    $('#next').click(function (e) {
        e.preventDefault();
        if (selectedopt) {
            jsq.checkAnswer(selectedopt);
        }
        jsq.changeQuestion(1);
        selectedopt = ''; // Clear selected option after moving to the next question
        updateQuestionNavigation();
    });

    $('#previous').click(function (e) {
        e.preventDefault();
        if (selectedopt) {
            jsq.checkAnswer(selectedopt);
        }
        jsq.changeQuestion(-1);
        selectedopt = ''; // Clear selected option after moving to the previous question
        updateQuestionNavigation();
    });
});

function generateQuestionNavigation() {
    var questionNav = document.getElementById("question-navigation");
    for (var i = 0; i < quiz.English.length; i++) {
        var button = document.createElement("button");
        button.textContent = i + 1;
        button.classList.add("question-nav-button");
        button.addEventListener("click", function (e) {
            jsq.currentque = parseInt(e.target.textContent) - 1;
            jsq.displayQuiz(jsq.currentque);
            updateQuestionNavigation();
        });
        questionNav.appendChild(button);
    }
}

function updateQuestionNavigation() {
    var questionButtons = document.querySelectorAll(".question-nav-button");
    for (var i = 0; i < questionButtons.length; i++) {
        questionButtons[i].classList.remove("current");
        if (i === jsq.currentque) {
            questionButtons[i].classList.add("current");
        }
    }
}
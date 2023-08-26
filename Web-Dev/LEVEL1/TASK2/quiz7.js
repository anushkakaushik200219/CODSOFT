var quiz = {
    "LR": [
        {
            "id": 1,
            "question": "If all dogs are mammals and some mammals are not cats, can we conclude that some dogs are not cats?",
            "options": [
                {
                    "a": "Yes",
                    "b": "No",
                    "c": "Cannot be determined",
                    "d": "Depends on additional information"
                }
            ],
            "answer": "Yes",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "If no cats are reptiles and some reptiles are not birds, can we conclude that some birds are not cats?",
            "options": [
                {
                    "a": "Yes",
                    "b": "No",
                    "c": "Cannot be determined",
                    "d": "Depends on additional information"
                }
            ],
            "answer": "No",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "All squares are rectangles. All rectangles are polygons. What can we conclude?",
            "options": [
                {
                    "a": "All squares are polygons",
                    "b": "All rectangles are squares",
                    "c": "Some rectangles are squares",
                    "d": "All polygons are rectangles"
                }
            ],
            "answer": "Some rectangles are squares",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "If some roses are red and all red things are beautiful, can we conclude that some roses are beautiful?",
            "options": [
                {
                    "a": "Yes",
                    "b": "No",
                    "c": "Cannot be determined",
                    "d": "Depends on additional information"
                }
            ],
            "answer": "Yes",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "All planets are celestial bodies. Some celestial bodies are not stars. Can we conclude that some planets are not stars?",
            "options": [
                {
                    "a": "Yes",
                    "b": "No",
                    "c": "Cannot be determined",
                    "d": "Depends on additional information"
                }
            ],
            "answer": "Yes",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "If all birds can fly and some birds are not pigeons, can we conclude that some non-pigeon birds can fly?",
            "options": [
                {
                    "a": "Yes",
                    "b": "No",
                    "c": "Cannot be determined",
                    "d": "Depends on additional information"
                }
            ],
            "answer": "Yes",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "If no elephants are carnivores and all carnivores are animals, can we conclude that no elephants are animals?",
            "options": [
                {
                    "a": "Yes",
                    "b": "No",
                    "c": "Cannot be determined",
                    "d": "Depends on additional information"
                }
            ],
            "answer": "No",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "All swans are birds. Some birds are not ducks. What can we conclude?",
            "options": [
                {
                    "a": "Some swans are ducks",
                    "b": "Some ducks are swans",
                    "c": "All swans are ducks",
                    "d": "No conclusion can be drawn"
                }
            ],
            "answer": "No conclusion can be drawn",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "If no lions are tigers and all tigers are cats, can we conclude that no lions are cats?",
            "options": [
                {
                    "a": "Yes",
                    "b": "No",
                    "c": "Cannot be determined",
                    "d": "Depends on additional information"
                }
            ],
            "answer": "Yes",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "If all students are hardworking and some hardworking individuals are successful, can we conclude that some students are successful?",
            "options": [
                {
                    "a": "Yes",
                    "b": "No",
                    "c": "Cannot be determined",
                    "d": "Depends on additional information"
                }
            ],
            "answer": "Yes",
            "score": 0,
            "status": ""
        }
    ]
}



var quizApp = function () {
this.score = 0;
this.qno = 1;
this.currentque = 0;
var totalque = quiz.LR.length;
this.displayQuiz = function (cque) {
this.currentque = cque;
if (this.currentque < totalque) {
$("#tque").html(totalque);
$("#previous").attr("disabled", false);
$("#next").attr("disabled", false);
$("#qid").html(quiz.LR[this.currentque].id + '.');
$("#question").html(quiz.LR[this.currentque].question);
$("#question-options").html("");
for (var key in quiz.LR[this.currentque].options[0]) {
if (quiz.LR[this.currentque].options[0].hasOwnProperty(key)) {
$("#question-options").append(
"<div class='form-check option-block'>" +
"<label class='form-check-label'>" +
"<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.LR[this.currentque].options[0][key] + "'><span id='optionval'>" +
quiz.LR[this.currentque].options[0][key] +
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
this.score = this.score + quiz.LR[i].score;
}
return this.showResult(this.score);
}
}
this.showResult = function (scr) {
$("#result").addClass('result');
$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
for (var j = 0; j < totalque; j++) {
var res;
if (quiz.LR[j].score == 0) {
res = '<span class="wrong">' + quiz.LR[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
} else {
res = '<span class="correct">' + quiz.LR[j].score + '</span><i class="fa fa-check c-correct"></i>';
}
$("#result").append(
'<div class="result-question"><span>Q ' + quiz.LR[j].id + '</span> &nbsp;' + quiz.LR[j].question + '</div>' +
'<div><b>Correct answer:</b> &nbsp;' + quiz.LR[j].answer + '</div>' +
'<div class="last-row"><b>Score:</b> &nbsp;' + res +
'</div>'
);
}
}
this.checkAnswer = function (option) {
var answer = quiz.LR[this.currentque].answer;
option = option.replace(/</g, "&lt;") //for <
option = option.replace(/>/g, "&gt;") //for >
option = option.replace(/"/g, "&quot;")
if (option == quiz.LR[this.currentque].answer) {
if (quiz.LR[this.currentque].score == "") {
quiz.LR[this.currentque].score = 1;
quiz.LR[this.currentque].status = "correct";
}
} else {
quiz.LR[this.currentque].status = "wrong";
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
    for (var i = 0; i < quiz.LR.length; i++) {
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
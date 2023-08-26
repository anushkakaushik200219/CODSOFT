

var quiz = {
    "Math": [
        {
            "id": 1,
            "question": "What is the value of π (pi) to two decimal places?",
            "options": [
                {
                    "a": "3.14",
                    "b": "3.16",
                    "c": "3.18",
                    "d": "3.12"
                }
            ],
            "answer": "3.14",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "If a triangle has sides of lengths 6, 8, and 10, what type of triangle is it?",
            "options": [
                {
                    "a": "Equilateral",
                    "b": "Isosceles",
                    "c": "Scalene",
                    "d": "Right"
                }
            ],
            "answer": "Right",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "What is the square root of 25?",
            "options": [
                {
                    "a": "5",
                    "b": "2.5",
                    "c": "7",
                    "d": "4"
                }
            ],
            "answer": "5",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "What is the result of 7 * 9?",
            "options": [
                {
                    "a": "56",
                    "b": "63",
                    "c": "49",
                    "d": "72"
                }
            ],
            "answer": "63",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "What is the area of a rectangle with length 12 units and width 8 units?",
            "options": [
                {
                    "a": "24 square units",
                    "b": "96 square units",
                    "c": "64 square units",
                    "d": "20 square units"
                }
            ],
            "answer": "96 square units",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "What is the result of 18 ÷ 3?",
            "options": [
                {
                    "a": "6",
                    "b": "5",
                    "c": "3",
                    "d": "9"
                }
            ],
            "answer": "6",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "Simplify the expression: 2x + 5 - 3x",
            "options": [
                {
                    "a": "-x + 5",
                    "b": "-x + 2",
                    "c": "5x - 3",
                    "d": "-3x + 5"
                }
            ],
            "answer": "-x + 5",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "What is the value of 2² + 3³?",
            "options": [
                {
                    "a": "25",
                    "b": "31",
                    "c": "17",
                    "d": "13"
                }
            ],
            "answer": "31",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "If x = 4 and y = 7, what is the value of 2x + 3y?",
            "options": [
                {
                    "a": "14",
                    "b": "29",
                    "c": "25",
                    "d": "18"
                }
            ],
            "answer": "29",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "What is the result of 5! (factorial)?",
            "options": [
                {
                    "a": "15",
                    "b": "20",
                    "c": "120",
                    "d": "25"
                }
            ],
            "answer": "120",
            "score": 0,
            "status": ""
        }
    ]
}


var quizApp = function () {
this.score = 0;
this.qno = 1;
this.currentque = 0;
var totalque = quiz.Math.length;
this.displayQuiz = function (cque) {
this.currentque = cque;
if (this.currentque < totalque) {
$("#tque").html(totalque);
$("#previous").attr("disabled", false);
$("#next").attr("disabled", false);
$("#qid").html(quiz.Math[this.currentque].id + '.');
$("#question").html(quiz.Math[this.currentque].question);
$("#question-options").html("");
for (var key in quiz.Math[this.currentque].options[0]) {
if (quiz.Math[this.currentque].options[0].hasOwnProperty(key)) {
$("#question-options").append(
"<div class='form-check option-block'>" +
"<label class='form-check-label'>" +
"<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.Math[this.currentque].options[0][key] + "'><span id='optionval'>" +
quiz.Math[this.currentque].options[0][key] +
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
this.score = this.score + quiz.Math[i].score;
}
return this.showResult(this.score);
}
}
this.showResult = function (scr) {
$("#result").addClass('result');
$("#result").html("<h1 class='res-header'><br/><br/>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
for (var j = 0; j < totalque; j++) {
var res;
if (quiz.Math[j].score == 0) {
res = '<span class="wrong">' + quiz.Math[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
} else {
res = '<span class="correct">' + quiz.Math[j].score + '</span><i class="fa fa-check c-correct"></i>';
}
$("#result").append(
'<div class="result-question"><span>Q ' + quiz.Math[j].id + '</span> &nbsp;' + quiz.Math[j].question + '</div>' +
'<div><b>Correct answer:</b> &nbsp;' + quiz.Math[j].answer + '</div>' +
'<div class="last-row"><b>Score:</b> &nbsp;' + res +
'</div>'
);
}
}
this.checkAnswer = function (option) {
var answer = quiz.Math[this.currentque].answer;
option = option.replace(/</g, "&lt;") //for <
option = option.replace(/>/g, "&gt;") //for >
option = option.replace(/"/g, "&quot;")
if (option == quiz.Math[this.currentque].answer) {
if (quiz.Math[this.currentque].score == "") {
quiz.Math[this.currentque].score = 1;
quiz.Math[this.currentque].status = "correct";
}
} else {
quiz.Math[this.currentque].status = "wrong";
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
    for (var i = 0; i < quiz.Math.length; i++) {
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
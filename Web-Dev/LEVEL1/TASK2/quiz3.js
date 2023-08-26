

var quiz = {
    "CSS": [
        {
            "id": 1,
            "question": "What does CSS stand for?",
            "options": [
                {
                    "a": "Colorful Style Sheets",
                    "b": "Cascading Style Sheets",
                    "c": "Computer Style Sheets",
                    "d": "Creative Style Sheets"
                }
            ],
            "answer": "Cascading Style Sheets",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "Which HTML element is used to link a CSS file to an HTML document?",
            "options": [
                {
                    "a": "&lt;style&gt;",
                    "b": "&lt;link&gt;",
                    "c": "&lt;css&gt;",
                    "d": "&lt;stylesheet&gt;"
                }
            ],
            "answer": "&lt;link&gt;",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "Which CSS property is used to change the text color of an element?",
            "options": [
                {
                    "a": "text-color",
                    "b": "color",
                    "c": "font-color",
                    "d": "text-style"
                }
            ],
            "answer": "color",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "Which CSS property is used to set the background color of an element?",
            "options": [
                {
                    "a": "bg-color",
                    "b": "background-color",
                    "c": "color",
                    "d": "bg"
                }
            ],
            "answer": "background-color",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "Which CSS property is used to control the spacing between elements?",
            "options": [
                {
                    "a": "margin",
                    "b": "padding",
                    "c": "spacing",
                    "d": "border"
                }
            ],
            "answer": "margin",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "Which CSS property is used to control the font size of an element's text?",
            "options": [
                {
                    "a": "font-style",
                    "b": "font-size",
                    "c": "text-size",
                    "d": "size"
                }
            ],
            "answer": "font-size",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "Which CSS property is used to create a border around an element?",
            "options": [
                {
                    "a": "border-style",
                    "b": "border-color",
                    "c": "border",
                    "d": "border-width"
                }
            ],
            "answer": "border",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "Which CSS property is used to control the alignment of text within an element?",
            "options": [
                {
                    "a": "align",
                    "b": "text-align",
                    "c": "alignment",
                    "d": "text-style"
                }
            ],
            "answer": "text-align",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "Which CSS property is used to set the width of an element?",
            "options": [
                {
                    "a": "width",
                    "b": "element-width",
                    "c": "size",
                    "d": "element-size"
                }
            ],
            "answer": "width",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "Which CSS property is used to create rounded corners for an element?",
            "options": [
                {
                    "a": "corner-style",
                    "b": "border-radius",
                    "c": "rounded-corners",
                    "d": "corner-radius"
                }
            ],
            "answer": "border-radius",
            "score": 0,
            "status": ""
        }
    ]
}

var quizApp = function () {
this.score = 0;
this.qno = 1;
this.currentque = 0;
var totalque = quiz.CSS.length;
this.displayQuiz = function (cque) {
this.currentque = cque;
if (this.currentque < totalque) {
$("#tque").html(totalque);
$("#previous").attr("disabled", false);
$("#next").attr("disabled", false);
$("#qid").html(quiz.CSS[this.currentque].id + '.');
$("#question").html(quiz.CSS[this.currentque].question);
$("#question-options").html("");
for (var key in quiz.CSS[this.currentque].options[0]) {
if (quiz.CSS[this.currentque].options[0].hasOwnProperty(key)) {
$("#question-options").append(
"<div class='form-check option-block'>" +
"<label class='form-check-label'>" +
"<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.CSS[this.currentque].options[0][key] + "'><span id='optionval'>" +
quiz.CSS[this.currentque].options[0][key] +
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
this.score = this.score + quiz.CSS[i].score;
}
return this.showResult(this.score);
}
}
this.showResult = function (scr) {
$("#result").addClass('result');
$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
for (var j = 0; j < totalque; j++) {
var res;
if (quiz.CSS[j].score == 0) {
res = '<span class="wrong">' + quiz.CSS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
} else {
res = '<span class="correct">' + quiz.CSS[j].score + '</span><i class="fa fa-check c-correct"></i>';
}
$("#result").append(
'<div class="result-question"><span>Q ' + quiz.CSS[j].id + '</span> &nbsp;' + quiz.CSS[j].question + '</div>' +
'<div><b>Correct answer:</b> &nbsp;' + quiz.CSS[j].answer + '</div>' +
'<div class="last-row"><b>Score:</b> &nbsp;' + res +
'</div>'
);
}
}
this.checkAnswer = function (option) {
var answer = quiz.CSS[this.currentque].answer;
option = option.replace(/</g, "&lt;") //for <
option = option.replace(/>/g, "&gt;") //for >
option = option.replace(/"/g, "&quot;")
if (option == quiz.CSS[this.currentque].answer) {
if (quiz.CSS[this.currentque].score == "") {
quiz.CSS[this.currentque].score = 1;
quiz.CSS[this.currentque].status = "correct";
}
} else {
quiz.CSS[this.currentque].status = "wrong";
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
    for (var i = 0; i < quiz.CSS.length; i++) {
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
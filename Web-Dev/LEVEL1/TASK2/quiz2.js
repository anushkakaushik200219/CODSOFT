

var quiz = {
    "HTML": [
        {
            "id": 1,
            "question": "What does HTML stand for?",
            "options": [
                {
                    "a": "Hyper Text Markup Language",
                    "b": "High Tech Machine Language",
                    "c": "Hyperlink and Text Markup Language",
                    "d": "None of the above"
                }
            ],
            "answer": "Hyper Text Markup Language",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "What is the correct HTML element for inserting a line break?",
            "options": [
                {
                    "a": "&lt;br&gt;",
                    "b": "&lt;lb&gt;",
                    "c": "&lt;break&gt;",
                    "d": "&lt;linebreak&gt;"
                }
            ],
            "answer": "&lt;br&gt;",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "Which HTML element is used for creating an unordered list?",
            "options": [
                {
                    "a": "&lt;ol&gt;",
                    "b": "&lt;ul&gt;",
                    "c": "&lt;li&gt;",
                    "d": "&lt;list&gt;"
                }
            ],
            "answer": "&lt;ul&gt;",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
            "options": [
                {
                    "a": "alt",
                    "b": "title",
                    "c": "src",
                    "d": "link"
                }
            ],
            "answer": "alt",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "Which HTML element defines the title of a document?",
            "options": [
                {
                    "a": "&lt;meta&gt;",
                    "b": "&lt;head&gt;",
                    "c": "&lt;title&gt;",
                    "d": "&lt;document&gt;"
                }
            ],
            "answer": "&lt;title&gt;",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "Which HTML element is used for creating a hyperlink?",
            "options": [
                {
                    "a": "&lt;link&gt;",
                    "b": "&lt;href&gt;",
                    "c": "&lt;a&gt;",
                    "d": "&lt;hyperlink&gt;"
                }
            ],
            "answer": "&lt;a&gt;",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "Which HTML element is used for creating a table row?",
            "options": [
                {
                    "a": "&lt;tr&gt;",
                    "b": "&lt;td&gt;",
                    "c": "&lt;th&gt;",
                    "d": "&lt;table-row&gt;"
                }
            ],
            "answer": "&lt;tr&gt;",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "Which HTML element defines the structure of an HTML document?",
            "options": [
                {
                    "a": "&lt;body&gt;",
                    "b": "&lt;structure&gt;",
                    "c": "&lt;main&gt;",
                    "d": "&lt;html&gt;"
                }
            ],
            "answer": "&lt;html&gt;",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "Which HTML element is used for creating a form?",
            "options": [
                {
                    "a": "&lt;input&gt;",
                    "b": "&lt;form&gt;",
                    "c": "&lt;field&gt;",
                    "d": "&lt;create&gt;"
                }
            ],
            "answer": "&lt;form&gt;",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "Which HTML attribute specifies the URL of the page to link to?",
            "options": [
                {
                    "a": "src",
                    "b": "href",
                    "c": "link",
                    "d": "url"
                }
            ],
            "answer": "href",
            "score": 0,
            "status": ""
        }
    ]
}

var quizApp = function () {
this.score = 0;
this.qno = 1;
this.currentque = 0;
var totalque = quiz.HTML.length;
this.displayQuiz = function (cque) {
this.currentque = cque;
if (this.currentque < totalque) {
$("#tque").html(totalque);
$("#previous").attr("disabled", false);
$("#next").attr("disabled", false);
$("#qid").html(quiz.HTML[this.currentque].id + '.');
$("#question").html(quiz.HTML[this.currentque].question);
$("#question-options").html("");
for (var key in quiz.HTML[this.currentque].options[0]) {
if (quiz.HTML[this.currentque].options[0].hasOwnProperty(key)) {
$("#question-options").append(
"<div class='form-check option-block'>" +
"<label class='form-check-label'>" +
"<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.HTML[this.currentque].options[0][key] + "'><span id='optionval'>" +
quiz.HTML[this.currentque].options[0][key] +
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
this.score = this.score + quiz.HTML[i].score;
}
return this.showResult(this.score);
}
}
this.showResult = function (scr) {
$("#result").addClass('result');
$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
for (var j = 0; j < totalque; j++) {
var res;
if (quiz.HTML[j].score == 0) {
res = '<span class="wrong">' + quiz.HTML[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
} else {
res = '<span class="correct">' + quiz.HTML[j].score + '</span><i class="fa fa-check c-correct"></i>';
}
$("#result").append(
'<div class="result-question"><span>Q ' + quiz.HTML[j].id + '</span> &nbsp;' + quiz.HTML[j].question + '</div>' +
'<div><b>Correct answer:</b> &nbsp;' + quiz.HTML[j].answer + '</div>' +
'<div class="last-row"><b>Score:</b> &nbsp;' + res +
'</div>'
);
}
}
this.checkAnswer = function (option) {
var answer = quiz.HTML[this.currentque].answer;
option = option.replace(/</g, "&lt;") //for <
option = option.replace(/>/g, "&gt;") //for >
option = option.replace(/"/g, "&quot;")
if (option == quiz.HTML[this.currentque].answer) {
if (quiz.HTML[this.currentque].score == "") {
quiz.HTML[this.currentque].score = 1;
quiz.HTML[this.currentque].status = "correct";
}
} else {
quiz.HTML[this.currentque].status = "wrong";
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
    for (var i = 0; i < quiz.HTML.length; i++) {
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
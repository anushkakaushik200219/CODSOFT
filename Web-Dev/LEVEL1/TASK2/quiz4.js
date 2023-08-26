var quiz = {
    "PHP": [
        {
            "id": 1,
            "question": "What does PHP stand for?",
            "options": [
                {
                    "a": "Personal Hypertext Processor",
                    "b": "PHP: Hypertext Preprocessor",
                    "c": "Python Hypertext Processor",
                    "d": "Powerful Hypertext Processor"
                }
            ],
            "answer": "PHP: Hypertext Preprocessor",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "Which of the following is used to output data to the browser in PHP?",
            "options": [
                {
                    "a": "print()",
                    "b": "echo()",
                    "c": "output()",
                    "d": "display()"
                }
            ],
            "answer": "echo()",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "Which symbol is used to begin a PHP variable?",
            "options": [
                {
                    "a": "$",
                    "b": "@",
                    "c": "#",
                    "d": "&"
                }
            ],
            "answer": "$",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "Which PHP function is used to connect to a MySQL database?",
            "options": [
                {
                    "a": "mysqli_query()",
                    "b": "mysql_connect()",
                    "c": "pdo_connect()",
                    "d": "db_connect()"
                }
            ],
            "answer": "mysqli_connect()",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "Which PHP loop is used to iterate over an array?",
            "options": [
                {
                    "a": "for loop",
                    "b": "while loop",
                    "c": "do-while loop",
                    "d": "foreach loop"
                }
            ],
            "answer": "foreach loop",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "Which superglobal variable is used to collect form data after submitting an HTML form?",
            "options": [
                {
                    "a": "$_REQUEST",
                    "b": "$_GET",
                    "c": "$_POST",
                    "d": "$_DATA"
                }
            ],
            "answer": "$_POST",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "In PHP, what is the correct way to start a session?",
            "options": [
                {
                    "a": "session_start()",
                    "b": "start_session()",
                    "c": "init_session()",
                    "d": "begin_session()"
                }
            ],
            "answer": "session_start()",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "Which PHP function is used to include the contents of a file into another file?",
            "options": [
                {
                    "a": "require_once()",
                    "b": "include()",
                    "c": "import()",
                    "d": "load()"
                }
            ],
            "answer": "include()",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "What is the correct way to define a constant in PHP?",
            "options": [
                {
                    "a": "defineConstant('CONST_NAME', 'value')",
                    "b": "const CONST_NAME = 'value';",
                    "c": "$CONST_NAME = 'value';",
                    "d": "constant('CONST_NAME', 'value')"
                }
            ],
            "answer": "const CONST_NAME = 'value';",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "Which PHP function is used to count the number of elements in an array?",
            "options": [
                {
                    "a": "array_count()",
                    "b": "count_array()",
                    "c": "array_length()",
                    "d": "count()"
                }
            ],
            "answer": "count()",
            "score": 0,
            "status": ""
        }
    ]
}


var quizApp = function () {
this.score = 0;
this.qno = 1;
this.currentque = 0;
var totalque = quiz.PHP.length;
this.displayQuiz = function (cque) {
this.currentque = cque;
if (this.currentque < totalque) {
$("#tque").html(totalque);
$("#previous").attr("disabled", false);
$("#next").attr("disabled", false);
$("#qid").html(quiz.PHP[this.currentque].id + '.');
$("#question").html(quiz.PHP[this.currentque].question);
$("#question-options").html("");
for (var key in quiz.PHP[this.currentque].options[0]) {
if (quiz.PHP[this.currentque].options[0].hasOwnProperty(key)) {
$("#question-options").append(
"<div class='form-check option-block'>" +
"<label class='form-check-label'>" +
"<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.PHP[this.currentque].options[0][key] + "'><span id='optionval'>" +
quiz.PHP[this.currentque].options[0][key] +
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
this.score = this.score + quiz.PHP[i].score;
}
return this.showResult(this.score);
}
}
this.showResult = function (scr) {
$("#result").addClass('result');
$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
for (var j = 0; j < totalque; j++) {
var res;
if (quiz.PHP[j].score == 0) {
res = '<span class="wrong">' + quiz.PHP[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
} else {
res = '<span class="correct">' + quiz.PHP[j].score + '</span><i class="fa fa-check c-correct"></i>';
}
$("#result").append(
'<div class="result-question"><span>Q ' + quiz.PHP[j].id + '</span> &nbsp;' + quiz.PHP[j].question + '</div>' +
'<div><b>Correct answer:</b> &nbsp;' + quiz.PHP[j].answer + '</div>' +
'<div class="last-row"><b>Score:</b> &nbsp;' + res +
'</div>'
);
}
}
this.checkAnswer = function (option) {
var answer = quiz.PHP[this.currentque].answer;
option = option.replace(/</g, "&lt;") //for <
option = option.replace(/>/g, "&gt;") //for >
option = option.replace(/"/g, "&quot;")
if (option == quiz.PHP[this.currentque].answer) {
if (quiz.PHP[this.currentque].score == "") {
quiz.PHP[this.currentque].score = 1;
quiz.PHP[this.currentque].status = "correct";
}
} else {
quiz.PHP[this.currentque].status = "wrong";
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
    for (var i = 0; i < quiz.PHP.length; i++) {
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
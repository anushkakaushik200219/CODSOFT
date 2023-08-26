var quiz = {
    "Python": [
        {
            "id": 1,
            "question": "Which of the following is a correct way to comment out multiple lines in Python?",
            "options": [
                {
                    "a": "# This is a comment",
                    "b": "// This is a comment",
                    "c": "/* This is a comment */",
                    "d": "/* This is a comment"
                }
            ],
            "answer": "# This is a comment",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "What will be the output of the following Python code snippet?\n\n```python\nx = 5\ny = 2\nprint(x // y)```",
            "options": [
                {
                    "a": "2",
                    "b": "2.5",
                    "c": "2.0",
                    "d": "2.2"
                }
            ],
            "answer": "2",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "In Python, which loop is used to iterate over a sequence (like a list or string)?",
            "options": [
                {
                    "a": "for loop",
                    "b": "while loop",
                    "c": "until loop",
                    "d": "repeat loop"
                }
            ],
            "answer": "for loop",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "What is the output of the following Python code snippet?\n\n```python\nmy_string = 'Hello, World!'\nprint(my_string[7:])```",
            "options": [
                {
                    "a": "Hello,",
                    "b": "World!",
                    "c": "o, World!",
                    "d": "ello, World!"
                }
            ],
            "answer": "World!",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "Which of the following data types is mutable in Python?",
            "options": [
                {
                    "a": "int",
                    "b": "str",
                    "c": "list",
                    "d": "tuple"
                }
            ],
            "answer": "list",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "What is the result of the expression: 3 + 2 * 2?",
            "options": [
                {
                    "a": "10",
                    "b": "7",
                    "c": "8",
                    "d": "11"
                }
            ],
            "answer": "7",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "In Python, which function is used to get the length of a list?",
            "options": [
                {
                    "a": "count()",
                    "b": "size()",
                    "c": "length()",
                    "d": "len()"
                }
            ],
            "answer": "len()",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "Which of the following is the correct syntax to create a function in Python?",
            "options": [
                {
                    "a": "def my_function:",
                    "b": "my_function(def):",
                    "c": "def my_function():",
                    "d": "function my_function():"
                }
            ],
            "answer": "def my_function():",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "What is the output of the following Python code snippet?\n\n```python\nmy_list = [1, 2, 3]\nmy_list.append(4)\nprint(my_list)```",
            "options": [
                {
                    "a": "[1, 2, 3]",
                    "b": "[1, 2, 3, 4]",
                    "c": "[4, 3, 2, 1]",
                    "d": "[1, 2, 3]4"
                }
            ],
            "answer": "[1, 2, 3, 4]",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "Which keyword is used to exit a loop prematurely in Python?",
            "options": [
                {
                    "a": "break",
                    "b": "stop",
                    "c": "exit",
                    "d": "terminate"
                }
            ],
            "answer": "break",
            "score": 0,
            "status": ""
        }
    ]
}





var quizApp = function () {
this.score = 0;
this.qno = 1;
this.currentque = 0;
var totalque = quiz.Python.length;
this.displayQuiz = function (cque) {
this.currentque = cque;
if (this.currentque < totalque) {
$("#tque").html(totalque);
$("#previous").attr("disabled", false);
$("#next").attr("disabled", false);
$("#qid").html(quiz.Python[this.currentque].id + '.');
$("#question").html(quiz.Python[this.currentque].question);
$("#question-options").html("");
for (var key in quiz.Python[this.currentque].options[0]) {
if (quiz.Python[this.currentque].options[0].hasOwnProperty(key)) {
$("#question-options").append(
"<div class='form-check option-block'>" +
"<label class='form-check-label'>" +
"<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.Python[this.currentque].options[0][key] + "'><span id='optionval'>" +
quiz.Python[this.currentque].options[0][key] +
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
this.score = this.score + quiz.Python[i].score;
}
return this.showResult(this.score);
}
}
this.showResult = function (scr) {
$("#result").addClass('result');
$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
for (var j = 0; j < totalque; j++) {
var res;
if (quiz.Python[j].score == 0) {
res = '<span class="wrong">' + quiz.Python[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
} else {
res = '<span class="correct">' + quiz.Python[j].score + '</span><i class="fa fa-check c-correct"></i>';
}
$("#result").append(
'<div class="result-question"><span>Q ' + quiz.Python[j].id + '</span> &nbsp;' + quiz.Python[j].question + '</div>' +
'<div><b>Correct answer:</b> &nbsp;' + quiz.Python[j].answer + '</div>' +
'<div class="last-row"><b>Score:</b> &nbsp;' + res +
'</div>'
);
}
}
this.checkAnswer = function (option) {
var answer = quiz.Python[this.currentque].answer;
option = option.replace(/</g, "&lt;") //for <
option = option.replace(/>/g, "&gt;") //for >
option = option.replace(/"/g, "&quot;")
if (option == quiz.Python[this.currentque].answer) {
if (quiz.Python[this.currentque].score == "") {
quiz.Python[this.currentque].score = 1;
quiz.Python[this.currentque].status = "correct";
}
} else {
quiz.Python[this.currentque].status = "wrong";
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
    for (var i = 0; i < quiz.Python.length; i++) {
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
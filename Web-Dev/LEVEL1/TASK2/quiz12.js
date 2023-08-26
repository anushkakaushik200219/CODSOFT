var quiz = {
    "C": [
        {
            "id": 1,
            "question": "Which symbol is used to indicate a single-line comment in C?",
            "options": [
                {
                    "a": "//",
                    "b": "/*",
                    "c": "##",
                    "d": "--"
                }
            ],
            "answer": "//",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "What is the correct format for the main function in C?",
            "options": [
                {
                    "a": "void main()",
                    "b": "int main()",
                    "c": "main()",
                    "d": "int main(void)"
                }
            ],
            "answer": "int main()",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "Which operator is used for taking the address of a variable in C?",
            "options": [
                {
                    "a": "&",
                    "b": "*",
                    "c": "#",
                    "d": "$"
                }
            ],
            "answer": "&",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "What is the size of the 'int' data type in C?",
            "options": [
                {
                    "a": "4 bytes",
                    "b": "2 bytes",
                    "c": "8 bytes",
                    "d": "Depends on the system"
                }
            ],
            "answer": "Depends on the system",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "What is the output of the following code?\n\n#include <stdio.h>\n\nint main() {\n    int x = 10;\n    printf(\"%d\\n\", x++);\n    return 0;\n}",
            "options": [
                {
                    "a": "10",
                    "b": "11",
                    "c": "0",
                    "d": "Compile error"
                }
            ],
            "answer": "10",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "Which header file should be included to use the 'printf' and 'scanf' functions?",
            "options": [
                {
                    "a": "input.h",
                    "b": "stdio.h",
                    "c": "output.h",
                    "d": "format.h"
                }
            ],
            "answer": "stdio.h",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "In C, how is a character data type declared?",
            "options": [
                {
                    "a": "char",
                    "b": "character",
                    "c": "chr",
                    "d": "ch"
                }
            ],
            "answer": "char",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "What is the purpose of 'break' statement in a loop?",
            "options": [
                {
                    "a": "It terminates the program.",
                    "b": "It skips the current iteration of the loop.",
                    "c": "It continues with the next iteration of the loop.",
                    "d": "It is used to end the 'switch' statement."
                }
            ],
            "answer": "It skips the current iteration of the loop.",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "Which function is used to read a character from the standard input in C?",
            "options": [
                {
                    "a": "scanf",
                    "b": "get",
                    "c": "read",
                    "d": "getchar"
                }
            ],
            "answer": "getchar",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "What does the 'sizeof' operator return?",
            "options": [
                {
                    "a": "Size of a variable in bytes",
                    "b": "Size of a variable in bits",
                    "c": "Memory address of a variable",
                    "d": "Type of a variable"
                }
            ],
            "answer": "Size of a variable in bytes",
            "score": 0,
            "status": ""
        }
    ]
}







var quizApp = function () {
this.score = 0;
this.qno = 1;
this.currentque = 0;
var totalque = quiz.C.length;
this.displayQuiz = function (cque) {
this.currentque = cque;
if (this.currentque < totalque) {
$("#tque").html(totalque);
$("#previous").attr("disabled", false);
$("#next").attr("disabled", false);
$("#qid").html(quiz.C[this.currentque].id + '.');
$("#question").html(quiz.C[this.currentque].question);
$("#question-options").html("");
for (var key in quiz.C[this.currentque].options[0]) {
if (quiz.C[this.currentque].options[0].hasOwnProperty(key)) {
$("#question-options").append(
"<div class='form-check option-block'>" +
"<label class='form-check-label'>" +
"<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.C[this.currentque].options[0][key] + "'><span id='optionval'>" +
quiz.C[this.currentque].options[0][key] +
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
this.score = this.score + quiz.C[i].score;
}
return this.showResult(this.score);
}
}
this.showResult = function (scr) {
$("#result").addClass('result');
$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
for (var j = 0; j < totalque; j++) {
var res;
if (quiz.C[j].score == 0) {
res = '<span class="wrong">' + quiz.C[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
} else {
res = '<span class="correct">' + quiz.C[j].score + '</span><i class="fa fa-check c-correct"></i>';
}
$("#result").append(
'<div class="result-question"><span>Q ' + quiz.C[j].id + '</span> &nbsp;' + quiz.C[j].question + '</div>' +
'<div><b>Correct answer:</b> &nbsp;' + quiz.C[j].answer + '</div>' +
'<div class="last-row"><b>Score:</b> &nbsp;' + res +
'</div>'
);
}
}
this.checkAnswer = function (option) {
var answer = quiz.C[this.currentque].answer;
option = option.replace(/</g, "&lt;") //for <
option = option.replace(/>/g, "&gt;") //for >
option = option.replace(/"/g, "&quot;")
if (option == quiz.C[this.currentque].answer) {
if (quiz.C[this.currentque].score == "") {
quiz.C[this.currentque].score = 1;
quiz.C[this.currentque].status = "correct";
}
} else {
quiz.C[this.currentque].status = "wrong";
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
    for (var i = 0; i < quiz.C.length; i++) {
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
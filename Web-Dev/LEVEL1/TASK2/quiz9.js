var quiz = {
    "JAVA": [
        {
            "id": 1,
            "question": "Which of the following is the correct syntax to declare a variable named 'count' of type integer in Java?",
            "options": [
                {
                    "a": "integer count;",
                    "b": "count = int;",
                    "c": "int count;",
                    "d": "declare int count;"
                }
            ],
            "answer": "int count;",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "What is the output of the following Java code snippet?\n\n```java\nint x = 5;\nSystem.out.println(x++ + \" \" + ++x);```",
            "options": [
                {
                    "a": "5 6",
                    "b": "6 6",
                    "c": "5 5",
                    "d": "6 5"
                }
            ],
            "answer": "5 6",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "Which of the following is the correct way to define a constant variable 'PI' with a value of 3.14159 in Java?",
            "options": [
                {
                    "a": "const PI = 3.14159;",
                    "b": "define PI 3.14159",
                    "c": "final double PI = 3.14159;",
                    "d": "PI = 3.14159;"
                }
            ],
            "answer": "final double PI = 3.14159;",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "Which method is used to read input from the user in Java?",
            "options": [
                {
                    "a": "System.in()",
                    "b": "read()",
                    "c": "input()",
                    "d": "Scanner.nextLine()"
                }
            ],
            "answer": "Scanner.nextLine()",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "Which keyword is used for dynamic memory allocation in Java?",
            "options": [
                {
                    "a": "dynamic",
                    "b": "new",
                    "c": "alloc",
                    "d": "malloc"
                }
            ],
            "answer": "new",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "What is the output of the following Java code snippet?\n\n```java\nint[] arr = {1, 2, 3, 4, 5};\nSystem.out.println(arr[2]);```",
            "options": [
                {
                    "a": "1",
                    "b": "2",
                    "c": "3",
                    "d": "4"
                }
            ],
            "answer": "3",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "In Java, what is the keyword used to define a class?",
            "options": [
                {
                    "a": "class",
                    "b": "define",
                    "c": "struct",
                    "d": "object"
                }
            ],
            "answer": "class",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "What does the '->' operator do in Java?",
            "options": [
                {
                    "a": "It is used to access class members through pointers",
                    "b": "It is used to define lambda expressions",
                    "c": "It is used for subtraction",
                    "d": "It is used for logical AND operation"
                }
            ],
            "answer": "It is used to define lambda expressions",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "What is the correct way to include the 'Scanner' class for user input in a Java program?",
            "options": [
                {
                    "a": "import java.util.Scanner;",
                    "b": "import Scanner;",
                    "c": "#include <Scanner>",
                    "d": "using java.util.Scanner;"
                }
            ],
            "answer": "import java.util.Scanner;",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "Which Java keyword is used to free memory occupied by objects that are no longer referenced?",
            "options": [
                {
                    "a": "free",
                    "b": "remove",
                    "c": "delete",
                    "d": "finalize"
                }
            ],
            "answer": "finalize",
            "score": 0,
            "status": ""
        }
    ]
}




var quizApp = function () {
this.score = 0;
this.qno = 1;
this.currentque = 0;
var totalque = quiz.JAVA.length;
this.displayQuiz = function (cque) {
this.currentque = cque;
if (this.currentque < totalque) {
$("#tque").html(totalque);
$("#previous").attr("disabled", false);
$("#next").attr("disabled", false);
$("#qid").html(quiz.JAVA[this.currentque].id + '.');
$("#question").html(quiz.JAVA[this.currentque].question);
$("#question-options").html("");
for (var key in quiz.JAVA[this.currentque].options[0]) {
if (quiz.JAVA[this.currentque].options[0].hasOwnProperty(key)) {
$("#question-options").append(
"<div class='form-check option-block'>" +
"<label class='form-check-label'>" +
"<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JAVA[this.currentque].options[0][key] + "'><span id='optionval'>" +
quiz.JAVA[this.currentque].options[0][key] +
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
this.score = this.score + quiz.JAVA[i].score;
}
return this.showResult(this.score);
}
}
this.showResult = function (scr) {
$("#result").addClass('result');
$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
for (var j = 0; j < totalque; j++) {
var res;
if (quiz.JAVA[j].score == 0) {
res = '<span class="wrong">' + quiz.JAVA[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
} else {
res = '<span class="correct">' + quiz.JAVA[j].score + '</span><i class="fa fa-check c-correct"></i>';
}
$("#result").append(
'<div class="result-question"><span>Q ' + quiz.JAVA[j].id + '</span> &nbsp;' + quiz.JAVA[j].question + '</div>' +
'<div><b>Correct answer:</b> &nbsp;' + quiz.JAVA[j].answer + '</div>' +
'<div class="last-row"><b>Score:</b> &nbsp;' + res +
'</div>'
);
}
}
this.checkAnswer = function (option) {
var answer = quiz.JAVA[this.currentque].answer;
option = option.replace(/</g, "&lt;") //for <
option = option.replace(/>/g, "&gt;") //for >
option = option.replace(/"/g, "&quot;")
if (option == quiz.JAVA[this.currentque].answer) {
if (quiz.JAVA[this.currentque].score == "") {
quiz.JAVA[this.currentque].score = 1;
quiz.JAVA[this.currentque].status = "correct";
}
} else {
quiz.JAVA[this.currentque].status = "wrong";
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
    for (var i = 0; i < quiz.JAVA.length; i++) {
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
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>save quiz</title>
    <style>
        body {
    background-image: url("a3.jpg"); /* Replace with the actual path to your image */
    background-size: cover; /* This ensures the image covers the entire background */
    background-repeat: no-repeat; /* Prevents the image from repeating */
}
    </style>
</head>
<body>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['quiz_name'])) {
        $quiz_name = $_POST['quiz_name'];
        $questions = $_POST["questions"];

        // Establish database connection
        $conn = new mysqli("localhost", "root", "", "quizapp_db");
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Check if the quiz name already exists
        $stmt_check = $conn->prepare("SELECT quiz_name FROM quizzes WHERE quiz_name = ?");
        $stmt_check->bind_param("s", $quiz_name);
        $stmt_check->execute();
        $stmt_check->store_result();

        if ($stmt_check->num_rows > 0) {
            // Quiz name already exists, handle accordingly
            echo "Quiz name '$quiz_name' already exists. Please choose a different name.";
        } else {
            // Quiz name is unique, proceed to save quiz data
            foreach ($questions as $question) {
                $stmt = $conn->prepare("INSERT INTO quizzes (quiz_name, question, option1, option2, option3, option4, correct_answer) VALUES (?, ?, ?, ?, ?, ?, ?)");
                $stmt->bind_param("ssssssi", $quiz_name, $question["question"], $question["options"][1], $question["options"][2], $question["options"][3], $question["options"][4], $question["correct_answer"]);
                $stmt->execute();
            }
            echo "Quiz saved successfully!";
        }

        $stmt_check->close();
        $conn->close();
    }
}


?>

<button ><a href="index.php" style="text-decoration: none;">Go Back</a></button>
<button><a href="take_quiz.php?quiz_name=<?php echo urlencode($quiz_name); ?>" style="text-decoration: none;">Attempt Quiz</a></button>

</body>
</html>
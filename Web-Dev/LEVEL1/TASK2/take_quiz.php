<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Take Quiz</title>
    <style>
        body {
    background-image: url("a3.jpg"); /* Replace with the actual path to your image */
    background-size: cover; /* This ensures the image covers the entire background */
    background-repeat: no-repeat; /* Prevents the image from repeating */
}
    </style>
</head>
<body>
    <h1>Take the Quiz</h1>
    <?php
    // Check if the quiz name is provided in the URL
    if (isset($_GET['quiz_name'])) {
        $quiz_name = $_GET['quiz_name'];
        echo "$quiz_name";
        // Fetch quiz questions from the database
        $conn = new mysqli("localhost", "root", "", "quizapp_db");
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT * FROM quizzes WHERE quiz_name = '$quiz_name'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            echo "<form method='post' action='check_quiz.php'>";
            while ($row = $result->fetch_assoc()) {
                echo "<fieldset>";
                    
                echo "<legend>Question: " . $row["question"] . "</legend>";
                for ($i = 1; $i <= 4; $i++) {
                    echo "<label>";
                    echo "<input type='radio' name='answers[" . $row["id"] . "]' value='" . $i . "'>";
                    echo $row["option" . $i];
                    echo "</label><br>";
                }
                echo "</fieldset>";
            }
            echo "<button type='submit'>Submit Quiz</button>";
            echo "</form>";
        } else {
            echo "No questions found for this quiz.";
        }

        $conn->close();
    
    } else {
        echo "Quiz name not provided.";
    }
    ?>
</body>
</html>


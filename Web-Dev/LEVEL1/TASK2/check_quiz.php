<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Result</title>
    <style>
        body {
    background-image: url("a3.jpg"); /* Replace with the actual path to your image */
    background-size: cover; /* This ensures the image covers the entire background */
    background-repeat: no-repeat; /* Prevents the image from repeating */
}
    </style>
</head>
<body>
    <h1>Quiz Result</h1>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $answers = $_POST["answers"];

        // Fetch correct answers from the database
         $conn = new mysqli("localhost", "root", "", "quizapp_db");
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT * FROM quizzes";
        $result = $conn->query($sql);

        $score = 0;

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                if (isset($answers[$row["id"]]) && $answers[$row["id"]] == $row["correct_answer"]) {
                    $score++;
                }
            }
        }

        echo "Your score: " . $score . " out of " . $result->num_rows;
        $conn->close();
    }
    ?>
    <br/>
    <br/>
    <button ><a href="index.php" style="text-decoration: none;">Go Back</a></button>
    <button ><a href="take_quiz.php" style="text-decoration: none;">Re-Attempt Quiz</a></button>
</body>
</html>

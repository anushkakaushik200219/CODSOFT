<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>List of Quizzes</title>
    <script src="https://kit.fontawesome.com/a076d05399.js"></script> <!-- Font Awesome CDN -->
    <style>
        body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    margin: 0;
    padding: 0;
}

h1 {
    text-align: center;
    padding: 20px;
    font-size: 28px;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 20px;
}

li {
    margin: 10px 0;
    font-size: 18px;
    border: 3px solid blue;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    display: inline-block;
}

a:hover {
    color: #ff6600;
}

.icon {
    color: #333;
    font-size: 24px;
}

        body {
    background-image: url("a3.jpg"); /* Replace with the actual path to your image */
    background-size: cover; /* This ensures the image covers the entire background */
    background-repeat: no-repeat; /* Prevents the image from repeating */
}

    </style>
</head>
<body>
    <h1>List of Quizzes</h1>
    <ul>
        <?php
        // Connect to the database
        $conn = new mysqli("localhost", "root", "", "quizapp_db");

        // Fetch list of unique quiz names from the database
        $sql = "SELECT DISTINCT quiz_name FROM quizzes";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // Output data of each row
            while($row = $result->fetch_assoc()) {
                echo "<li><a href='take_quiz.php?quiz_name=" . urlencode($row["quiz_name"]) . "'>" . $row["quiz_name"] . "</a></li>";
            }
        } else {
            echo "No quizzes available.";
        }

        $conn->close();

        ?>
    </ul>
</body>
</html>

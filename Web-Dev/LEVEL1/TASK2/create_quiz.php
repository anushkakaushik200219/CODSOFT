
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Quiz</title>
    <style>
        body {
    background-image: url("a3.jpg"); /* Replace with the actual path to your image */
    background-size: cover; /* This ensures the image covers the entire background */
    background-repeat: no-repeat; /* Prevents the image from repeating */
}
    </style>
</head>
<body>
    <h1>Create a Quiz</h1>
    <form method="post" action="save_quiz.php">
        <label>Quiz Name:
            <input type="text" name="quiz_name" required>
        </label><br>
        <?php for ($i = 1; $i <= 10; $i++): ?>
        <fieldset>
            <legend>Question <?php echo $i; ?></legend>
            <label>Question Text:
                <input type="text" name="questions[<?php echo $i; ?>][question]" required>
            </label><br>
            <?php for ($j = 1; $j <= 4; $j++): ?>
            <label>Option <?php echo $j; ?>:
                <input type="text" name="questions[<?php echo $i; ?>][options][<?php echo $j; ?>]" required>
            </label><br>
            <?php endfor; ?>
            <label>Correct Answer (1-4):
                <input type="number" name="questions[<?php echo $i; ?>][correct_answer]" min="1" max="4" required>
            </label><br>
        </fieldset>
        <?php endfor; ?>
        <button type="submit">Save Quiz</button>
        <button ><a href="index.php" style="text-decoration: none;">Go Back</a></button>
    </form>
</body>
</html>
        

        

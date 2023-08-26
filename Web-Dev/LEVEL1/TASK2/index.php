<!DOCTYPE html>
<html>
<head>
<title>Quiz App</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="index.css">
<style>
	

</style>
</head>
<body>

<!-- Navbar (sit on top) -->
<div class="css-top">
  <div class="css-bar css-white css-wide css-padding css-card">
    <a href="#home" class="css-bar-item css-button"><b>QUIZ APPLICATION</b> PLATFORM</a>
    <!-- Float links to the right. Hide them on small screens -->
    <div class="css-right css-hide-small">
      <a href="#quiz" class="css-bar-item css-button">Quiz</a>
      <a href="#make_quiz" class="css-bar-item css-button">Your Quiz</a>
      <a href="#about" class="css-bar-item css-button">About</a>
      <a href="#contact" class="css-bar-item css-button">Contact</a>
    </div>
  </div>
</div>

<!-- Header -->
<header class="css-display-container css-content css-wide" style="max-width:1500px;" id="home">
  <img class="css-image" src="a2.jpg" alt="Architecture" width="1500" height="800">
  <div class="css-display-middle css-margin-top css-center">
    <h1 class="css-xxlarge css-text-white"><span class="css-padding css-black css-opacity-min"><b>QUIZ APPLICATION</b></span> <span class="css-hide-small css-text-light-grey">PLATFORM</span></h1>
  </div>
</header>

<!-- Page content -->
<div class="css-content css-padding" style="max-width:1564px">

  <!-- Project Section -->
  <div class="css-container css-padding-32" id="quiz">
    <h3 class="css-border-bottom css-border-light-grey css-padding-16">Quizzes Available</h3>
  </div>

  <div class="css-row-padding">
    <div class="css-col l3 m6 css-margin-bottom">
      <div class="css-display-container">
        <div class="css-display-topleft css-black css-padding">JAVASCRIPT</div>
        <a href="quiz1.php"><img src="q1.png" alt="Javascript" style="width:350px; height:360px"></a>
      </div>
    </div>
    <div class="css-col l3 m6 css-margin-bottom">
      <div class="css-display-container">
        <div class="css-display-topleft css-black css-padding">HTML</div>
        <a href=quiz2.php><img src="q2.png" alt="Html" style="width:350px; height:360px"></a>
      </div>
    </div>
    <div class="css-col l3 m6 css-margin-bottom">
      <div class="css-display-container">
        <div class="css-display-topleft css-black css-padding">CSS</div>
        <a href="quiz3.php"><img src="q3.png" alt="House" style="width:420px; height:380px; padding-right: 0;"></a>
      </div>
    </div>
    <div class="css-col l3 m6 css-margin-bottom">
      <div class="css-display-container">
        <div class="css-display-topleft css-black css-padding">PHP</div>
        <a href="quiz4.php"><img src="q4.png" alt="House" style="width:380px; height:390px"></a>
      </div>
    </div>
  </div>

  <div class="css-row-padding">
    <div class="css-col l3 m6 css-margin-bottom">
      <div class="css-display-container">
        <div class="css-display-topleft css-black css-padding">CURRENT AFFAIRS</div>
        <a href="quiz5.php"><img src="q5.png" alt="House" style="width:350px; height:360px"></a>
      </div>
    </div>
    <div class="css-col l3 m6 css-margin-bottom">
      <div class="css-display-container">
        <div class="css-display-topleft css-black css-padding">MATHEMATICS</div>
        <a href="quiz6.php"><img src="q6.png" alt="House" style="width:350px; height:360px"></a>
      </div>
    </div>
    <div class="css-col l3 m6 css-margin-bottom">
      <div class="css-display-container">
        <div class="css-display-topleft css-black css-padding">LOGICAL REASONING</div>
        <a href="quiz7.php"><img src="q7.png" alt="House" style="width:350px; height:360px"></a>
      </div>
    </div>
    <div class="css-col l3 m6 css-margin-bottom">
      <div class="css-display-container">
        <div class="css-display-topleft css-black css-padding">C++</div>
        <a href="quiz8.php"><img src="q8.jpg" alt="House" style="width:350px; height:360px"></a>
      </div>
    </div>
</div>
<div class="css-row-padding">
    <div class="css-col l3 m6 css-margin-bottom">
      <div class="css-display-container">
        <div class="css-display-topleft css-black css-padding">JAVA</div>
        <a href="quiz9.php"><img src="q9.png" alt="House" style="width:400px; height:360px"></a>
      </div>
    </div>
    <div class="css-col l3 m6 css-margin-bottom">
      <div class="css-display-container">
        <div class="css-display-topleft css-black css-padding">PYTHON</div>
        <a href="quiz10.php"><img src="q10.jpg" alt="House" style="width:400px; height:360px"></a>
      </div>
    </div>
    <div class="css-col l3 m6 css-margin-bottom">
      <div class="css-display-container">
        <div class="css-display-topleft css-black css-padding">ENGLISH</div>
        <a href="quiz11.php"><img src="q11.jpg" alt="House" style="width:380px; height:360px"></a>
      </div>
    </div>
    <div class="css-col l3 m6 css-margin-bottom">
      <div class="css-display-container">
        <div class="css-display-topleft css-black css-padding">C</div>
        <a href="quiz12.php"><img src="q12.png" alt="House" style="width:350px; height:360px"></a>
      </div>
    </div>
  </div>



<!-- make quiz  Section -->
  <div class="css-container css-padding-32" id="make_quiz">
    <h3 class="css-border-bottom css-border-light-grey css-padding-16">MAKE YOUR OWN QUIZ</h3>
          <button style="background-color: yellow;"><a href="create_quiz.php" style="text-decoration: none;"><h2 class="css-border-bottom css-border-light-grey css-padding-16">Click here</h2></a></button>

          <button style="background-color: yellow;"><a href="list_quizzes.php" style="text-decoration: none;"><h2 class="css-border-bottom css-border-light-grey css-padding-16">Go to my Quizzes</h2></a></button>

	</div>


  <!-- About Section -->
  <div class="css-container css-padding-32" id="about">
    <h3 class="css-border-bottom css-border-light-grey css-padding-16">About</h3>
    <p>Welcome to the QUIZ APPLICATION PLATFORM, your gateway to a diverse world of quizzes. Our platform offers a rich collection of quizzes on topics ranging from JAVASCRIPT, HTML, CSS, PHP, and more. Whether you're an aspiring coder, a language enthusiast, or a logical thinker, our quizzes cater to all interests.<br/><br/>

    Explore quizzes like JAVASCRIPT and HTML to test your programming skills, or delve into subjects like MATHEMATICS and LOGICAL REASONING to challenge your analytical thinking. Our quizzes aren't just limited to academics – we have quizzes covering CURRENT AFFAIRS and ENGLISH to keep you updated and language sharp.<br/><br/>

    But that's not all – you have the power to become a quiz creator too! With our "MAKE YOUR OWN QUIZ" feature, you can design quizzes on any topic you're passionate about. Share your knowledge with the world and challenge others to take your quiz.<br/><br/>

    So, whether you're here to learn, challenge yourself, or share your expertise, the QUIZ APPLICATION PLATFORM is your go-to destination. Join us now and embark on a journey of exploration, learning, and fun.<br/><br/>
    </p>
  </div>

  <div class="css-row-padding css-grayscale">
    <div class="css-col l3 m6 css-margin-bottom">
      <img src="u1.png" alt="John" style="width:300px; height:300px">
      <h3>Riya</h3>
      <p class="css-opacity">Enthusiastic Participant:</p>
      <p>A valued member of our QUIZ APPLICATION PLATFORM, actively engaging in a multitude of quizzes spanning diverse topics. With a passion for knowledge, they not only tackle existing quizzes but also contribute by creating their own thought-provoking challenges. Their dedication to continuous learning and interactive exploration enriches our community.
</p>
      <p><button class="css-button css-light-grey css-block">Contact</button></p>
    </div>
    <div class="css-col l3 m6 css-margin-bottom">
      <img src="u2.png" alt="Jane" style="width:300px; height:300px">
      <h3>Dave</h3>
      <p class="css-opacity">Dynamic Learner:</p>
      <p>Embarking on a learning journey within our platform, this individual thrives on the opportunity to delve into an array of quizzes, each designed to expand their horizons. <br/>Their inquisitive nature extends beyond answering questions as they curate their quizzes, fostering an environment of collaborative education and intellectual growth.</p>
      <p><button class="css-button css-light-grey css-block">Contact</button></p>
    </div>
    <div class="css-col l3 m6 css-margin-bottom">
      <img src="u1.png" alt="Mike" style="width:300px; height:300px;">
      <h3>Rosie</h3>
      <p class="css-opacity">Explorative Mind:</p>
      <p>MDiscovering a world of learning through our QUIZ APPLICATION PLATFORM, this member stands out for their unwavering commitment to expanding their knowledge. By actively participating in various quizzes and contributing self-crafted ones, they demonstrate a keen interest in not only acquiring information but also sharing it with others.</p>
      <p><button class="css-button css-light-grey css-block">Contact</button></p>
    </div>
    <div class="css-col l3 m6 css-margin-bottom">
      <img src="u2.png" alt="Dan" style="width:300px; height:300px">
      <h3>Anant</h3>
      <p class="css-opacity">Knowledge Seeker:</p>
      <p>Within our interactive QUIZ APPLICATION PLATFORM, this individual shines as a dedicated learner who eagerly explores an extensive range of quizzes. <br/><br/>While tackling quizzes across subjects, they also embrace the role of a quiz creator, nurturing an atmosphere of engagement and knowledge exchange among fellow users.</p>
      <p><button class="css-button css-light-grey css-block">Contact</button></p>
    </div>
  </div>



  <!-- Contact Section -->
  <div class="css-container css-padding-32" id="contact">
    <h3 class="css-border-bottom css-border-light-grey css-padding-16">Contact</h3>
    <p>Lets get in touch and talk about your next project.</p>
    <form action="/action_page.php" target="_blank">
      <input class="css-input css-border" type="text" placeholder="Name" required name="Name">
      <input class="css-input css-section css-border" type="text" placeholder="Email" required name="Email">
      <input class="css-input css-section css-border" type="text" placeholder="Subject" required name="Subject">
      <input class="css-input css-section css-border" type="text" placeholder="Comment" required name="Comment">
      <button class="css-button css-black css-section" type="submit">
        <i class="fa fa-paper-plane"></i> SEND MESSAGE
      </button>
    </form>
  </div>
  
<!-- Image quizz -->
<div class="css-container">
  <img src="last.jpg" class="css-image" style="width:100%">
</div>

<!-- End page content -->
</div>


<!-- Footer -->
<footer class="css-center css-black css-padding-16">
  <p>Powered by <a href="https://anushkakaushik200219.github.io/anushka-kaushik-portfolio.github.io/" title="W3.CSS" target="_blank" class="css-hover-text-green">anushka kaushik</a></p>
</footer>

</body>
</html>

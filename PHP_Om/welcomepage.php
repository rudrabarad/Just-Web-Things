<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="welcomepagecss.css">
	<title></title>

	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
	
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</head>
<body>
<header class="head">
	<div class="navigation">
		<ul>
			<li><a href="">Home</a></li>
			<li><a href="">About Us</a></li>
			<li><a href="">Terms & Conditions</a></li>
			<li><a href="">Contact Us</a></li>
			<li>
				<div class="dropdown">
    				<button class="login">Login
      					<i class="fa fa-caret-down"></i>
    				</button>
    				<div class="dropdown-content">
      					<a href="studentlogin.php">Student</a>
      					<a href="teacherlogin.php">Teacher</a>
    				</div>
  				</div>
			</li>
			<li><form action="studentsignup.php">
				<input type="submit" name="" value="Sign Up">
			</form></li>
		</ul>
	</div>
</header>

	<div class="container">
	<div class="div1">
		<img src="homepage.jpg">
		<h1>HAVING PROBLEM IN<br> ASKING DOUBTS?</h1><br><br>
		<h2>But, Not Any More.<br></h2>
		<h3>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Get All Your Doubts Clear<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp From The Counsellor You Want<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp By Being An Anonymous Student.</h3>
	</div>

	<hr>
	
	<div class="div2">
		<h1><u>3 Steps For Helping You</u></h1><br>
		<div class="div2a">
			<img src="step1.png">
		<p><h2>(1) Connect With Your Counsellor</h2><br>
			<h3>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Get Connected With Your Counsellar,<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Who Is There To Help You<br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp And Not Judge You.</h3>
		</p></div><br><br><br>

		<div class="div2b">
			<img src="step2.jpg">
		<p><h2>(2) Clear Your Doubts</h2><br>
			<h3>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Chat Anonymously With Your Counsellar,<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Discuss Your Doubts<br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp And Clear Your Concepts.</h3>
		</p></div><br><br><br>

		<div class="div2c">
			<img src="step3.jpg">
		<p><h2>(3) Perceive Concepts</h2><br>
			<h3>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Clearing Your Doubts<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Will Help You Become More Confident.<br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Unleash A Better You.</h3>
		</p></div>
	</div>

	<div class="div3">
		<a href="">Home</a><br><br>
		<a href="">About Us</a><br><br>
		<a href="">Terms & Conditions</a><br><br>
		<div class="contactus"><a href="">Contact Us</a>
			<div class="contactform">
			<form>
				First Name:
				<input type="text" name="" placeholder="First Name" required=""><br>
				Last Name:
				<input type="text" name="" placeholder="Last Name" required=""><br>
				E-mail:
				<input type="email" name="" placeholder="example@gmail.com" required=""><br>
				Message:
				<textarea rows="5" cols="21" placeholder="Enter Your Message" required=""></textarea><br>
				<input type="submit" name="" value="Send">

			</form>
			</div>
		</div><br>
	</div>

	<div class="fixedbtn">
		<form action="teachersignup.php">
			<input type="submit" name="" value="Want To Serve As A Counsellor?">
		</form><br>		
	</div>

</div>
</body>
</html>

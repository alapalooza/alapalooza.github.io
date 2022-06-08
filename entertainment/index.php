<?php
$message = "";
if(strtolower($_SERVER["REQUEST_METHOD"] == "POST"))
{
	$text = trim($_POST["text"]);
	if($_POST["text"] == "AL2019") {
		setcookie("valid", "Valid", time() + 83400, "/");
		$message = "<h1>Please refresh your page.</h1>";
	}
}

if(!isset($_COOKIE['valid'])) {
?>
<html>
	<head>
		<title>Alapalooza 2019: 5th Annual Porcupine Bay BBQ</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
		<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	</head>
<body>
<h1>Entering the correct code will store a Cookie in your computer. This is done to save you from having to enter the code every time you visit.</h1>
<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" style="width: 100%;">
	<input type="text" name="text" class="w-50 h-25">
	<input type="submit" class="w-50 h-25">
</form>
<?php
echo $message;
?>
</body>
</html>
<?php
}
else{
	$message = "";
	include("../header.php");
?>
<div class="container-fluid">
				<h2>Live Entertainment</h2>
				<hr>
				<h3>Tom Barlow Band</h3>
				<p>Click the arrows on the photo to see more.</p>
				<div class="container-fluid">
					<div class="row">
						<div class="col">
							<div id="Tom-Barlow-Band" class="carousel slide" data-ride="carousel">
								<div class="carousel-inner">
									<div class="carousel-item active">
										<img class="d-block w-100" src="A-8.jpg" alt="First slide">
									</div>
									<div class="carousel-item">
										<img class="d-block w-100" src="A-8A.jpg" alt="Second slide">
									</div>
									<div class="carousel-item">
										<img class="d-block w-100" src="A-9.jpg" alt="Third slide">
									</div>
									<div class="carousel-item">
										<img class="d-block w-100" src="A-10.jpg" alt="Fourth slide">
									</div>
									<div class="carousel-item">
										<img class="d-block w-100" src="A-11.jpg" alt="Fifth slide">
									</div>
									<div class="carousel-item">
										<img class="d-block w-100" src="A-12.jpg" alt="Sixth slide">
									</div>
								</div>
								<a class="carousel-control-prev" href="#Tom-Barlow-Band" role="button" data-slide="prev">
									<span class="carousel-control-prev-icon" aria-hidden="true"></span>
									<span class="sr-only">Previous</span>
								</a>
								<a class="carousel-control-next" href="#Tom-Barlow-Band" role="button" data-slide="next">
									<span class="carousel-control-next-icon" aria-hidden="true"></span>
									<span class="sr-only">Next</span>
								</a>
							</div>
						</div>
					<?php
					if($detect->isMobile()){
					?>
					</div>
					<div class="row">
					<?php
					}
					?>
						<div class="col">
							<p>Returning for the 3rd year is the amazing Tom Barlow, his phenomenal band and incredible guest sax player Kristen Prince. Tom Barlow is a 4 time Juno nominated singer/songwriter, Canadian Rising Star Award winner with 3 Top 10 hits, playing high energy tunes from all your favorite artists - Get ready to dance, watch the amazing light show and sing along! For an incredible Monday night out, you must go see Tom and the band with numerous guest musicians as he hosts Jam Night at Shore Grill and Grotto in Mississauga. <a href="https://www.facebook.com/BarlowCommunity/" target="_blank">Follow Tom and the band on Facebook.</a></p>
						</div>
					</div>
				</div>
				<hr>
				<h3>Gap 33</h3>
				<p>Click the arrows on the photo to see more.</p>
				<div class="container-fluid">
					<div class="row">
						<div class="col">
							<div id="Gap-33" class="carousel slide" data-ride="carousel">
								<div class="carousel-inner">
									<div class="carousel-item active">
										<img class="d-block w-100" src="A-4.jpg" alt="First slide">
									</div>
									<div class="carousel-item">
										<img class="d-block w-100" src="A-5.jpg" alt="Second slide">
									</div>
									<div class="carousel-item">
										<img class="d-block w-100" src="A-6.jpg" alt="Third slide">
									</div>
								</div>
								<a class="carousel-control-prev" href="#Gap-33" role="button" data-slide="prev">
									<span class="carousel-control-prev-icon" aria-hidden="true"></span>
									<span class="sr-only">Previous</span>
								</a>
								<a class="carousel-control-next" href="#Gap-33" role="button" data-slide="next">
									<span class="carousel-control-next-icon" aria-hidden="true"></span>
									<span class="sr-only">Next</span>
								</a>
							</div>
						</div>
					<?php
					if($detect->isMobile()){
					?>
					</div>
					<div class="row">
					<?php
					}
					?>
						<div class="col">
							<p>We’re excited to have Porcupine Bay cottagers Steve and Dylan Wallace return for their 4th Civic holiday performance on the bay; and for the first time with their full 	original band! Joining Steve (keyboard and vocals) and Dylan (guitar and vocals) are Adam Cannon on drums and Pete Moss on bass. Some exciting news: in 2018, Dylan was a finalist on The Shot Season 6 and has released a catchy single “Caught Me Looking”. Hopefully they will play it for us! <br>
							<a href="https://www.facebook.com/Gap-33-1692478664306884/" target="_blank">Gap 33s' Facebook page.</a><br>
							<a href="https://www.facebook.com/DWallaceMusic/" target="_blank">Dylan Wallaces' Facebook page.</a></p>
						</div>
					</div>
				</div>
				<hr>
				<h3>Sidebar</h3>
				<p>Click the arrows on the photo to see more.</p>
				<div class="container-fluid">
					<div class="row">
						<div class="col">
							<div id="Sidebar" class="carousel slide" data-ride="carousel">
								<div class="carousel-inner">
									<div class="carousel-item active">
										<img class="d-block w-100" src="A-2.jpg" alt="First slide">
									</div>
									<div class="carousel-item">
										<img class="d-block w-100" src="A-3.jpg" alt="Second slide">
									</div>
								</div>
								<a class="carousel-control-prev" href="#Sidebar" role="button" data-slide="prev">
									<span class="carousel-control-prev-icon" aria-hidden="true"></span>
									<span class="sr-only">Previous</span>
								</a>
								<a class="carousel-control-next" href="#Sidebar" role="button" data-slide="next">
									<span class="carousel-control-next-icon" aria-hidden="true"></span>
									<span class="sr-only">Next</span>
								</a>
							</div>
						</div>
					<?php
					if($detect->isMobile()){
					?>
					</div>
					<div class="row">
					<?php
					}
					?>
						<div class="col">
							<p>Returning for their third Alapalooza performance, Kawagama Lake (Fish Pole Point) cottager Vanessa Slack (vocals) and Shawn Colbeck (guitar) are sure to entertain us. Make sure you get here early to catch their opening set – classics you will most surely know and love to sing along to. And then you will definitely want to be here for their outstanding high energy performance between Barlow's sets! And if this year’s like previous years, you may catch Vanessa up on stage with Tom Barlow!<br>
							<a href="https://www.facebook.com/profile.php?id=100009949747195" target="_blank">Sidebar's Facebook page.</a></p>
						</div>
					</div>
				</div>
				<hr>
				<h3>The Mighty Fish</h3>
				<p>Click the arrows on the photo to see more.</p>
				<div class="container-fluid">
					<div class="row">
						<div class="col">
							<div id="The-Mighty-Fish" class="carousel slide" data-ride="carousel">
								<div class="carousel-inner">
									<div class="carousel-item active">
										<img class="d-block w-100" src="20190621_225130.jpg" alt="First slide">
									</div>
									<div class="carousel-item">
										<img class="d-block w-100" src="20181027_222716.jpg" alt="Second slide">
									</div>
								</div>
								<a class="carousel-control-prev" href="#The-Mighty-Fish" role="button" data-slide="prev">
									<span class="carousel-control-prev-icon" aria-hidden="true"></span>
									<span class="sr-only">Previous</span>
								</a>
								<a class="carousel-control-next" href="#The-Mighty-Fish" role="button" data-slide="next">
									<span class="carousel-control-next-icon" aria-hidden="true"></span>
									<span class="sr-only">Next</span>
								</a>
							</div>
						</div>
					<?php
					if($detect->isMobile()){
					?>
					</div>
					<div class="row">
					<?php
					}
					?>
						<div class="col">
							<p>The morning after Alapalooza 2018, I received a message (from someone I hadn’t met) thanking us for such a great night. It turns out their family has a cottage in Marina Bay and a number of family members (Kit Allen, Michelle & Craig Hedley) play in a Burlington based band called The Mighty Fish. Their tag line is “Acoustic music for the masses” blending the classics and the modern to let you get your party on! Besides the guitars, percussion and incredible vocals, they also have a violin… amplified of course (or is it a fiddle?). It really adds to the band’s sound and is a first for Alapalooza! I’m sure you will be as impressed as I was when I first saw them!<br>
							<a href="http://www.themightyfish.ca/" target="_blank">The Mighty Fish's Website.</a><br>
							<a href="https://www.facebook.com/groups/Themightyfish/" target="_blank">The Mighty Fish's Facebook page.</a></p>
						</div>
					</div>
				</div>
				<hr>
				<h3>Bottoms Up</h3>
				<p>Click the arrows on the photo to see more.</p>
				<div class="container-fluid">
					<div class="row">
						<div class="col">
							<div id="Bottoms-Up" class="carousel slide" data-ride="carousel">
								<div class="carousel-inner">
									<div class="carousel-item active">
										<img class="d-block w-100" src="Bottoms Up.jpg" alt="First slide">
									</div>
									<div class="carousel-item">
										<img class="d-block w-100" src="20190531_194327.jpg" alt="Second slide">
									</div>
								</div>
								<a class="carousel-control-prev" href="#Bottoms-Up" role="button" data-slide="prev">
									<span class="carousel-control-prev-icon" aria-hidden="true"></span>
									<span class="sr-only">Previous</span>
								</a>
								<a class="carousel-control-next" href="#Bottoms-Up" role="button" data-slide="next">
									<span class="carousel-control-next-icon" aria-hidden="true"></span>
									<span class="sr-only">Next</span>
								</a>
							</div>
						</div>
					<?php
					if($detect->isMobile()){
					?>
					</div>
					<div class="row">
					<?php
					}
					?>
						<div class="col">
							<p>We’re pleased to have Bear Lake represented this year at Alapalooza, thanks to cottager Steve Koslowski and his Barrie based band Bottoms Up. Playing some of the greatest classic rock tunes are Raul Garcia on lead vocals, Dave Martel on the skins, Roger Moore on the low end, and Steve Koslowski and Dean Woods on guitars. They play as a duo and with the full band at various locations including Barrie, Orangeville, Cambridge and Horseshoe Valley. They are sure to rock the bay! Bottom's Up - ON THE ROCKS!<br>
							<a href="https://www.facebook.com/BottomsUpBarrie/" target="_blank">Bottoms Up's Facebook page.</a></p>
						</div>
					</div>
				</div>
			</div>
<?php
include ("../footer.php");
}
?>
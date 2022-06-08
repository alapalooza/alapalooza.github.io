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
				<h2>Civic Weekend Sunday (August 4<sup>th</sup>), RAIN OR SHINE</h2>
				<ul>
					<li>All ages and cottage guests welcome</li>
					<li>BBQ &amp; Pot Luck Dinner</li>
					<li>Phenomenal Live Entertainment – 5 Bands</li>
					<li>Spectacular Sound & Light Show by John Bain & Les Weller</li>
					<li><a href="https://orders.tntworld.com/tntworld?fbclid=IwAR1zraaFSgrVrK2SPqLGpUZcx8cMr-7XBNsbmnjkK_HJ9vKvz6iZiXMWK0M" target="_blank">Alapalooza 2019 event T-shirts, Hats & Koozies available</a></li>
					<ul>
						<li>Orders must be placed by Tuesday July 16th.</li>
						<li>No payment is required online.</li>
						<li>Please pay in Cash when you pick up or send Al an e-transfer at sledhead99@sympatico.ca.</li>
						<li>Check out the Alapalooza Combo for the best deal!</li>
					</ul>
				</ul>
				<hr>
				<h2>BBQ &amp; POT LUCK</h2>
				<ul>
					<li>New for 2019 is Andrew’s signature Roast Beef – hot smoked and finished sous vide. And on the menu for the 5th year is Andrew’s famous smoked BBQ pulled pork</li>
					<li>Bring your favorite salad, side, appetizer, dessert, or munchies</li>
					<li>Bring Refreshments (Cans Please), Lawn chairs & your appetite</li>
					<li>Please COME EARLY – we need your sides and appetizers in order to start serving – we can’t just eat meat!</li>
				</ul>
			</div>
<?php
include ("../footer.php");
}
?>
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
				<h2>Last year!</h2>
					<p>Click the arrows on the photo to see more.</p>
				<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img src="38666448_10155706992854849_6156819718847070208_o.jpg" class="d-block w-100" alt="...">
						</div>
						<div class="carousel-item">
							<img src="38689504_10155707000719849_7225148204721897472_o.jpg" class="d-block w-100" alt="...">
						</div>
						<div class="carousel-item">
							<img src="38696030_10155706992269849_6364709935703392256_o.jpg" class="d-block w-100" alt="...">
						</div>
						<div class="carousel-item">
							<img src="38697910_10155706992734849_6453822239283347456_o.jpg" class="d-block w-100" alt="...">
						</div>
						<div class="carousel-item">
							<img src="38697952_10155706992099849_1102079309549404160_o.jpg" class="d-block w-100" alt="...">
						</div>
						<div class="carousel-item">
							<img src="38712063_10155706992204849_8804379229597728768_o.jpg" class="d-block w-100" alt="...">
						</div>
						<div class="carousel-item">
							<img src="38717375_10155706998374849_1643241228885557248_o.jpg" class="d-block w-100" alt="...">
						</div>
						<div class="carousel-item">
							<img src="38757424_10155706993209849_1477550178108964864_o.jpg" class="d-block w-100" alt="...">
						</div>
						<div class="carousel-item">
							<img src="38773920_10155707000174849_182769932394561536_o.jpg" class="d-block w-100" alt="...">
						</div>
						<div class="carousel-item">
							<img src="38797011_10155707001614849_4019566476787712000_o.jpg" class="d-block w-100" alt="...">
						</div>
						<div class="carousel-item">
							<img src="38806613_10155706994539849_9025281303280353280_o.jpg" class="d-block w-100" alt="...">
						</div>
						<div class="carousel-item">
							<img src="38821412_10155706993619849_7415379311353397248_o.jpg" class="d-block w-100" alt="...">
						</div>
					</div>
					<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
			</div>
		
<?php
include ("../footer.php");
}
?>
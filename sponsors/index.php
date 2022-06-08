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
			<h5>SUPPORTERS</h5>
			<p>Thanks to our sponsors / supporters for helping to make the event possible.</p>
			<?php
			if($detect->isMobile()){
			?>
			<a href="https://www.johnbacherconstruction.com/" target="_blank"><img src="https://www.johnbacherconstruction.com/uploads/t6qq1Cy8/691x0_530x0/logo_alt.png" alt="Bacher Construction" height="90" width="330"></a>
			<a href="http://ravecontracting.ca/" target="_blank"><img src="http://ravecontracting.ca/img/newravelogolargeweb.jpg" alt="Rave Contracting" height="90" width="330"></a>
			<a href="https://www.tntworld.com/" target="_blank"><img src="56582269_2176683719086061_1214225428248526848_n.png" alt="The Next Trend Design" height="90" width="330"></a>
			<a href="http://mccombeconsulting.com" target="_blank"><img src="McComb Consulting Logo.png" alt="McComb Consulting" height="111" width="330"></a>
			<a href="http://www.highlandpackers.com/" target="_blank"><img src="http://www.highlandpackers.com/images/hpllogo.gif" alt="Highland Packers" height="90" width="330"></a>
			<a href="http://www.wellerpublishing.com/" target="_blank"><img src="Weller.jpg" height="90" width="330" alt="Weller Publishing"></a>
			<a href="http://www.cleaningcentral.ca/" target="_blank"><img src="Untitled.png" height="90" width="330" alt="Cleaning Central"></a>
			<?php
			}
			else{
			?>
			<a href="https://www.johnbacherconstruction.com/" target="_blank"><img src="https://www.johnbacherconstruction.com/uploads/t6qq1Cy8/691x0_530x0/logo_alt.png" alt="Bacher Construction"></a>
			<a href="http://ravecontracting.ca/" target="_blank"><img src="http://ravecontracting.ca/img/newravelogolargeweb.jpg" alt="Rave Contracting" height="111" width="439"></a>
			<a href="https://www.tntworld.com/" target="_blank"><img src="56582269_2176683719086061_1214225428248526848_n.png" alt="The Next Trend Design" height="111" width="439"></a>
			<a href="http://mccombeconsulting.com" target="_blank"><img src="McComb Consulting Logo.png" alt="McComb Consulting" height="111" width="439"></a>
			<a href="http://www.highlandpackers.com/" target="_blank"><img src="http://www.highlandpackers.com/images/hpllogo.gif" alt="Highland Packers" height="111" width="439"></a>
			<a href="http://www.wellerpublishing.com/" target="_blank"><img src="Weller.jpg" height="111" width="439" alt="Weller Publishing"></a>
			<a href="http://www.cleaningcentral.ca/" target="_blank"><img src="Untitled.png" height="111" width="439" alt="Cleaning Central"></a>
			</div>
			<?php
			}
			?>
<?php
include ("../footer.php");
}
?>
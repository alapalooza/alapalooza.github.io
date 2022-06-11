const WEBSITE_NAME = "Alapalooza 2019";

const INDEX_HTML_PATH = "file:///D:/Dev/alapalooza/index.html"

function hideAllPages() {	
	var page_index = document.getElementById("page-index");
	page_index.setAttribute("hidden", "hidden");
	
	var page_event_details = document.getElementById("page-event-details");
	page_event_details.setAttribute("hidden", "hidden"); 
	
	var page_vip = document.getElementById("page-vip");
	page_vip.setAttribute("hidden", "hidden"); 
	
	var page_entertainment = document.getElementById("page-entertainment");
	page_entertainment.setAttribute("hidden", "hidden"); 
	
	var page_merchandise = document.getElementById("page-merchandise");
	page_merchandise.setAttribute("hidden", "hidden"); 
	
	var page_sponsors = document.getElementById("page-sponsors");
	page_sponsors.setAttribute("hidden", "hidden"); 
	
	var page_gallery2018 = document.getElementById("page-gallery-2018");
	page_gallery2018.setAttribute("hidden", "hidden"); 
	
	var page_gallery2019 = document.getElementById("page-gallery-2019");
	page_gallery2019.setAttribute("hidden", "hidden"); 
	
	var page_gallery2021 = document.getElementById("page-gallery-2021");
	page_gallery2021.setAttribute("hidden", "hidden"); 

}

function displayIndex() {
	hideAllPages();
	document.title = WEBSITE_NAME;
	var current_page = document.getElementById("page-index");
	current_page.removeAttribute("hidden"); 
}

function displayHome() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Home";
	var current_page = document.getElementById("page-home");
	current_page.removeAttribute("hidden"); 
}

function displayEventDetails() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Event Details";
	var current_page = document.getElementById("page-event-details");
	current_page.removeAttribute("hidden"); 
}

function displayVip() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - VIP On-shore Experience";
	var current_page = document.getElementById("page-vip");
	current_page.removeAttribute("hidden"); 
}

function displayEntertainment() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Live Entertainment";
	var current_page = document.getElementById("page-entertainment");
	current_page.removeAttribute("hidden"); 
}

function displayMerchandise() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Tickets and Merchandise";	
	var current_page = document.getElementById("page-merchandise");
	current_page.removeAttribute("hidden"); 

}

function displaySponsors() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Sponsors";	
	var current_page = document.getElementById("page-sponsors");
	current_page.removeAttribute("hidden"); 
}

function displayGallery() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Galleries";
	var current_page = document.getElementById("page-gallery");
	current_page.removeAttribute("hidden"); 
}

function displayGallery2018() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Alapalooza 2018";
	var current_page = document.getElementById("page-gallery-2018");
	current_page.removeAttribute("hidden"); 
}

function displayGallery2019() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Alapalooza 2019";
	var current_page = document.getElementById("page-gallery-2019");
	current_page.removeAttribute("hidden"); 
}

function displayGallery2021() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Alapalooza 2021";
	var current_page = document.getElementById("page-gallery-2021");
	current_page.removeAttribute("hidden"); 
}

function displayContact() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Contact";
	var current_page = document.getElementById("page-contact");
	current_page.removeAttribute("hidden"); 
}

function displayError() {
	var pageTitle = "Error";
	document.title = WEBSITE_NAME + " - " + pageTitle;
	var title = document.getElementById("header");
	var paragraph = document.getElementById("main-body-paragraph");
	
	title.innerHTML = WEBSITE_NAME + " - " + pageTitle;
	paragraph.innerHTML = "Error! Something went wrong!";
}

function checkUrlAndLoadCorrespondingDisplay() {
	if(window.location.href == INDEX_HTML_PATH + "#home" || window.location.href == "https://alapalooza.github.io/#home" || window.location.href == "domain.com#home") {
		displayHome();
	}
	else if(window.location.href == INDEX_HTML_PATH || window.location.href == "https://alapalooza.github.io/" || window.location.href == "domain.com") {
		displayIndex();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#event-details" || window.location.href == "https://alapalooza.github.io/#event-details" || window.location.href == "domain.com#event-details") {
		displayEventDetails();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#vip" || window.location.href == "https://alapalooza.github.io/#vip" || window.location.href == "domain.com#vip") {
		displayVip();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#entertainment" || window.location.href == "https://alapalooza.github.io/#entertainment" || window.location.href == "domain.com#entertainment") {
		displayEntertainment();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#merchandise" || window.location.href == "https://alapalooza.github.io/#merchandise" || window.location.href == "domain.com#merchandise") {
		displayMerchandise();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#sponsors" || window.location.href == "https://alapalooza.github.io/#sponsors" || window.location.href == "domain.com#sponsors") {
		displaySponsors();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#gallery-2018" || window.location.href == "https://alapalooza.github.io/#gallery-2018" || window.location.href == "domain.com#gallery-2018"){
		displayGallery2018();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#gallery-2019" || window.location.href == "https://alapalooza.github.io/#gallery-2019" || window.location.href == "domain.com#gallery-2019"){
		displayGallery2019();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#gallery-2021" || window.location.href == "https://alapalooza.github.io/#gallery-2021" || window.location.href == "domain.com#gallery-2021"){
		displayGallery2021();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#contact" || window.location.href == "https://alapalooza.github.io/#contact" || window.location.href == "domain.com#contact") {
		displayContact();
	}
	else {
		displayError();
	}
}
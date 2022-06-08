const WEBSITE_NAME = "Alapalooza 2019";

const INDEX_HTML_PATH = "file:///D:/Dev/alapalooza/index.html"

function hideAllPages() {	
	var page_index = document.getElementById("page-index");
	page_index.setAttribute("hidden", "hidden");
	var page_info = document.getElementById("page-info");
	page_info.setAttribute("hidden", "hidden"); 
	var page_entertainment = document.getElementById("page-entertainment");
	page_entertainment.setAttribute("hidden", "hidden"); 
	var page_merchandise = document.getElementById("page-merchandise");
	page_merchandise.setAttribute("hidden", "hidden"); 
	var page_sponsors = document.getElementById("page-sponsors");
	page_sponsors.setAttribute("hidden", "hidden"); 
	var page_2018 = document.getElementById("page-2018");
	page_2018.setAttribute("hidden", "hidden"); 
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

function displayInfo() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Info";
	var current_page = document.getElementById("page-info");
	current_page.removeAttribute("hidden"); 
}

function displayEntertainment() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - entertainment";
	var current_page = document.getElementById("page-entertainment");
	current_page.removeAttribute("hidden"); 
}

function displayMerchandise() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Merchandise";	
	var current_page = document.getElementById("page-merchandise");
	current_page.removeAttribute("hidden"); 

}

function displaySponsors() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Sponsors";	
	var current_page = document.getElementById("page-sponsors");
	current_page.removeAttribute("hidden"); 
}

function display2018() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - 2018";
	var current_page = document.getElementById("page-2018");
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
	if(window.location.href == INDEX_HTML_PATH + "#home" || window.location.href == "https://barrieradiator.github.io/#home" || window.location.href == "domain.com#home") {
		displayHome();
	}
	else if(window.location.href == INDEX_HTML_PATH || window.location.href == "https://barrieradiator.github.io/" || window.location.href == "domain.com") {
		displayIndex();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#info" || window.location.href == "https://barrieradiator.github.io/#info" || window.location.href == "domain.com#info") {
		displayInfo();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#entertainment" || window.location.href == "https://barrieradiator.github.io/#entertainment" || window.location.href == "domain.com#entertainment") {
		displayEntertainment();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#merchandise" || window.location.href == "https://barrieradiator.github.io/#merchandise" || window.location.href == "domain.com#merchandise") {
		displayMerchandise();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#sponsors" || window.location.href == "https://barrieradiator.github.io/#sponsors" || window.location.href == "domain.com#sponsors") {
		displaySponsors();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#2018" || window.location.href == "https://barrieradiator.github.io/#2018" || window.location.href == "domain.com#2018") {
		display2018();
	}
	else {
		displayError();
	}
}
const WEBSITE_NAME = "Alapalooza 2023";

const INDEX_HTML_PATH = "file:///D:/Dev/alapalooza/index.html"

var is_dw_text_hidden = false;
var is_fs_text_hidden = false;
var is_tmf_text_hidden = false;
var is_td_text_hidden = false;
var is_kp_text_hidden = false;

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
	
	var page_gallery2015 = document.getElementById("page-gallery-2015");
	page_gallery2015.setAttribute("hidden", "hidden"); 
	
	var page_gallery2016 = document.getElementById("page-gallery-2016");
	page_gallery2016.setAttribute("hidden", "hidden"); 
	
	var page_gallery2017 = document.getElementById("page-gallery-2017");
	page_gallery2017.setAttribute("hidden", "hidden"); 
	
	var page_gallery2018 = document.getElementById("page-gallery-2018");
	page_gallery2018.setAttribute("hidden", "hidden"); 
	
	var page_gallery2019 = document.getElementById("page-gallery-2019");
	page_gallery2019.setAttribute("hidden", "hidden"); 
	
	var page_gallery2020 = document.getElementById("page-gallery-2020");
	page_gallery2020.setAttribute("hidden", "hidden"); 	
	
	var page_gallery2021 = document.getElementById("page-gallery-2021");
	page_gallery2021.setAttribute("hidden", "hidden"); 	
	
	var page_gallery2022 = document.getElementById("page-gallery-2022");
	page_gallery2022.setAttribute("hidden", "hidden"); 
		
	var page_gallery2023 = document.getElementById("page-gallery-2023");
	page_gallery2023.setAttribute("hidden", "hidden"); 
	
	var page_contact = document.getElementById("page-contact");
	page_contact.setAttribute("hidden", "hidden");
	
	var nav_menu = document.getElementById("navbar-button");
	nav_menu.setAttribute("class", "collapsed");
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
	
	var image1 = document.getElementById('image-event-details1');
	var image2 = document.getElementById('image-event-details2');
	var image3 = document.getElementById('image-event-details3');
	var image4 = document.getElementById('image-event-details4');
	var image5 = document.getElementById('image-event-details5');
	var image6 = document.getElementById('image-event-details6');
	var image7 = document.getElementById('image-event-details7');
	var image8 = document.getElementById('image-event-details8');
	var image9 = document.getElementById('image-event-details9');
	var image10 = document.getElementById('image-event-details10');
	var image11 = document.getElementById('image-event-details11');
	var image12 = document.getElementById('image-event-details12');
	var image13 = document.getElementById('image-event-details13');
	var image14 = document.getElementById('image-event-details14');
	var image15 = document.getElementById('image-event-details15');
	var image16 = document.getElementById('image-event-details16');
	//var image17 = document.getElementById('image-event-details17');
	var image18 = document.getElementById('image-event-details18');
	
	image1.setAttribute("src", "images/event-details/Lake1.jpg");
	image2.setAttribute("src", "images/event-details/Lake2.jpg");
	image3.setAttribute("src", "images/event-details/Lake3.jpg");
	image4.setAttribute("src", "images/event-details/Lake4.jpg");
	image5.setAttribute("src", "images/event-details/Lake5.jpg");
	image6.setAttribute("src", "images/event-details/Lake6.jpg");
	image7.setAttribute("src", "images/event-details/Lake7.jpg");
	image8.setAttribute("src", "images/event-details/Lake8.jpg");
	image9.setAttribute("src", "images/event-details/Lake9.jpg");
	image10.setAttribute("src", "images/event-details/Lake10.jpg");
	image11.setAttribute("src", "images/event-details/Lake11.jpg");
	image12.setAttribute("src", "images/event-details/Lake12.jpg");
	image13.setAttribute("src", "images/event-details/Lake13.jpg");
	image14.setAttribute("src", "images/event-details/Lake14.jpg");
	image15.setAttribute("src", "images/event-details/Lake15.jpg");
	image16.setAttribute("src", "images/event-details/Lake16.jpg");
	//image17.setAttribute("src", "images/event-details/Lake17.jpg");
	image18.setAttribute("src", "images/event-details/Lake18.jpg");

}

function displayVip() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - VIP On-shore Experience";
	var current_page = document.getElementById("page-vip");
	current_page.removeAttribute("hidden"); 
		
	var image1 = document.getElementById('image-vip1');
	var image2 = document.getElementById('image-vip2');
	var image3 = document.getElementById('image-vip3');
	var image4 = document.getElementById('image-vip4');
	var image5 = document.getElementById('image-vip5');
	var image6 = document.getElementById('image-vip6');
	var image7 = document.getElementById('image-vip7');
	var image8 = document.getElementById('image-vip8');
	var image9 = document.getElementById('image-vip9');
	var image10 = document.getElementById('image-vip10');
	var image11 = document.getElementById('image-vip11');
	var image12 = document.getElementById('image-vip12');
	var image13 = document.getElementById('image-vip13');
	
	image1.setAttribute("src", "images/vip/VIP1.jpg");
	image2.setAttribute("src", "images/vip/VIP2.jpg");
	image3.setAttribute("src", "images/vip/VIP3.jpg");
	image4.setAttribute("src", "images/vip/VIP4.jpg");
	image5.setAttribute("src", "images/vip/VIP5.jpg");
	image6.setAttribute("src", "images/vip/VIP6.jpg");
	image7.setAttribute("src", "images/vip/VIP7.jpg");
	image8.setAttribute("src", "images/vip/VIP8.jpg");
	image9.setAttribute("src", "images/vip/VIP9.jpg");
	image10.setAttribute("src", "images/vip/Food1.jpg");
	image11.setAttribute("src", "images/vip/Food2.jpg");
	image12.setAttribute("src", "images/vip/Food3.jpg");
	image13.setAttribute("src", "images/vip/Food4.jpg");
}

function displayEntertainment() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Live Entertainment";
	var current_page = document.getElementById("page-entertainment");
	current_page.removeAttribute("hidden"); 
	
	var image1 = document.getElementById('image-ent-sw1');
	var image2 = document.getElementById('image-ent-sw2');
	var image3 = document.getElementById('image-ent-sw3');
	var image4 = document.getElementById('image-ent-sw4');
	var image5 = document.getElementById('image-ent-sw5');
	
	image1.setAttribute("src", "images/entertainment/steve-wallace/1.jpg");
	image2.setAttribute("src", "images/entertainment/steve-wallace/2.jpg");
	image3.setAttribute("src", "images/entertainment/steve-wallace/3.jpg");
	image4.setAttribute("src", "images/entertainment/steve-wallace/4.jpg");
	image5.setAttribute("src", "images/entertainment/steve-wallace/5.jpg");
	
	
	var image1 = document.getElementById('image-ent-fs1');
	var image2 = document.getElementById('image-ent-fs2');
	var image3 = document.getElementById('image-ent-fs3');
	var image4 = document.getElementById('image-ent-fs4');
	var image5 = document.getElementById('image-ent-fs5');
	var image6 = document.getElementById('image-ent-fs6');
	var image7 = document.getElementById('image-ent-fs7');
	var image8 = document.getElementById('image-ent-fs8');
	var image9 = document.getElementById('image-ent-fs9');
	var image10 = document.getElementById('image-ent-fs10');
	var image11 = document.getElementById('image-ent-fs11');
	var image12 = document.getElementById('image-ent-fs12');
	var image13 = document.getElementById('image-ent-fs13');
	
	image1.setAttribute("src", "images/entertainment/fiddlestix/1.jpg");
	image2.setAttribute("src", "images/entertainment/fiddlestix/2.jpg");
	image3.setAttribute("src", "images/entertainment/fiddlestix/3.jpg");
	image4.setAttribute("src", "images/entertainment/fiddlestix/4.jpg");
	image5.setAttribute("src", "images/entertainment/fiddlestix/5.jpg");
	image6.setAttribute("src", "images/entertainment/fiddlestix/6.jpg");
	image7.setAttribute("src", "images/entertainment/fiddlestix/7.jpg");
	image8.setAttribute("src", "images/entertainment/fiddlestix/8.jpg");
	image9.setAttribute("src", "images/entertainment/fiddlestix/9.jpg");
	image10.setAttribute("src", "images/entertainment/fiddlestix/10.jpg");
	image11.setAttribute("src", "images/entertainment/fiddlestix/11.jpg");
	image12.setAttribute("src", "images/entertainment/fiddlestix/12.jpg");
	image13.setAttribute("src", "images/entertainment/fiddlestix/13.jpg");
	
	var image1 = document.getElementById('image-ent-mh1');
	var image2 = document.getElementById('image-ent-mh2');
	var image3 = document.getElementById('image-ent-mh3');
	var image4 = document.getElementById('image-ent-mh4');
	var image5 = document.getElementById('image-ent-mh5');
	
	image1.setAttribute("src", "images/entertainment/michelle-hedley/1.jpg");
	image2.setAttribute("src", "images/entertainment/michelle-hedley/2.jpg");
	image3.setAttribute("src", "images/entertainment/michelle-hedley/3.jpg");
	image4.setAttribute("src", "images/entertainment/michelle-hedley/4.jpg");
	image5.setAttribute("src", "images/entertainment/michelle-hedley/5.jpg");
	
	var image1 = document.getElementById('image-ent-td1');
	var image2 = document.getElementById('image-ent-td2');
	var image3 = document.getElementById('image-ent-td3');
	var image4 = document.getElementById('image-ent-td4');
	
	image1.setAttribute("src", "images/entertainment/tone-deaf/1.jpg");
	image2.setAttribute("src", "images/entertainment/tone-deaf/2.jpg");
	image3.setAttribute("src", "images/entertainment/tone-deaf/3.jpg");
	image4.setAttribute("src", "images/entertainment/tone-deaf/4.jpg");
	
	var image1 = document.getElementById('image-ent-tduo1');
	var image2 = document.getElementById('image-ent-tduo2');
	var image3 = document.getElementById('image-ent-tduo3');
	var image4 = document.getElementById('image-ent-tduo4');
	var image5 = document.getElementById('image-ent-tduo5');
	var image6 = document.getElementById('image-ent-tduo6');
	var image7 = document.getElementById('image-ent-tduo7');
	
	image1.setAttribute("src", "images/entertainment/the-duomatics/1.jpg");
	image2.setAttribute("src", "images/entertainment/the-duomatics/2.jpg");
	image3.setAttribute("src", "images/entertainment/the-duomatics/3.jpg");
	image4.setAttribute("src", "images/entertainment/the-duomatics/4.jpg");
	image5.setAttribute("src", "images/entertainment/the-duomatics/5.jpg");
	image6.setAttribute("src", "images/entertainment/the-duomatics/6.jpg");
	image7.setAttribute("src", "images/entertainment/the-duomatics/7.jpg");

}

function displayMerchandise() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Tickets and Merchandise";	
	var current_page = document.getElementById("page-merchandise");
	current_page.removeAttribute("hidden"); 
	
	
	var image1 = document.getElementById('image-merch1');
	var image2 = document.getElementById('image-merch2');
	
	
	image1.setAttribute("src", "images/logo.png");
	image2.setAttribute("src", "images/merchandise/tshirt.jpg");

}

function displaySponsors() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Sponsors";	
	var current_page = document.getElementById("page-sponsors");
	current_page.removeAttribute("hidden"); 
	
	var image1 = document.getElementById('image-sponsor1');
	var image2 = document.getElementById('image-sponsor2');
	var image3 = document.getElementById('image-sponsor3');
	var image4 = document.getElementById('image-sponsor4');
	var image5 = document.getElementById('image-sponsor5');
	var image6 = document.getElementById('image-sponsor6');
	var image7 = document.getElementById('image-sponsor7');
	var image8 = document.getElementById('image-sponsor8');
	var image9 = document.getElementById('image-sponsor9');
	var image10 = document.getElementById('image-sponsor10');
	
	image1.setAttribute("src", "images/sponsors/logo_alt.png");
	image2.setAttribute("src", "images/sponsors/Rave.jpg");
	image3.setAttribute("src", "images/sponsors/TNT.png");
	image4.setAttribute("src", "images/sponsors/hpllogo.gif");
	image5.setAttribute("src", "images/sponsors/Axiom-Audio.jpg");
	image6.setAttribute("src", "images/sponsors/Echelon-Environmental.jpg");
	image7.setAttribute("src", "images/sponsors/Lake-Life-Leisure.jpg");
	image8.setAttribute("src", "images/sponsors/Cleaning-Central.jpg");
	image9.setAttribute("src", "images/sponsors/Fling.jpg");
	image10.setAttribute("src", "images/sponsors/mccomb.png");
}

function displayGallery() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Galleries";
	var current_page = document.getElementById("page-gallery");
	current_page.removeAttribute("hidden"); 
}

function displayGallery2015() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - 2015 Gallery";
	var current_page = document.getElementById("page-gallery-2015");
	current_page.removeAttribute("hidden"); 
	
	var image1 = document.getElementById('image-2015-gallery1');
	var image2 = document.getElementById('image-2015-gallery2');
	var image3 = document.getElementById('image-2015-gallery3');
	var image4 = document.getElementById('image-2015-gallery4');
	var image5 = document.getElementById('image-2015-gallery5');
	var image6 = document.getElementById('image-2015-gallery6');
	var image7 = document.getElementById('image-2015-gallery7');
	var image8 = document.getElementById('image-2015-gallery8');
	//var image9 = document.getElementById('image-2015-gallery9');
	var image10 = document.getElementById('image-2015-gallery10');
	var image11 = document.getElementById('image-2015-gallery11');
	var image12 = document.getElementById('image-2015-gallery12');
	var image13 = document.getElementById('image-2015-gallery13');
	//var image14 = document.getElementById('image-2015-gallery14');
	var image15 = document.getElementById('image-2015-gallery15');
	var image16 = document.getElementById('image-2015-gallery16');
	var image17 = document.getElementById('image-2015-gallery17');
	var image18 = document.getElementById('image-2015-gallery18');
	var image19 = document.getElementById('image-2015-gallery19');
	var image20 = document.getElementById('image-2015-gallery20');
	var image21 = document.getElementById('image-2015-gallery21');
	var image22 = document.getElementById('image-2015-gallery22');
	var image23 = document.getElementById('image-2015-gallery23');
	var image24 = document.getElementById('image-2015-gallery24');
	var image25 = document.getElementById('image-2015-gallery25');
	var image26 = document.getElementById('image-2015-gallery26');
	//var image27 = document.getElementById('image-2015-gallery27');
	var image28 = document.getElementById('image-2015-gallery28');
	var image29 = document.getElementById('image-2015-gallery29');
	var image30 = document.getElementById('image-2015-gallery30');
	var image31 = document.getElementById('image-2015-gallery31');
	var image32 = document.getElementById('image-2015-gallery32');
	var image33 = document.getElementById('image-2015-gallery33');
	var image34 = document.getElementById('image-2015-gallery34');
	var image35 = document.getElementById('image-2015-gallery35');
	var image36 = document.getElementById('image-2015-gallery36');
	
	image1.setAttribute("src", "images/gallery-2015/2015-1.jpg");
	image2.setAttribute("src", "images/gallery-2015/2015-2.jpg");
	image3.setAttribute("src", "images/gallery-2015/2015-3.jpg");
	image4.setAttribute("src", "images/gallery-2015/2015-4.jpg");
	image5.setAttribute("src", "images/gallery-2015/2015-5.jpg");
	image6.setAttribute("src", "images/gallery-2015/2015-6.jpg");
	image7.setAttribute("src", "images/gallery-2015/2015-7.jpg");
	image8.setAttribute("src", "images/gallery-2015/2015-8.jpg");
	//image9.setAttribute("src", "images/gallery-2015/2015-9.jpg");
	image10.setAttribute("src", "images/gallery-2015/2015-10.jpg");
	image11.setAttribute("src", "images/gallery-2015/2015-11.jpg");
	image12.setAttribute("src", "images/gallery-2015/2015-12.jpg");
	image13.setAttribute("src", "images/gallery-2015/2015-13.jpg");
	//image14.setAttribute("src", "images/gallery-2015/2015-14.jpg");
	image15.setAttribute("src", "images/gallery-2015/2015-15.jpg");
	image16.setAttribute("src", "images/gallery-2015/2015-16.jpg");
	image17.setAttribute("src", "images/gallery-2015/2015-17.jpg");
	image18.setAttribute("src", "images/gallery-2015/2015-18.jpg");
	image19.setAttribute("src", "images/gallery-2015/2015-19.jpg");
	image20.setAttribute("src", "images/gallery-2015/2015-20.jpg");
	image21.setAttribute("src", "images/gallery-2015/2015-21.jpg");
	image22.setAttribute("src", "images/gallery-2015/2015-22.jpg");
	image23.setAttribute("src", "images/gallery-2015/2015-23.jpg");
	image24.setAttribute("src", "images/gallery-2015/2015-24.jpg");
	image25.setAttribute("src", "images/gallery-2015/2015-25.jpg");
	image26.setAttribute("src", "images/gallery-2015/2015-26.jpg");
	//image27.setAttribute("src", "images/gallery-2015/2015-27.jpg");
	image28.setAttribute("src", "images/gallery-2015/2015-28.jpg");
	image29.setAttribute("src", "images/gallery-2015/2015-29.jpg");
	image30.setAttribute("src", "images/gallery-2015/2015-30.jpg");
	image31.setAttribute("src", "images/gallery-2015/2015-31.jpg");
	image32.setAttribute("src", "images/gallery-2015/2015-32.jpg");
	image33.setAttribute("src", "images/gallery-2015/2015-33.jpg");
	image34.setAttribute("src", "images/gallery-2015/2015-34.jpg");
	image35.setAttribute("src", "images/gallery-2015/2015-35.jpg");
	image36.setAttribute("src", "images/gallery-2015/2015-36.jpg");
}

function displayGallery2016() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - 2016 Gallery";
	var current_page = document.getElementById("page-gallery-2016");
	current_page.removeAttribute("hidden"); 
	
	var image1 = document.getElementById('image-2016-gallery1');
	var image2 = document.getElementById('image-2016-gallery2');
	var image3 = document.getElementById('image-2016-gallery3');
	var image4 = document.getElementById('image-2016-gallery4');
	var image5 = document.getElementById('image-2016-gallery5');
	var image6 = document.getElementById('image-2016-gallery6');
	var image7 = document.getElementById('image-2016-gallery7');
	var image8 = document.getElementById('image-2016-gallery8');
	var image9 = document.getElementById('image-2016-gallery9');
	var image10 = document.getElementById('image-2016-gallery10');
	var image11 = document.getElementById('image-2016-gallery11');
	var image12 = document.getElementById('image-2016-gallery12');
	var image13 = document.getElementById('image-2016-gallery13');
	var image14 = document.getElementById('image-2016-gallery14');
	var image15 = document.getElementById('image-2016-gallery15');
	var image16 = document.getElementById('image-2016-gallery16');
	var image17 = document.getElementById('image-2016-gallery17');
	var image18 = document.getElementById('image-2016-gallery18');
	var image19 = document.getElementById('image-2016-gallery19');
	var image20 = document.getElementById('image-2016-gallery20');
	var image21 = document.getElementById('image-2016-gallery21');
	var image22 = document.getElementById('image-2016-gallery22');
	var image23 = document.getElementById('image-2016-gallery23');
	var image24 = document.getElementById('image-2016-gallery24');
	var image25 = document.getElementById('image-2016-gallery25');
	var image26 = document.getElementById('image-2016-gallery26');
	var image27 = document.getElementById('image-2016-gallery27');
	var image28 = document.getElementById('image-2016-gallery28');
	var image29 = document.getElementById('image-2016-gallery29');
	var image30 = document.getElementById('image-2016-gallery30');
	var image31 = document.getElementById('image-2016-gallery31');
	var image32 = document.getElementById('image-2016-gallery32');
	var image33 = document.getElementById('image-2016-gallery33');
	var image34 = document.getElementById('image-2016-gallery34');
	var image35 = document.getElementById('image-2016-gallery35');
	var image36 = document.getElementById('image-2016-gallery36');
	var image37 = document.getElementById('image-2016-gallery37');
	var image38 = document.getElementById('image-2016-gallery38');
	var image39 = document.getElementById('image-2016-gallery39');	
	var image40 = document.getElementById('image-2016-gallery40');
	var image41 = document.getElementById('image-2016-gallery41');
	var image42 = document.getElementById('image-2016-gallery42');
	var image43 = document.getElementById('image-2016-gallery43');	
	var image44 = document.getElementById('image-2016-gallery44');
	var image45 = document.getElementById('image-2016-gallery45');
	var image46 = document.getElementById('image-2016-gallery46');
	var image47 = document.getElementById('image-2016-gallery47');
	var image48 = document.getElementById('image-2016-gallery48');
	var image49 = document.getElementById('image-2016-gallery49');	
	var image50 = document.getElementById('image-2016-gallery50');
	var image51 = document.getElementById('image-2016-gallery51');
	
	image1.setAttribute("src", "images/gallery-2016/2016-1.jpg");
	image2.setAttribute("src", "images/gallery-2016/2016-2.jpg");
	image3.setAttribute("src", "images/gallery-2016/2016-3.jpg");
	image4.setAttribute("src", "images/gallery-2016/2016-4.jpg");
	image5.setAttribute("src", "images/gallery-2016/2016-5.jpg");
	image6.setAttribute("src", "images/gallery-2016/2016-6.jpg");
	image7.setAttribute("src", "images/gallery-2016/2016-7.jpg");
	image8.setAttribute("src", "images/gallery-2016/2016-8.jpg");
	image9.setAttribute("src", "images/gallery-2016/2016-9.jpg");
	image10.setAttribute("src", "images/gallery-2016/2016-10.jpg");
	image11.setAttribute("src", "images/gallery-2016/2016-11.jpg");
	image12.setAttribute("src", "images/gallery-2016/2016-12.jpg");
	image13.setAttribute("src", "images/gallery-2016/2016-13.jpg");
	image14.setAttribute("src", "images/gallery-2016/2016-14.jpg");
	image15.setAttribute("src", "images/gallery-2016/2016-15.jpg");
	image16.setAttribute("src", "images/gallery-2016/2016-16.jpg");
	image17.setAttribute("src", "images/gallery-2016/2016-17.jpg");
	image18.setAttribute("src", "images/gallery-2016/2016-18.jpg");
	image19.setAttribute("src", "images/gallery-2016/2016-19.jpg");
	image20.setAttribute("src", "images/gallery-2016/2016-20.jpg");
	image21.setAttribute("src", "images/gallery-2016/2016-21.jpg");
	image22.setAttribute("src", "images/gallery-2016/2016-22.jpg");
	image23.setAttribute("src", "images/gallery-2016/2016-23.jpg");
	image24.setAttribute("src", "images/gallery-2016/2016-24.jpg");
	image25.setAttribute("src", "images/gallery-2016/2016-25.jpg");
	image26.setAttribute("src", "images/gallery-2016/2016-26.jpg");
	image27.setAttribute("src", "images/gallery-2016/2016-27.jpg");
	image28.setAttribute("src", "images/gallery-2016/2016-28.jpg");
	image29.setAttribute("src", "images/gallery-2016/2016-29.jpg");
	image30.setAttribute("src", "images/gallery-2016/2016-30.jpg");
	image31.setAttribute("src", "images/gallery-2016/2016-31.jpg");
	image32.setAttribute("src", "images/gallery-2016/2016-32.jpg");
	image33.setAttribute("src", "images/gallery-2016/2016-33.jpg");
	image34.setAttribute("src", "images/gallery-2016/2016-34.jpg");
	image35.setAttribute("src", "images/gallery-2016/2016-35.jpg");
	image36.setAttribute("src", "images/gallery-2016/2016-36.jpg");
	image37.setAttribute("src", "images/gallery-2016/2016-37.jpg");
	image38.setAttribute("src", "images/gallery-2016/2016-38.jpg");
	image39.setAttribute("src", "images/gallery-2016/2016-39.jpg");
	image40.setAttribute("src", "images/gallery-2016/2016-40.jpg");
	image41.setAttribute("src", "images/gallery-2016/2016-41.jpg");
	image42.setAttribute("src", "images/gallery-2016/2016-42.jpg");
	image43.setAttribute("src", "images/gallery-2016/2016-43.jpg");
	image44.setAttribute("src", "images/gallery-2016/2016-44.JPG");
	image45.setAttribute("src", "images/gallery-2016/2016-45.JPG");
	image46.setAttribute("src", "images/gallery-2016/2016-46.jpg");
	image47.setAttribute("src", "images/gallery-2016/2016-47.jpg");
	image48.setAttribute("src", "images/gallery-2016/2016-48.jpg");
	image49.setAttribute("src", "images/gallery-2016/2016-49.jpg");
	image50.setAttribute("src", "images/gallery-2016/2016-50.jpg");
	image51.setAttribute("src", "images/gallery-2016/2016-51.JPG");
}

function displayGallery2017() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - 2017 Gallery";
	var current_page = document.getElementById("page-gallery-2017");
	current_page.removeAttribute("hidden"); 
	
	var image1 = document.getElementById('image-2017-gallery1');
	var image2 = document.getElementById('image-2017-gallery2');
	var image3 = document.getElementById('image-2017-gallery3');
	var image4 = document.getElementById('image-2017-gallery4');
	var image5 = document.getElementById('image-2017-gallery5');
	var image6 = document.getElementById('image-2017-gallery6');
	var image7 = document.getElementById('image-2017-gallery7');
	var image8 = document.getElementById('image-2017-gallery8');
	var image9 = document.getElementById('image-2017-gallery9');
	var image10 = document.getElementById('image-2017-gallery10');
	var image11 = document.getElementById('image-2017-gallery11');
	var image12 = document.getElementById('image-2017-gallery12');
	var image13 = document.getElementById('image-2017-gallery13');
	var image14 = document.getElementById('image-2017-gallery14');
	var image15 = document.getElementById('image-2017-gallery15');
	var image16 = document.getElementById('image-2017-gallery16');
	var image17 = document.getElementById('image-2017-gallery17');
	var image18 = document.getElementById('image-2017-gallery18');
	var image19 = document.getElementById('image-2017-gallery19');
	var image20 = document.getElementById('image-2017-gallery20');
	var image21 = document.getElementById('image-2017-gallery21');
	var image22 = document.getElementById('image-2017-gallery22');
	var image23 = document.getElementById('image-2017-gallery23');
	var image24 = document.getElementById('image-2017-gallery24');
	var image25 = document.getElementById('image-2017-gallery25');
	var image26 = document.getElementById('image-2017-gallery26');
	var image27 = document.getElementById('image-2017-gallery27');
	var image28 = document.getElementById('image-2017-gallery28');
	var image29 = document.getElementById('image-2017-gallery29');
	var image30 = document.getElementById('image-2017-gallery30');
	var image31 = document.getElementById('image-2017-gallery31');
	//var image32 = document.getElementById('image-2017-gallery32');
	var image33 = document.getElementById('image-2017-gallery33');
	var image34 = document.getElementById('image-2017-gallery34');
	var image35 = document.getElementById('image-2017-gallery35');
	var image36 = document.getElementById('image-2017-gallery36');
	var image37 = document.getElementById('image-2017-gallery37');
	var image38 = document.getElementById('image-2017-gallery38');
	var image39 = document.getElementById('image-2017-gallery39');	
	var image40 = document.getElementById('image-2017-gallery40');
	var image41 = document.getElementById('image-2017-gallery41');
	var image42 = document.getElementById('image-2017-gallery42');
	var image43 = document.getElementById('image-2017-gallery43');	
	var image44 = document.getElementById('image-2017-gallery44');
	var image45 = document.getElementById('image-2017-gallery45');
	var image46 = document.getElementById('image-2017-gallery46');
	var image47 = document.getElementById('image-2017-gallery47');
	var image48 = document.getElementById('image-2017-gallery48');
	var image49 = document.getElementById('image-2017-gallery49');	
	var image50 = document.getElementById('image-2017-gallery50');
	var image51 = document.getElementById('image-2017-gallery51');
	var image52 = document.getElementById('image-2017-gallery52');
	var image53 = document.getElementById('image-2017-gallery53');
	var image54 = document.getElementById('image-2017-gallery54');
	var image55 = document.getElementById('image-2017-gallery55');
	var image56 = document.getElementById('image-2017-gallery56');
	var image57 = document.getElementById('image-2017-gallery57');
	var image58 = document.getElementById('image-2017-gallery58');
	var image59 = document.getElementById('image-2017-gallery59');
	var image60 = document.getElementById('image-2017-gallery60');
	var image61 = document.getElementById('image-2017-gallery61');
	var image62 = document.getElementById('image-2017-gallery62');
	var image63 = document.getElementById('image-2017-gallery63');
	var image64 = document.getElementById('image-2017-gallery64');
	var image65 = document.getElementById('image-2017-gallery65');
	var image66 = document.getElementById('image-2017-gallery66');
	var image67 = document.getElementById('image-2017-gallery67');
	var image68 = document.getElementById('image-2017-gallery68');
	var image69 = document.getElementById('image-2017-gallery69');
	var image70 = document.getElementById('image-2017-gallery70');
	var image71 = document.getElementById('image-2017-gallery71');
	var image72 = document.getElementById('image-2017-gallery72');
	var image73 = document.getElementById('image-2017-gallery73');
	var image74 = document.getElementById('image-2017-gallery74');
	var image75 = document.getElementById('image-2017-gallery75');
	
	image1.setAttribute("src", "images/gallery-2017/2017-1.jpg");
	image2.setAttribute("src", "images/gallery-2017/2017-2.jpg");
	image3.setAttribute("src", "images/gallery-2017/2017-3.jpg");
	image4.setAttribute("src", "images/gallery-2017/2017-4.jpg");
	image5.setAttribute("src", "images/gallery-2017/2017-5.jpg");
	image6.setAttribute("src", "images/gallery-2017/2017-6.jpg");
	image7.setAttribute("src", "images/gallery-2017/2017-7.jpg");
	image8.setAttribute("src", "images/gallery-2017/2017-8.jpg");
	image9.setAttribute("src", "images/gallery-2017/2017-9.JPG");
	image10.setAttribute("src", "images/gallery-2017/2017-10.jpg");
	image11.setAttribute("src", "images/gallery-2017/2017-11.jpg");
	image12.setAttribute("src", "images/gallery-2017/2017-12.jpg");
	image13.setAttribute("src", "images/gallery-2017/2017-13.jpg");
	image14.setAttribute("src", "images/gallery-2017/2017-14.jpg");
	image15.setAttribute("src", "images/gallery-2017/2017-15.jpg");
	image16.setAttribute("src", "images/gallery-2017/2017-16.jpg");
	image17.setAttribute("src", "images/gallery-2017/2017-17.jpg");
	image18.setAttribute("src", "images/gallery-2017/2017-18.jpg");
	image19.setAttribute("src", "images/gallery-2017/2017-19.jpg");
	image20.setAttribute("src", "images/gallery-2017/2017-20.jpg");
	image21.setAttribute("src", "images/gallery-2017/2017-21.jpg");
	image22.setAttribute("src", "images/gallery-2017/2017-22.jpg");
	image23.setAttribute("src", "images/gallery-2017/2017-23.jpg");
	image24.setAttribute("src", "images/gallery-2017/2017-24.jpg");
	image25.setAttribute("src", "images/gallery-2017/2017-25.jpg");
	image26.setAttribute("src", "images/gallery-2017/2017-26.jpg");
	image27.setAttribute("src", "images/gallery-2017/2017-27.jpg");
	image28.setAttribute("src", "images/gallery-2017/2017-28.jpg");
	image29.setAttribute("src", "images/gallery-2017/2017-29.jpg");
	image30.setAttribute("src", "images/gallery-2017/2017-30.JPG");
	image31.setAttribute("src", "images/gallery-2017/2017-31.JPG");
	//image32.setAttribute("src", "images/gallery-2017/2017-32.jpg");
	image33.setAttribute("src", "images/gallery-2017/2017-33.jpg");
	image34.setAttribute("src", "images/gallery-2017/2017-34.jpg");
	image35.setAttribute("src", "images/gallery-2017/2017-35.jpg");
	image36.setAttribute("src", "images/gallery-2017/2017-36.jpg");
	image37.setAttribute("src", "images/gallery-2017/2017-37.jpg");
	image38.setAttribute("src", "images/gallery-2017/2017-38.jpg");
	image39.setAttribute("src", "images/gallery-2017/2017-39.jpg");
	image40.setAttribute("src", "images/gallery-2017/2017-40.jpg");
	image41.setAttribute("src", "images/gallery-2017/2017-41.jpg");
	image42.setAttribute("src", "images/gallery-2017/2017-42.jpg");
	image43.setAttribute("src", "images/gallery-2017/2017-43.jpg");
	image44.setAttribute("src", "images/gallery-2017/2017-44.jpg");
	image45.setAttribute("src", "images/gallery-2017/2017-45.jpg");
	image46.setAttribute("src", "images/gallery-2017/2017-46.jpg");
	image47.setAttribute("src", "images/gallery-2017/2017-47.jpg");
	image48.setAttribute("src", "images/gallery-2017/2017-48.jpg");
	image49.setAttribute("src", "images/gallery-2017/2017-49.jpg");
	image50.setAttribute("src", "images/gallery-2017/2017-50.jpg");
	image51.setAttribute("src", "images/gallery-2017/2017-51.jpg");
	image52.setAttribute("src", "images/gallery-2017/2017-52.jpg");
	image53.setAttribute("src", "images/gallery-2017/2017-53.jpg");
	image54.setAttribute("src", "images/gallery-2017/2017-54.jpg");
	image55.setAttribute("src", "images/gallery-2017/2017-55.jpg");
	image56.setAttribute("src", "images/gallery-2017/2017-56.jpg");
	image57.setAttribute("src", "images/gallery-2017/2017-57.jpg");
	image58.setAttribute("src", "images/gallery-2017/2017-58.jpg");
	image59.setAttribute("src", "images/gallery-2017/2017-59.jpg");
	image60.setAttribute("src", "images/gallery-2017/2017-60.jpg");
	image61.setAttribute("src", "images/gallery-2017/2017-61.jpg");
	image62.setAttribute("src", "images/gallery-2017/2017-62.jpg");
	image63.setAttribute("src", "images/gallery-2017/2017-63.jpg");
	image64.setAttribute("src", "images/gallery-2017/2017-64.jpg");
	image65.setAttribute("src", "images/gallery-2017/2017-65.jpg");
	image66.setAttribute("src", "images/gallery-2017/2017-66.jpg");
	image67.setAttribute("src", "images/gallery-2017/2017-67.jpg");
	image68.setAttribute("src", "images/gallery-2017/2017-68.jpg");
	image69.setAttribute("src", "images/gallery-2017/2017-69.jpg");
	image70.setAttribute("src", "images/gallery-2017/2017-70.JPG");
	image71.setAttribute("src", "images/gallery-2017/2017-71.JPG");
	image72.setAttribute("src", "images/gallery-2017/2017-72.JPG");
	image73.setAttribute("src", "images/gallery-2017/2017-73.JPG");
	image74.setAttribute("src", "images/gallery-2017/2017-74.JPG");
	image75.setAttribute("src", "images/gallery-2017/2017-75.JPG");
}

function displayGallery2018() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Alapalooza 2018";
	var current_page = document.getElementById("page-gallery-2018");
	current_page.removeAttribute("hidden");
	
	var image1 = document.getElementById('image-2018-gallery1');
	var image2 = document.getElementById('image-2018-gallery2');
	var image3 = document.getElementById('image-2018-gallery3');
	var image4 = document.getElementById('image-2018-gallery4');
	var image5 = document.getElementById('image-2018-gallery5');
	var image6 = document.getElementById('image-2018-gallery6');
	var image7 = document.getElementById('image-2018-gallery7');
	var image8 = document.getElementById('image-2018-gallery8');
	var image9 = document.getElementById('image-2018-gallery9');
	var image10 = document.getElementById('image-2018-gallery10');
	var image11 = document.getElementById('image-2018-gallery11');
	var image12 = document.getElementById('image-2018-gallery12');
	var image13 = document.getElementById('image-2018-gallery13');
	var image14 = document.getElementById('image-2018-gallery14');
	var image15 = document.getElementById('image-2018-gallery15');
	var image16 = document.getElementById('image-2018-gallery16');
	var image17 = document.getElementById('image-2018-gallery17');
	var image18 = document.getElementById('image-2018-gallery18');
	
	image1.setAttribute("src", "images/gallery-2018/2018-1.jpg");
	image2.setAttribute("src", "images/gallery-2018/2018-2.jpg");
	image3.setAttribute("src", "images/gallery-2018/2018-3.jpg");
	image4.setAttribute("src", "images/gallery-2018/2018-4.jpg");
	image5.setAttribute("src", "images/gallery-2018/2018-5.jpg");
	image6.setAttribute("src", "images/gallery-2018/2018-6.jpg");
	image7.setAttribute("src", "images/gallery-2018/2018-7.jpg");
	image8.setAttribute("src", "images/gallery-2018/2018-8.jpg");
	image9.setAttribute("src", "images/gallery-2018/2018-9.jpg");
	image10.setAttribute("src", "images/gallery-2018/2018-10.jpg");
	image11.setAttribute("src", "images/gallery-2018/2018-11.jpg");
	image12.setAttribute("src", "images/gallery-2018/2018-12.jpg");
	image13.setAttribute("src", "images/gallery-2018/2018-13.jpg");
	image14.setAttribute("src", "images/gallery-2018/2018-14.jpg");
	image15.setAttribute("src", "images/gallery-2018/2018-15.jpg");
	image16.setAttribute("src", "images/gallery-2018/2018-16.jpg");
	image17.setAttribute("src", "images/gallery-2018/2018-17.jpg");
	image18.setAttribute("src", "images/gallery-2018/2018-18.jpg");
}

function displayGallery2019() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Alapalooza 2019";
	var current_page = document.getElementById("page-gallery-2019");
	current_page.removeAttribute("hidden"); 
	
	var image1 = document.getElementById('image-2019-gallery1');
	var image2 = document.getElementById('image-2019-gallery2');
	var image3 = document.getElementById('image-2019-gallery3');
	var image4 = document.getElementById('image-2019-gallery4');
	var image5 = document.getElementById('image-2019-gallery5');
	var image6 = document.getElementById('image-2019-gallery6');
	var image7 = document.getElementById('image-2019-gallery7');
	var image8 = document.getElementById('image-2019-gallery8');
	var image9 = document.getElementById('image-2019-gallery9');
	var image10 = document.getElementById('image-2019-gallery10');
	var image11 = document.getElementById('image-2019-gallery11');
	var image12 = document.getElementById('image-2019-gallery12');
	var image13 = document.getElementById('image-2019-gallery13');
	var image14 = document.getElementById('image-2019-gallery14');
	var image15 = document.getElementById('image-2019-gallery15');
	var image16 = document.getElementById('image-2019-gallery16');
	var image17 = document.getElementById('image-2019-gallery17');
	var image18 = document.getElementById('image-2019-gallery18');
	var image19 = document.getElementById('image-2019-gallery19');
	var image20 = document.getElementById('image-2019-gallery20');
	var image21 = document.getElementById('image-2019-gallery21');
	var image22 = document.getElementById('image-2019-gallery22');
	var image23 = document.getElementById('image-2019-gallery23');
	var image24 = document.getElementById('image-2019-gallery24');
	var image25 = document.getElementById('image-2019-gallery25');
	var image26 = document.getElementById('image-2019-gallery26');
	var image27 = document.getElementById('image-2019-gallery27');
	var image28 = document.getElementById('image-2019-gallery28');
	var image29 = document.getElementById('image-2019-gallery29');
	var image30 = document.getElementById('image-2019-gallery30');
	var image31 = document.getElementById('image-2019-gallery31');
	var image32 = document.getElementById('image-2019-gallery32');
	var image33 = document.getElementById('image-2019-gallery33');
	var image34 = document.getElementById('image-2019-gallery34');
	var image35 = document.getElementById('image-2019-gallery35');
	var image36 = document.getElementById('image-2019-gallery36');
	var image37 = document.getElementById('image-2019-gallery37');
	var image38 = document.getElementById('image-2019-gallery38');
	var image39 = document.getElementById('image-2019-gallery39');
	var image40 = document.getElementById('image-2019-gallery40');
	var image41 = document.getElementById('image-2019-gallery41');
	var image42 = document.getElementById('image-2019-gallery42');
	var image43 = document.getElementById('image-2019-gallery43');
	var image44 = document.getElementById('image-2019-gallery44');
	var image45 = document.getElementById('image-2019-gallery45');
	var image46 = document.getElementById('image-2019-gallery46');
	var image47 = document.getElementById('image-2019-gallery47');
	var image48 = document.getElementById('image-2019-gallery48');
	var image49 = document.getElementById('image-2019-gallery49');
	var image50 = document.getElementById('image-2019-gallery50');
	var image51 = document.getElementById('image-2019-gallery51');
	var image52 = document.getElementById('image-2019-gallery52');
	var image53 = document.getElementById('image-2019-gallery53');
	var image54 = document.getElementById('image-2019-gallery54');
	
	image1.setAttribute("src", "images/gallery-2019/2019-1.jpg");
	image2.setAttribute("src", "images/gallery-2019/2019-2.jpg");
	image3.setAttribute("src", "images/gallery-2019/2019-3.jpg");
	image4.setAttribute("src", "images/gallery-2019/2019-4.jpg");
	image5.setAttribute("src", "images/gallery-2019/2019-5.jpg");
	image6.setAttribute("src", "images/gallery-2019/2019-6.jpg");
	image7.setAttribute("src", "images/gallery-2019/2019-7.jpg");
	image8.setAttribute("src", "images/gallery-2019/2019-8.jpg");
	image9.setAttribute("src", "images/gallery-2019/2019-9.jpg");
	image10.setAttribute("src", "images/gallery-2019/2019-10.jpg");
	image11.setAttribute("src", "images/gallery-2019/2019-11.jpg");
	image12.setAttribute("src", "images/gallery-2019/2019-12.jpg");
	image13.setAttribute("src", "images/gallery-2019/2019-13.jpg");
	image14.setAttribute("src", "images/gallery-2019/2019-14.jpg");
	image15.setAttribute("src", "images/gallery-2019/2019-15.jpg");
	image16.setAttribute("src", "images/gallery-2019/2019-16.jpg");
	image17.setAttribute("src", "images/gallery-2019/2019-17.jpg");
	image18.setAttribute("src", "images/gallery-2019/2019-18.jpg");
	image19.setAttribute("src", "images/gallery-2019/2019-19.jpg");
	image20.setAttribute("src", "images/gallery-2019/2019-20.jpg");
	image21.setAttribute("src", "images/gallery-2019/2019-21.jpg");
	image22.setAttribute("src", "images/gallery-2019/2019-22.jpg");
	image23.setAttribute("src", "images/gallery-2019/2019-23.jpg");
	image24.setAttribute("src", "images/gallery-2019/2019-24.jpg");
	image25.setAttribute("src", "images/gallery-2019/2019-25.jpg");
	image26.setAttribute("src", "images/gallery-2019/2019-26.jpg");
	image27.setAttribute("src", "images/gallery-2019/2019-27.jpg");
	image28.setAttribute("src", "images/gallery-2019/2019-28.jpg");
	image29.setAttribute("src", "images/gallery-2019/2019-29.jpg");
	image30.setAttribute("src", "images/gallery-2019/2019-30.jpg");
	image31.setAttribute("src", "images/gallery-2019/2019-31.jpg");
	image32.setAttribute("src", "images/gallery-2019/2019-32.jpg");
	image33.setAttribute("src", "images/gallery-2019/2019-33.jpg");
	image34.setAttribute("src", "images/gallery-2019/2019-34.jpg");
	image35.setAttribute("src", "images/gallery-2019/2019-35.jpg");
	image36.setAttribute("src", "images/gallery-2019/2019-36.jpg");
	image37.setAttribute("src", "images/gallery-2019/2019-37.jpg");
	image38.setAttribute("src", "images/gallery-2019/2019-38.jpg");
	image39.setAttribute("src", "images/gallery-2019/2019-39.jpg");
	image40.setAttribute("src", "images/gallery-2019/2019-40.jpg");
	image41.setAttribute("src", "images/gallery-2019/2019-41.jpg");
	image42.setAttribute("src", "images/gallery-2019/2019-42.jpg");
	image43.setAttribute("src", "images/gallery-2019/2019-43.jpg");
	image44.setAttribute("src", "images/gallery-2019/2019-44.jpg");
	image45.setAttribute("src", "images/gallery-2019/2019-45.jpg");
	image46.setAttribute("src", "images/gallery-2019/2019-46.jpg");
	image47.setAttribute("src", "images/gallery-2019/2019-47.jpg");
	image48.setAttribute("src", "images/gallery-2019/2019-48.jpg");
	image49.setAttribute("src", "images/gallery-2019/2019-49.jpg");
	image50.setAttribute("src", "images/gallery-2019/2019-50.jpg");
	image51.setAttribute("src", "images/gallery-2019/2019-51.jpg");
	image52.setAttribute("src", "images/gallery-2019/2019-52.jpg");
	image53.setAttribute("src", "images/gallery-2019/2019-53.jpg");
	image54.setAttribute("src", "images/gallery-2019/2019-54.jpg");
}

function displayGallery2020() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Alapalooza 2020";
	var current_page = document.getElementById("page-gallery-2020");
	current_page.removeAttribute("hidden"); 
	
	var image1 = document.getElementById('image-2020-gallery1');
	var image2 = document.getElementById('image-2020-gallery2');
	var image3 = document.getElementById('image-2020-gallery3');
	var image4 = document.getElementById('image-2020-gallery4');
	var image5 = document.getElementById('image-2020-gallery5');
	var image6 = document.getElementById('image-2020-gallery6');
	var image7 = document.getElementById('image-2020-gallery7');
	var image8 = document.getElementById('image-2020-gallery8');
	var image9 = document.getElementById('image-2020-gallery9');
	var image10 = document.getElementById('image-2020-gallery10');
	var image11 = document.getElementById('image-2020-gallery11');
	var image12 = document.getElementById('image-2020-gallery12');
	var image13 = document.getElementById('image-2020-gallery13');
	var image14 = document.getElementById('image-2020-gallery14');
	var image15 = document.getElementById('image-2020-gallery15');
	var image16 = document.getElementById('image-2020-gallery16');
	var image17 = document.getElementById('image-2020-gallery17');
	var image18 = document.getElementById('image-2020-gallery18');
	var image19 = document.getElementById('image-2020-gallery19');
	var image20 = document.getElementById('image-2020-gallery20');
	var image21 = document.getElementById('image-2020-gallery21');
	var image22 = document.getElementById('image-2020-gallery22');
	
	image1.setAttribute("src", "images/gallery-2020/2020-1.jpg");
	image2.setAttribute("src", "images/gallery-2020/2020-2.jpg");
	image3.setAttribute("src", "images/gallery-2020/2020-3.jpg");
	image4.setAttribute("src", "images/gallery-2020/2020-4.jpg");
	image5.setAttribute("src", "images/gallery-2020/2020-5.jpg");
	image6.setAttribute("src", "images/gallery-2020/2020-6.jpg");
	image7.setAttribute("src", "images/gallery-2020/2020-7.jpg");
	image8.setAttribute("src", "images/gallery-2020/2020-8.jpg");
	image9.setAttribute("src", "images/gallery-2020/2020-9.jpg");
	image10.setAttribute("src", "images/gallery-2020/2020-10.jpg");
	image11.setAttribute("src", "images/gallery-2020/2020-11.jpg");
	image12.setAttribute("src", "images/gallery-2020/2020-12.jpg");
	image13.setAttribute("src", "images/gallery-2020/2020-13.jpg");
	image14.setAttribute("src", "images/gallery-2020/2020-14.jpg");
	image15.setAttribute("src", "images/gallery-2020/2020-15.jpg");
	image16.setAttribute("src", "images/gallery-2020/2020-16.jpg");
	image17.setAttribute("src", "images/gallery-2020/2020-17.jpg");
	image18.setAttribute("src", "images/gallery-2020/2020-18.jpg");
	image19.setAttribute("src", "images/gallery-2020/2020-19.jpg");
	image20.setAttribute("src", "images/gallery-2020/2020-20.jpg");
	image21.setAttribute("src", "images/gallery-2020/2020-21.jpg");
	image22.setAttribute("src", "images/gallery-2020/2020-22.jpg");
}

function displayGallery2021() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Alapalooza 2021";
	var current_page = document.getElementById("page-gallery-2021");
	current_page.removeAttribute("hidden"); 
	
	var image1 = document.getElementById('image-2021-gallery1');
	var image2 = document.getElementById('image-2021-gallery2');
	var image3 = document.getElementById('image-2021-gallery3');
	var image4 = document.getElementById('image-2021-gallery4');
	var image5 = document.getElementById('image-2021-gallery5');
	var image6 = document.getElementById('image-2021-gallery6');
	var image7 = document.getElementById('image-2021-gallery7');
	var image8 = document.getElementById('image-2021-gallery8');
	var image9 = document.getElementById('image-2021-gallery9');
	var image10 = document.getElementById('image-2021-gallery10');
	var image11 = document.getElementById('image-2021-gallery11');
	var image12 = document.getElementById('image-2021-gallery12');
	var image13 = document.getElementById('image-2021-gallery13');
	var image14 = document.getElementById('image-2021-gallery14');
	var image15 = document.getElementById('image-2021-gallery15');
	var image16 = document.getElementById('image-2021-gallery16');
	var image17 = document.getElementById('image-2021-gallery17');
	var image18 = document.getElementById('image-2021-gallery18');
	var image19 = document.getElementById('image-2021-gallery19');
	var image20 = document.getElementById('image-2021-gallery20');
	var image21 = document.getElementById('image-2021-gallery21');
	var image22 = document.getElementById('image-2021-gallery22');
	var image23 = document.getElementById('image-2021-gallery23');
	var image24 = document.getElementById('image-2021-gallery24');
	var image25 = document.getElementById('image-2021-gallery25');
	var image26 = document.getElementById('image-2021-gallery26');
	var image27 = document.getElementById('image-2021-gallery27');
	var image28 = document.getElementById('image-2021-gallery28');
	var image29 = document.getElementById('image-2021-gallery29');
	var image30 = document.getElementById('image-2021-gallery30');
	var image31 = document.getElementById('image-2021-gallery31');
	var image32 = document.getElementById('image-2021-gallery32');
	var image33 = document.getElementById('image-2021-gallery33');
	var image34 = document.getElementById('image-2021-gallery34');
	
	image1.setAttribute("src", "images/gallery-2021/2021-1.jpg");
	image2.setAttribute("src", "images/gallery-2021/2021-2.jpg");
	image3.setAttribute("src", "images/gallery-2021/2021-3.jpg");
	image4.setAttribute("src", "images/gallery-2021/2021-4.jpg");
	image5.setAttribute("src", "images/gallery-2021/2021-5.jpg");
	image6.setAttribute("src", "images/gallery-2021/2021-6.jpg");
	image7.setAttribute("src", "images/gallery-2021/2021-7.jpg");
	image8.setAttribute("src", "images/gallery-2021/2021-8.jpg");
	image9.setAttribute("src", "images/gallery-2021/2021-9.jpg");
	image10.setAttribute("src", "images/gallery-2021/2021-10.jpg");
	image11.setAttribute("src", "images/gallery-2021/2021-11.jpg");
	image12.setAttribute("src", "images/gallery-2021/2021-12.jpg");
	image13.setAttribute("src", "images/gallery-2021/2021-13.jpg");
	image14.setAttribute("src", "images/gallery-2021/2021-14.jpg");
	image15.setAttribute("src", "images/gallery-2021/2021-15.jpg");
	image16.setAttribute("src", "images/gallery-2021/2021-16.jpg");
	image17.setAttribute("src", "images/gallery-2021/2021-17.jpg");
	image18.setAttribute("src", "images/gallery-2021/2021-18.jpg");
	image19.setAttribute("src", "images/gallery-2021/2021-19.jpg");
	image20.setAttribute("src", "images/gallery-2021/2021-20.jpg");
	image21.setAttribute("src", "images/gallery-2021/2021-21.jpg");
	image22.setAttribute("src", "images/gallery-2021/2021-22.jpg");
	image23.setAttribute("src", "images/gallery-2021/2021-23.jpg");
	image24.setAttribute("src", "images/gallery-2021/2021-24.jpg");
	image25.setAttribute("src", "images/gallery-2021/2021-25.jpg");
	image26.setAttribute("src", "images/gallery-2021/2021-26.jpg");
	image27.setAttribute("src", "images/gallery-2021/2021-27.jpg");
	image28.setAttribute("src", "images/gallery-2021/2021-28.jpg");
	image29.setAttribute("src", "images/gallery-2021/2021-29.jpg");
	image30.setAttribute("src", "images/gallery-2021/2021-30.jpg");
	image31.setAttribute("src", "images/gallery-2021/2021-31.jpg");
	image32.setAttribute("src", "images/gallery-2021/2021-32.jpg");
	image33.setAttribute("src", "images/gallery-2021/2021-33.jpg");
	image34.setAttribute("src", "images/gallery-2021/2021-34.jpg");
}

function displayGallery2022() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - 2022 Gallery";
	var current_page = document.getElementById("page-gallery-2022");
	current_page.removeAttribute("hidden"); 
	
	var image1 = document.getElementById('image-2022-gallery1');
	var image2 = document.getElementById('image-2022-gallery2');
	var image3 = document.getElementById('image-2022-gallery3');
	var image4 = document.getElementById('image-2022-gallery4');
	var image5 = document.getElementById('image-2022-gallery5');
	var image6 = document.getElementById('image-2022-gallery6');
	var image7 = document.getElementById('image-2022-gallery7');
	var image8 = document.getElementById('image-2022-gallery8');
	var image9 = document.getElementById('image-2022-gallery9');
	var image10 = document.getElementById('image-2022-gallery10');
	var image11 = document.getElementById('image-2022-gallery11');
	var image12 = document.getElementById('image-2022-gallery12');
	var image13 = document.getElementById('image-2022-gallery13');
	var image14 = document.getElementById('image-2022-gallery14');
	var image15 = document.getElementById('image-2022-gallery15');
	var image16 = document.getElementById('image-2022-gallery16');
	var image17 = document.getElementById('image-2022-gallery17');
	var image18 = document.getElementById('image-2022-gallery18');
	var image19 = document.getElementById('image-2022-gallery19');
	var image20 = document.getElementById('image-2022-gallery20');
	var image21 = document.getElementById('image-2022-gallery21');
	var image22 = document.getElementById('image-2022-gallery22');
	var image23 = document.getElementById('image-2022-gallery23');
	var image24 = document.getElementById('image-2022-gallery24');
	var image25 = document.getElementById('image-2022-gallery25');
	var image26 = document.getElementById('image-2022-gallery26');
	var image27 = document.getElementById('image-2022-gallery27');
	var image28 = document.getElementById('image-2022-gallery28');
	var image29 = document.getElementById('image-2022-gallery29');
	var image30 = document.getElementById('image-2022-gallery30');
	var image31 = document.getElementById('image-2022-gallery31');
	var image32 = document.getElementById('image-2022-gallery32');
	var image33 = document.getElementById('image-2022-gallery33');
	var image34 = document.getElementById('image-2022-gallery34');
	var image35 = document.getElementById('image-2022-gallery35');
	var image36 = document.getElementById('image-2022-gallery36');
	var image37 = document.getElementById('image-2022-gallery37');
	var image38 = document.getElementById('image-2022-gallery38');
	var image39 = document.getElementById('image-2022-gallery39');	
	var image40 = document.getElementById('image-2022-gallery40');
	var image41 = document.getElementById('image-2022-gallery41');
	var image42 = document.getElementById('image-2022-gallery42');
	var image43 = document.getElementById('image-2022-gallery43');
	var image44 = document.getElementById('image-2022-gallery44');
	var image45 = document.getElementById('image-2022-gallery45');
	var image46 = document.getElementById('image-2022-gallery46');
	var image47 = document.getElementById('image-2022-gallery47');
	var image48 = document.getElementById('image-2022-gallery48');
	var image49 = document.getElementById('image-2022-gallery49');	
	var image50 = document.getElementById('image-2022-gallery50');
	var image51 = document.getElementById('image-2022-gallery51');
	var image52 = document.getElementById('image-2022-gallery52');
	var image53 = document.getElementById('image-2022-gallery53');
	var image54 = document.getElementById('image-2022-gallery54');
	var image55 = document.getElementById('image-2022-gallery55');
	var image56 = document.getElementById('image-2022-gallery56');
	var image57 = document.getElementById('image-2022-gallery57');
	var image58 = document.getElementById('image-2022-gallery58');
	var image59 = document.getElementById('image-2022-gallery59');
	var image60 = document.getElementById('image-2022-gallery60');
	var image61 = document.getElementById('image-2022-gallery61');
	var image62 = document.getElementById('image-2022-gallery62');
	var image63 = document.getElementById('image-2022-gallery63');
	
	image1.setAttribute("src", "images/gallery-2022/2022-01.jpg");
	image2.setAttribute("src", "images/gallery-2022/2022-02.jpg");
	image3.setAttribute("src", "images/gallery-2022/2022-03.jpg");
	image4.setAttribute("src", "images/gallery-2022/2022-04.jpg");
	image5.setAttribute("src", "images/gallery-2022/2022-05.jpg");
	image6.setAttribute("src", "images/gallery-2022/2022-06.jpg");
	image7.setAttribute("src", "images/gallery-2022/2022-07.jpg");
	image8.setAttribute("src", "images/gallery-2022/2022-08.jpg");
	image9.setAttribute("src", "images/gallery-2022/2022-09.jpg");
	image10.setAttribute("src", "images/gallery-2022/2022-10.jpg");
	image11.setAttribute("src", "images/gallery-2022/2022-11.jpg");
	image12.setAttribute("src", "images/gallery-2022/2022-12.jpg");
	image13.setAttribute("src", "images/gallery-2022/2022-13.jpg");
	image14.setAttribute("src", "images/gallery-2022/2022-14.jpg");
	image15.setAttribute("src", "images/gallery-2022/2022-15.jpg");
	image16.setAttribute("src", "images/gallery-2022/2022-16.jpg");
	image17.setAttribute("src", "images/gallery-2022/2022-17.jpg");
	image18.setAttribute("src", "images/gallery-2022/2022-18.jpg");
	image19.setAttribute("src", "images/gallery-2022/2022-19.jpg");
	image20.setAttribute("src", "images/gallery-2022/2022-20.jpg");
	image21.setAttribute("src", "images/gallery-2022/2022-21.jpg");
	image22.setAttribute("src", "images/gallery-2022/2022-22.jpg");
	image23.setAttribute("src", "images/gallery-2022/2022-23.jpg");
	image24.setAttribute("src", "images/gallery-2022/2022-24.jpg");
	image25.setAttribute("src", "images/gallery-2022/2022-25.jpg");
	image26.setAttribute("src", "images/gallery-2022/2022-26.jpg");
	image27.setAttribute("src", "images/gallery-2022/2022-27.jpg");
	image28.setAttribute("src", "images/gallery-2022/2022-28.jpg");
	image29.setAttribute("src", "images/gallery-2022/2022-29.jpg");
	image30.setAttribute("src", "images/gallery-2022/2022-30.jpg");
	image31.setAttribute("src", "images/gallery-2022/2022-31.jpg");
	image32.setAttribute("src", "images/gallery-2022/2022-32.jpg");
	image33.setAttribute("src", "images/gallery-2022/2022-33.jpg");
	image34.setAttribute("src", "images/gallery-2022/2022-34.jpg");
	image35.setAttribute("src", "images/gallery-2022/2022-35.jpg");
	image36.setAttribute("src", "images/gallery-2022/2022-36.jpg");
	image37.setAttribute("src", "images/gallery-2022/2022-37.jpg");
	image38.setAttribute("src", "images/gallery-2022/2022-38.jpg");
	image39.setAttribute("src", "images/gallery-2022/2022-39.jpg");
	image40.setAttribute("src", "images/gallery-2022/2022-40.jpg");
	image41.setAttribute("src", "images/gallery-2022/2022-41.jpg");
	image42.setAttribute("src", "images/gallery-2022/2022-42.jpg");
	image43.setAttribute("src", "images/gallery-2022/2022-43.jpg");
	image44.setAttribute("src", "images/gallery-2022/2022-44.jpg");
	image45.setAttribute("src", "images/gallery-2022/2022-45.jpg");
	image46.setAttribute("src", "images/gallery-2022/2022-46.jpg");
	image47.setAttribute("src", "images/gallery-2022/2022-47.jpg");
	image48.setAttribute("src", "images/gallery-2022/2022-48.jpg");
	image49.setAttribute("src", "images/gallery-2022/2022-49.jpg");
	image50.setAttribute("src", "images/gallery-2022/2022-50.jpg");
	image51.setAttribute("src", "images/gallery-2022/2022-51.jpg");
	image52.setAttribute("src", "images/gallery-2022/2022-52.jpg");
	image53.setAttribute("src", "images/gallery-2022/2022-53.jpg");
	image54.setAttribute("src", "images/gallery-2022/2022-54.jpg");
	image55.setAttribute("src", "images/gallery-2022/2022-55.jpg");
	image56.setAttribute("src", "images/gallery-2022/2022-56.jpg");
	image57.setAttribute("src", "images/gallery-2022/2022-57.jpg");
	image58.setAttribute("src", "images/gallery-2022/2022-58.jpg");
	image59.setAttribute("src", "images/gallery-2022/2022-59.jpg");
	image60.setAttribute("src", "images/gallery-2022/2022-60.jpg");
	image61.setAttribute("src", "images/gallery-2022/2022-61.jpg");
	image62.setAttribute("src", "images/gallery-2022/2022-62.jpg");
	image63.setAttribute("src", "images/gallery-2022/2022-63.jpg");
}

function displayGallery2023() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - 2023 Gallery";
	var current_page = document.getElementById("page-gallery-2023");
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
	
	var urlParams = new URLSearchParams(window.location.search);
	
	if(urlParams.has('fbclid')) {
		window.location = "https://alapalooza.github.io";
	}
	else if(window.location.href == INDEX_HTML_PATH + "#home" || window.location.href == "https://alapalooza.github.io/#home") {
		displayHome();
	}
	else if(window.location.href == INDEX_HTML_PATH || window.location.href == "https://alapalooza.github.io/") {
		displayIndex();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#event-details" || window.location.href == "https://alapalooza.github.io/#event-details") {
		displayEventDetails();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#vip" || window.location.href == "https://alapalooza.github.io/#vip") {
		displayVip();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#entertainment" || window.location.href == "https://alapalooza.github.io/#entertainment") {
		displayEntertainment();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#merchandise" || window.location.href == "https://alapalooza.github.io/#merchandise" || window.location.href == "domain.com#merchandise") {
		displayMerchandise();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#sponsors" || window.location.href == "https://alapalooza.github.io/#sponsors" || window.location.href == "domain.com#sponsors") {
		displaySponsors();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#gallery-2015" || window.location.href == "https://alapalooza.github.io/#gallery-2015" || window.location.href == "domain.com#gallery-2015"){
		displayGallery2015();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#gallery-2016" || window.location.href == "https://alapalooza.github.io/#gallery-2016" || window.location.href == "domain.com#gallery-2016"){
		displayGallery2016();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#gallery-2017" || window.location.href == "https://alapalooza.github.io/#gallery-2017" || window.location.href == "domain.com#gallery-2017"){
		displayGallery2017();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#gallery-2018" || window.location.href == "https://alapalooza.github.io/#gallery-2018" || window.location.href == "domain.com#gallery-2018"){
		displayGallery2018();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#gallery-2019" || window.location.href == "https://alapalooza.github.io/#gallery-2019" || window.location.href == "domain.com#gallery-2019"){
		displayGallery2019();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#gallery-2020" || window.location.href == "https://alapalooza.github.io/#gallery-2020" || window.location.href == "domain.com#gallery-2020"){
		displayGallery2020();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#gallery-2021" || window.location.href == "https://alapalooza.github.io/#gallery-2021" || window.location.href == "domain.com#gallery-2021"){
		displayGallery2021();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#gallery-2022" || window.location.href == "https://alapalooza.github.io/#gallery-2022" || window.location.href == "domain.com#gallery-2022"){
		displayGallery2022();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#gallery-2023" || window.location.href == "https://alapalooza.github.io/#gallery-2023" || window.location.href == "domain.com#gallery-2023"){
		displayGallery2023();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#contact" || window.location.href == "https://alapalooza.github.io/#contact" || window.location.href == "domain.com#contact") {
		displayContact();
	}
	else {
		displayError();
	}
}

function toggleGalleryTextDW() {
	var selected_element = document.getElementById("gallery-info-dw");
	var selected_element2 = document.getElementById("gallery-title-dw");
	
	if(is_dw_text_hidden) {
		selected_element.removeAttribute("hidden");
		selected_element2.removeAttribute("hidden");
		is_dw_text_hidden = false;
	}
	else if(!is_dw_text_hidden) {
		selected_element.setAttribute("hidden", "hidden");
		selected_element2.setAttribute("hidden", "hidden");
		is_dw_text_hidden = true;
	}
}
function toggleGalleryTextFS() {
	var selected_element = document.getElementById("gallery-info-fs");
	var selected_element2 = document.getElementById("gallery-title-fs");
	
	if(is_fs_text_hidden) {
		selected_element.removeAttribute("hidden");
		selected_element2.removeAttribute("hidden");
		is_fs_text_hidden = false;
	}
	else if(!is_fs_text_hidden) {
		selected_element.setAttribute("hidden", "hidden");
		selected_element2.setAttribute("hidden", "hidden");
		is_fs_text_hidden = true;
	}
}
function toggleGalleryTextTD() {
	var selected_element = document.getElementById("gallery-info-td");
	var selected_element2 = document.getElementById("gallery-title-td");
	
	if(is_td_text_hidden) {
		selected_element.removeAttribute("hidden");
		selected_element2.removeAttribute("hidden");
		is_td_text_hidden = false;
	}
	else if(!is_td_text_hidden) {
		selected_element.setAttribute("hidden", "hidden");
		selected_element2.setAttribute("hidden", "hidden");
		is_td_text_hidden = true;
	}
}
function toggleGalleryTextKP() {
	var selected_element = document.getElementById("gallery-info-kp");
	var selected_element2 = document.getElementById("gallery-title-kp");
	
	if(is_kp_text_hidden) {
		selected_element.removeAttribute("hidden");
		selected_element2.removeAttribute("hidden");
		is_kp_text_hidden = false;
	}
	else if(!is_kp_text_hidden) {
		selected_element.setAttribute("hidden", "hidden");
		selected_element2.setAttribute("hidden", "hidden");
		is_kp_text_hidden = true;
	}
}

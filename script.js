const WEBSITE_NAME = "Alapalooza 2022";

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
	
	var page_gallery2018 = document.getElementById("page-gallery-2018");
	page_gallery2018.setAttribute("hidden", "hidden"); 
	
	var page_gallery2019 = document.getElementById("page-gallery-2019");
	page_gallery2019.setAttribute("hidden", "hidden"); 
	
	var page_gallery2021 = document.getElementById("page-gallery-2021");
	page_gallery2021.setAttribute("hidden", "hidden"); 	
	
	var page_gallery2022 = document.getElementById("page-gallery-2022");
	page_gallery2022.setAttribute("hidden", "hidden"); 
	
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
	var image17 = document.getElementById('image-event-details17');
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
	image17.setAttribute("src", "images/event-details/Lake17.jpg");
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
	
	var image1 = document.getElementById('image-ent-dw1');
	var image2 = document.getElementById('image-ent-dw2');
	var image3 = document.getElementById('image-ent-dw3');
	var image4 = document.getElementById('image-ent-dw4');
	var image5 = document.getElementById('image-ent-dw5');
	var image6 = document.getElementById('image-ent-dw6');
	var image7 = document.getElementById('image-ent-dw7');
	var image8 = document.getElementById('image-ent-dw8');
	
	image1.setAttribute("src", "images/entertainment/dylan-wallace/Dylan1.jpg");
	image2.setAttribute("src", "images/entertainment/dylan-wallace/Dylan2.jpg");
	image3.setAttribute("src", "images/entertainment/dylan-wallace/Dylan3.jpg");
	image4.setAttribute("src", "images/entertainment/dylan-wallace/Dylan4.jpg");
	image5.setAttribute("src", "images/entertainment/dylan-wallace/Dylan5.jpg");
	image6.setAttribute("src", "images/entertainment/dylan-wallace/Dylan6.jpg");
	image7.setAttribute("src", "images/entertainment/dylan-wallace/Dylan7.jpg");
	image8.setAttribute("src", "images/entertainment/dylan-wallace/Dylan8.jpg");
	
	
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
	
	image1.setAttribute("src", "images/entertainment/fiddlestix/Fiddlestix1.jpg");
	image2.setAttribute("src", "images/entertainment/fiddlestix/Fiddlestix2.jpg");
	image3.setAttribute("src", "images/entertainment/fiddlestix/Fiddlestix3.jpg");
	image4.setAttribute("src", "images/entertainment/fiddlestix/Fiddlestix4.jpg");
	image5.setAttribute("src", "images/entertainment/fiddlestix/Fiddlestix5.jpg");
	image6.setAttribute("src", "images/entertainment/fiddlestix/Fiddlestix6.jpg");
	image7.setAttribute("src", "images/entertainment/fiddlestix/Fiddlestix7.jpg");
	image8.setAttribute("src", "images/entertainment/fiddlestix/Fiddlestix8.jpg");
	image9.setAttribute("src", "images/entertainment/fiddlestix/Fiddlestix9.jpg");
	image10.setAttribute("src", "images/entertainment/fiddlestix/Fiddlestix10.jpg");
	image11.setAttribute("src", "images/entertainment/fiddlestix/Fiddlestix11.jpg");
	image12.setAttribute("src", "images/entertainment/fiddlestix/Fiddlestix12.jpg");
	
	var image1 = document.getElementById('image-ent-td1');
	var image2 = document.getElementById('image-ent-td2');
	var image3 = document.getElementById('image-ent-td3');
	var image4 = document.getElementById('image-ent-td4');
	var image5 = document.getElementById('image-ent-td5');
	var image6 = document.getElementById('image-ent-td6');
	var image7 = document.getElementById('image-ent-td7');
	
	image1.setAttribute("src", "images/entertainment/the-duomatics/Duomatics1.jpg");
	image2.setAttribute("src", "images/entertainment/the-duomatics/Duomatics2.jpg");
	image3.setAttribute("src", "images/entertainment/the-duomatics/Duomatics3.jpg");
	image4.setAttribute("src", "images/entertainment/the-duomatics/Duomatics4.jpg");
	image5.setAttribute("src", "images/entertainment/the-duomatics/Duomatics5.jpg");
	image6.setAttribute("src", "images/entertainment/the-duomatics/Duomatics6.jpg");
	image7.setAttribute("src", "images/entertainment/the-duomatics/Duomatics7.jpg");
	
	var image1 = document.getElementById('image-ent-kp1');
	var image2 = document.getElementById('image-ent-kp2');
	var image3 = document.getElementById('image-ent-kp3');
	var image4 = document.getElementById('image-ent-kp4');
	var image5 = document.getElementById('image-ent-kp5');
	var image6 = document.getElementById('image-ent-kp6');
	var image7 = document.getElementById('image-ent-kp7');
	var image8 = document.getElementById('image-ent-kp8');
	var image9 = document.getElementById('image-ent-kp9');
	var image10 = document.getElementById('image-ent-kp10');
	var image11 = document.getElementById('image-ent-kp11');
	
	image1.setAttribute("src", "images/entertainment/kristen-prince/KP1.jpg");
	image2.setAttribute("src", "images/entertainment/kristen-prince/KP2.jpg");
	image3.setAttribute("src", "images/entertainment/kristen-prince/KP3.jpg");
	image4.setAttribute("src", "images/entertainment/kristen-prince/KP4.jpg");
	image5.setAttribute("src", "images/entertainment/kristen-prince/KP5.jpg");
	image6.setAttribute("src", "images/entertainment/kristen-prince/KP6.jpg");
	image7.setAttribute("src", "images/entertainment/kristen-prince/KP7.jpg");
	image8.setAttribute("src", "images/entertainment/kristen-prince/KP8.jpg");
	image9.setAttribute("src", "images/entertainment/kristen-prince/KP9.jpg");
	image10.setAttribute("src", "images/entertainment/kristen-prince/KP10.jpg");
	image11.setAttribute("src", "images/entertainment/kristen-prince/KP11.jpg");

}

function displayMerchandise() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Tickets and Merchandise";	
	var current_page = document.getElementById("page-merchandise");
	current_page.removeAttribute("hidden"); 
	
	
	var image1 = document.getElementById('image-merch1');
	var image2 = document.getElementById('image-merch2');
	var image3 = document.getElementById('image-merch3');
	var image4 = document.getElementById('image-merch4');
	
	image1.setAttribute("src", "images/merchandise/Alapalooza-Logo-Front.jpg");
	image2.setAttribute("src", "images/merchandise/Alapalooza-Logo-Back.jpg");
	image3.setAttribute("src", "images/merchandise/Alapalooza_Koozie_TNT_Mockup_June14-2022.jpg");
	image4.setAttribute("src", "images/merchandise/Alapalooza_T_TNT_Mockup_June14-2022.jpg");

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
	image10.setAttribute("src", "images/sponsors/McComb-Consulting.png");
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
	
	var image1 = document.getElementById('image-2018-gallery1');
	var image2 = document.getElementById('image-2018-gallery2');
	var image3 = document.getElementById('image-2018-gallery3');
	var image4 = document.getElementById('image-2018-gallery5');
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
	var image4 = document.getElementById('image-2019-gallery5');
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
	var image40 = document.getElementById('image-2019-gallery50');
	var image41 = document.getElementById('image-2019-gallery51');
	var image42 = document.getElementById('image-2019-gallery52');
	var image43 = document.getElementById('image-2019-gallery53');
	var image44 = document.getElementById('image-2019-gallery54');
	var image45 = document.getElementById('image-2019-gallery55');
	var image46 = document.getElementById('image-2019-gallery56');
	var image47 = document.getElementById('image-2019-gallery57');
	var image48 = document.getElementById('image-2019-gallery58');
	var image49 = document.getElementById('image-2019-gallery59');
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

function displayGallery2021() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Alapalooza 2021";
	var current_page = document.getElementById("page-gallery-2021");
	current_page.removeAttribute("hidden"); 
	
	var image1 = document.getElementById('image-2021-gallery1');
	var image2 = document.getElementById('image-2021-gallery2');
	var image3 = document.getElementById('image-2021-gallery3');
	var image4 = document.getElementById('image-2021-gallery5');
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
	var image4 = document.getElementById('image-2022-gallery5');
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
	var image40 = document.getElementById('image-2022-gallery50');
	var image41 = document.getElementById('image-2022-gallery51');
	var image42 = document.getElementById('image-2022-gallery52');
	var image43 = document.getElementById('image-2022-gallery53');
	var image44 = document.getElementById('image-2022-gallery54');
	var image45 = document.getElementById('image-2022-gallery55');
	var image46 = document.getElementById('image-2022-gallery56');
	var image47 = document.getElementById('image-2022-gallery57');
	var image48 = document.getElementById('image-2022-gallery58');
	var image49 = document.getElementById('image-2022-gallery59');	
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
	
	
	image1.setAttribute("src", "images/gallery-2022/2022-1.jpg");
	image2.setAttribute("src", "images/gallery-2022/2022-2.jpg");
	image3.setAttribute("src", "images/gallery-2022/2022-3.jpg");
	image4.setAttribute("src", "images/gallery-2022/2022-4.jpg");
	image5.setAttribute("src", "images/gallery-2022/2022-5.jpg");
	image6.setAttribute("src", "images/gallery-2022/2022-6.jpg");
	image7.setAttribute("src", "images/gallery-2022/2022-7.jpg");
	image8.setAttribute("src", "images/gallery-2022/2022-8.jpg");
	image9.setAttribute("src", "images/gallery-2022/2022-9.jpg");
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
	else if(window.location.href == INDEX_HTML_PATH + "#gallery-2018" || window.location.href == "https://alapalooza.github.io/#gallery-2018" || window.location.href == "domain.com#gallery-2018"){
		displayGallery5018();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#gallery-2019" || window.location.href == "https://alapalooza.github.io/#gallery-2019" || window.location.href == "domain.com#gallery-2019"){
		displayGallery5019();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#gallery-2021" || window.location.href == "https://alapalooza.github.io/#gallery-2021" || window.location.href == "domain.com#gallery-2021"){
		displayGallery5021();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#contact" || window.location.href == "https://alapalooza.github.io/#contact" || window.location.href == "domain.com#contact") {
		displayContact();
	}
	else {
		displayError();
	}
}

function toggleGalleryTextTBB() {
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

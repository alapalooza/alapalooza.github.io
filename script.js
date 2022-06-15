const WEBSITE_NAME = "Alapalooza 2022";

const INDEX_HTML_PATH = "file:///D:/Dev/alapalooza/index.html"

var is_tbb_text_hidden = false;
var is_coth_text_hidden = false;
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
	
	var page_contact = document.getElementById("page-contact");
	page_contact.setAttribute("hidden", "hidden");

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
	
	image1.setAttribute("src", "images/event-details/Lake1.jpg");
	image2.setAttribute("src", "images/event-details/Lake2.jpg");
	image3.setAttribute("src", "images/event-details/Lake3.jpg");
	image4.setAttribute("src", "images/event-details/Lake4.jpg");
	image5.setAttribute("src", "images/event-details/Lake5.jpg");
	image6.setAttribute("src", "images/event-details/Lake6.jpg");
	image7.setAttribute("src", "images/event-details/Lake7.jpg");
	image8.setAttribute("src", "images/event-details/Lake8.jpg");

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
	
	image1.setAttribute("src", "images/vip/VIP1.jpg");
	image2.setAttribute("src", "images/vip/VIP2.jpg");
	image3.setAttribute("src", "images/vip/VIP3.jpg");
	image4.setAttribute("src", "images/vip/VIP4.jpg");
	image5.setAttribute("src", "images/vip/VIP5.jpg");
	image6.setAttribute("src", "images/vip/VIP6.jpg");
	image7.setAttribute("src", "images/vip/VIP7.jpg");
	image8.setAttribute("src", "images/vip/VIP8.jpg");
	image9.setAttribute("src", "images/vip/VIP9.jpg");
}

function displayEntertainment() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Live Entertainment";
	var current_page = document.getElementById("page-entertainment");
	current_page.removeAttribute("hidden"); 
	
	var image1 = document.getElementById('image-ent-tbb1');
	var image2 = document.getElementById('image-ent-tbb2');
	var image3 = document.getElementById('image-ent-tbb3');
	var image4 = document.getElementById('image-ent-tbb4');
	var image5 = document.getElementById('image-ent-tbb5');
	var image6 = document.getElementById('image-ent-tbb6');
	var image7 = document.getElementById('image-ent-tbb7');
	var image8 = document.getElementById('image-ent-tbb8');
	var image9 = document.getElementById('image-ent-tbb9');
	var image10 = document.getElementById('image-ent-tbb10');
	var image11 = document.getElementById('image-ent-tbb11');
	var image12 = document.getElementById('image-ent-tbb12');
	var image13 = document.getElementById('image-ent-tbb13');
	var image14 = document.getElementById('image-ent-tbb14');
	
	image1.setAttribute("src", "images/entertainment/tom-barlow/Barlow1.jpg");
	image2.setAttribute("src", "images/entertainment/tom-barlow/Barlow2.jpg");
	image3.setAttribute("src", "images/entertainment/tom-barlow/Barlow3.jpg");
	image4.setAttribute("src", "images/entertainment/tom-barlow/Barlow4.jpg");
	image5.setAttribute("src", "images/entertainment/tom-barlow/Barlow5.jpg");
	image6.setAttribute("src", "images/entertainment/tom-barlow/Barlow6.jpg");
	image7.setAttribute("src", "images/entertainment/tom-barlow/Barlow7.jpg");
	image8.setAttribute("src", "images/entertainment/tom-barlow/Barlow8.jpg");
	image9.setAttribute("src", "images/entertainment/tom-barlow/Barlow9.jpg");
	image10.setAttribute("src", "images/entertainment/tom-barlow/Barlow10.jpg");
	image11.setAttribute("src", "images/entertainment/tom-barlow/Barlow11.jpg");
	image12.setAttribute("src", "images/entertainment/tom-barlow/Barlow12.jpg");
	image13.setAttribute("src", "images/entertainment/tom-barlow/Barlow13.jpg");
	image14.setAttribute("src", "images/entertainment/tom-barlow/Barlow14.jpg");
	
	
	var image1 = document.getElementById('image-ent-coth1');
	var image2 = document.getElementById('image-ent-coth2');
	var image3 = document.getElementById('image-ent-coth3');
	var image4 = document.getElementById('image-ent-coth4');
	var image5 = document.getElementById('image-ent-coth5');
	var image6 = document.getElementById('image-ent-coth6');
	var image7 = document.getElementById('image-ent-coth7');
	var image8 = document.getElementById('image-ent-coth8');
	var image9 = document.getElementById('image-ent-coth9');
	
	image1.setAttribute("src", "images/entertainment/compliments/Compliments1.jpg");
	image2.setAttribute("src", "images/entertainment/compliments/Compliments2.jpg");
	image3.setAttribute("src", "images/entertainment/compliments/Compliments3.jpg");
	image4.setAttribute("src", "images/entertainment/compliments/Compliments4.jpg");
	image5.setAttribute("src", "images/entertainment/compliments/Compliments5.jpg");
	image6.setAttribute("src", "images/entertainment/compliments/Compliments6.jpg");
	image7.setAttribute("src", "images/entertainment/compliments/Compliments7.jpg");
	image8.setAttribute("src", "images/entertainment/compliments/Compliments8.jpg");
	image9.setAttribute("src", "images/entertainment/compliments/Compliments9.jpg");

	var image1 = document.getElementById('image-ent-tmf1');
	var image2 = document.getElementById('image-ent-tmf2');
	var image3 = document.getElementById('image-ent-tmf3');
	var image4 = document.getElementById('image-ent-tmf4');
	var image5 = document.getElementById('image-ent-tmf5');
	
	image1.setAttribute("src", "images/entertainment/the-mighty-fish/Fish1.jpg");
	image2.setAttribute("src", "images/entertainment/the-mighty-fish/Fish2.jpg");
	image3.setAttribute("src", "images/entertainment/the-mighty-fish/Fish3.jpg");
	image4.setAttribute("src", "images/entertainment/the-mighty-fish/Fish4.jpg");
	image5.setAttribute("src", "images/entertainment/the-mighty-fish/Fish5.jpg");
	
	var image1 = document.getElementById('image-ent-td1');
	var image2 = document.getElementById('image-ent-td2');
	var image3 = document.getElementById('image-ent-td3');
	var image4 = document.getElementById('image-ent-td4');
	
	image1.setAttribute("src", "images/entertainment/the-duomatics/Duomatics1.jpg");
	image2.setAttribute("src", "images/entertainment/the-duomatics/Duomatics2.jpg");
	image3.setAttribute("src", "images/entertainment/the-duomatics/Duomatics3.jpg");
	image4.setAttribute("src", "images/entertainment/the-duomatics/Duomatics4.jpg");
	
	var image1 = document.getElementById('image-ent-kp1');
	var image2 = document.getElementById('image-ent-kp2');
	var image3 = document.getElementById('image-ent-kp3');
	var image4 = document.getElementById('image-ent-kp4');
	var image5 = document.getElementById('image-ent-kp5');
	var image6 = document.getElementById('image-ent-kp6');
	var image7 = document.getElementById('image-ent-kp7');
	var image8 = document.getElementById('image-ent-kp8');
	
	image1.setAttribute("src", "images/entertainment/kristen-prince/KP1.jpg");
	image2.setAttribute("src", "images/entertainment/kristen-prince/KP2.jpg");
	image3.setAttribute("src", "images/entertainment/kristen-prince/KP3.jpg");
	image4.setAttribute("src", "images/entertainment/kristen-prince/KP4.jpg");
	image5.setAttribute("src", "images/entertainment/kristen-prince/KP5.jpg");
	image6.setAttribute("src", "images/entertainment/kristen-prince/KP6.jpg");
	image7.setAttribute("src", "images/entertainment/kristen-prince/KP7.jpg");
	image8.setAttribute("src", "images/entertainment/kristen-prince/KP8.jpg");

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
	
	image1.setAttribute("src", "images/sponsors/logo_alt.png");
	image2.setAttribute("src", "images/sponsors/Rave.jpg");
	image3.setAttribute("src", "images/sponsors/TNT.png");
	image4.setAttribute("src", "images/sponsors/hpllogo.gif");
	image5.setAttribute("src", "images/sponsors/Axiom-Audio.jpg");
	image6.setAttribute("src", "images/sponsors/Echelon-Environmental.jpg");
	image7.setAttribute("src", "images/sponsors/Lake-Life-Leisure.jpg");
	image8.setAttribute("src", "images/sponsors/Cleaning-Central.jpg");
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
		displayGallery4018();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#gallery-2019" || window.location.href == "https://alapalooza.github.io/#gallery-2019" || window.location.href == "domain.com#gallery-2019"){
		displayGallery4019();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#gallery-2021" || window.location.href == "https://alapalooza.github.io/#gallery-2021" || window.location.href == "domain.com#gallery-2021"){
		displayGallery4021();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#contact" || window.location.href == "https://alapalooza.github.io/#contact" || window.location.href == "domain.com#contact") {
		displayContact();
	}
	else {
		displayError();
	}
}

function toggleGalleryTextTBB() {
	var selected_element = document.getElementById("gallery-info-tbb");
	var selected_element2 = document.getElementById("gallery-title-tbb");
	
	if(is_tbb_text_hidden) {
		selected_element.removeAttribute("hidden");
		selected_element2.removeAttribute("hidden");
		is_tbb_text_hidden = false;
	}
	else if(!is_tbb_text_hidden) {
		selected_element.setAttribute("hidden", "hidden");
		selected_element2.setAttribute("hidden", "hidden");
		is_tbb_text_hidden = true;
	}
}
function toggleGalleryTextCOTH() {
	var selected_element = document.getElementById("gallery-info-coth");
	var selected_element2 = document.getElementById("gallery-title-coth");
	
	if(is_coth_text_hidden) {
		selected_element.removeAttribute("hidden");
		selected_element2.removeAttribute("hidden");
		is_coth_text_hidden = false;
	}
	else if(!is_coth_text_hidden) {
		selected_element.setAttribute("hidden", "hidden");
		selected_element2.setAttribute("hidden", "hidden");
		is_coth_text_hidden = true;
	}
}
function toggleGalleryTextTMF() {
	var selected_element = document.getElementById("gallery-info-tmf");
	var selected_element2 = document.getElementById("gallery-title-tmf");
	
	if(is_tmf_text_hidden) {
		selected_element.removeAttribute("hidden");
		selected_element2.removeAttribute("hidden");
		is_tmf_text_hidden = false;
	}
	else if(!is_tmf_text_hidden) {
		selected_element.setAttribute("hidden", "hidden");
		selected_element2.setAttribute("hidden", "hidden");
		is_tmf_text_hidden = true;
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

var override_caption = false;
var has_clicked = false;

// default CSS from bodecker-me.css (initialized via readCSS())
var msg_css_hidden = [];
var icon_css_hidden = [];

// CSS to set on click
var msg_css_visible = [
	["visibility", "visible"]
];
var icon_css_visible = [
	["border-top-right-radius", "0em"],
	["border-top-left-radius","0em"],
	["opacity","0.7"]
];

$(document).ready(function(){
	readCSS();
	$(".caption-icon").hover(hoverEnter, hoverExit);
	$(".caption-icon").click(captionClick);
	$(".caption-msg").click(captionClick);
});

// read default CSS values
function readCSS() {
	var i;
	for(i = 0; i < msg_css_visible.length; i++) {
		var property = msg_css_visible[i][0];
		msg_css_hidden.push( [property, $(".caption-msg").css(property)] );
	}
	for(i = 0; i < icon_css_visible.length; i++) {
		var property = icon_css_visible[i][0];
		icon_css_hidden.push( [property, $(".caption-icon").css(property)] );
	}
}

// called when mouse hovers over caption icon
function hoverEnter() {
	if(!override_caption) {
		showCaption();
	}
}

// called when mouse leaves caption icon
function hoverExit() {
	// if we were overriding
	if(override_caption) {
		// if the caption is not visible, stop overriding
		if($(".caption-msg").css("visibility") != "visible") {
			override_caption = false;
		}
		// if the caption is still visibile, continure overriding
	}
	// else, we are not overriding, so we can hide the caption
	else {
		// only hide the caption if it's visible
		if($(".caption-msg").css("visibility") == "visible") {
			hideCaption();
		}
	}
	has_clicked = false;	// set has_clicked to false for next hover
}

// sets caption to be visible
function showCaption() {
	var prop_val;
	for(i = 0; i < msg_css_visible.length; i++) {
		prop_val = msg_css_visible[i];
		$(".caption-msg").css(prop_val[0],prop_val[1]);
	}
	for(i = 0; i < icon_css_visible.length; i++) {
		prop_val = icon_css_visible[i];
		$(".caption-icon").css(prop_val[0],prop_val[1]);
	}
}

// sets caption to be hidden
function hideCaption() {
	var prop_val;
	for(i = 0; i < msg_css_hidden.length; i++) {
		prop_val = msg_css_hidden[i];
		$(".caption-msg").css(prop_val[0],prop_val[1]);
	}
	for(i = 0; i < icon_css_hidden.length; i++) {
		prop_val = icon_css_hidden[i];
		$(".caption-icon").css(prop_val[0],prop_val[1]);
	}
}

// called when caption clicked
function captionClick() {
	// if we haven't clicked yet
	if(!has_clicked) {
		has_clicked = true;				// record click
		if(!override_caption)			// if we're not currently overriding,
			override_caption = true;	//		start overriding
		else							// else, we are overriding
			hideCaption();				//		hide the caption (since first click this hover)
	}
	else {
		toggleCaption();				// else, we've been clicking for some time, so toggle
	}
}

// toggles caption message visibility
function toggleCaption() {
	if($(".caption-msg").css("visibility") != "visible")
		showCaption();
	else
		hideCaption();
}

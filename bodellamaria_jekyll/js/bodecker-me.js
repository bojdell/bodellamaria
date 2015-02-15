var override_caption = false;

// default CSS from bodecker-me.css (initialized via readCSS())
var msg_css_hidden = [];
var icon_css_hidden = [];

// CSS to set on click
var msg_css_visible = [
	["visibility", "visible"]
];
var icon_css_visible = [
	["border-top-right-radius", "0em"]
];

$(document).ready(function(){
	readCSS();
	$(".caption-icon").hover(showCaption, hideCaption);
	$(".caption-icon").click(overrideCaption);
	$(".caption-msg").click(overrideCaption);
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
		icon_css_hidden.push( [property, $(".caption-msg").css(property)] );
	}
}

function showCaption() {
	if(!override_caption) {
		$(".caption-msg").css("visibility","visible");
		$(".caption-icon").css("border-top-right-radius","0em");
		$(".caption-icon").css("border-top-left-radius","0em");
		$(".caption-icon").css("opacity",".8");
	}
}

function hideCaption() {
	if(!override_caption) {
		$(".caption-msg").css("visibility","hidden");
		$(".caption-icon").css("border-top-right-radius","0.5em");
		$(".caption-icon").css("border-top-left-radius","0.5em");
	}
}

function overrideCaption() {
	override_caption = !override_caption;
	hideCaption();		// does nothing if override_caption is set
}
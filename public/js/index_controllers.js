var $grid = $('.grid');
var c = 13;
var r = 11;

// $.each($grid.children('.gridItem'), function(i, val) {
// 	$.data(val, 'grid-columns', c);
// 	$.data(val, 'grid-rows', r+2*i);
// 	console.log(val);
// });

$grid.cloudGrid({
    gridSize: 10,
    gridGutter: 13,
    children: $grid.children('.gridItem')
});

$(window).on('resize', function() {
	$grid.cloudGrid('reflowContent');
})

function QODController($scope) {
    $scope.quote = "Far better is it to dare mighty things, to win glorious triumphs, even though checkered by failure... than to rank with those poor spirits who neither enjoy nor suffer much, because they live in a gray twilight that knows not victory nor defeat.";
    $scope.person = "Theodore Roosevelt"
    $scope.source = "http://www.brainyquote.com/quotes/quotes/t/theodorero103499.html"
}
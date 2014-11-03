var $grid = null;
var gridUnitSize = 10;
var gutterSize = 13;
var defaultColumnSize = 12;
var k = 1;
var minRows = 6;

$(window).on('resize', function() {
	$grid.cloudGrid('reflowContent');
})

var quotesApp = angular.module('quotesApp', []);
quotesApp.directive('onRepeat', function() {
    return function(scope, element, attrs) {
        if (scope.$last) setTimeout( function() {
            scope.$emit('updateCloudgrid', element, attrs);
        }, 1);
    }
});

quotesApp.controller('QuotesCtrl', function ($scope, $http) {
	$scope.gridSize = gridUnitSize;
	$scope.gridGutter = gutterSize;
	$scope.defaultColSize = defaultColumnSize;

	$scope.getRows = getRows;

	var res = $http.get("http://bodecker.me/api/quotes");

    res.success(function(data, status, headers, config) {
        $scope.quotes = data;
        // $scope.quotes.push({"_id":"543da325e7b6b9f9751ad2ae","text":"Far better is it to dare mighty things, to win glorious triumphs, even though checkered by failure... than to rank with those poor spirits who neither enjoy nor suffer much, because they live in a gray twilight that knows not victory nor defeat.Far better is it to dare mighty things, to win glorious triumphs, even though checkered by failure... than to rank with those poor spirits who neither enjoy nor suffer much, because they live in a gray twilight that knows not victory nor defeat.Far better is it to dare mighty things, to win glorious triumphs, even though checkered by failure... than to rank with those poor spirits who neither enjoy nor suffer much, because they live in a gray twilight that knows not victory nor defeat.Far better is it to dare mighty things, to win glorious triumphs, even though checkered by failure... than to rank with those poor spirits who neither enjoy nor suffer much, because they live in a gray twilight that knows not victory nor defeat.Far better is it to dare mighty things, to win glorious triumphs, even though checkered by failure... than to rank with those poor spirits who neither enjoy nor suffer much, because they live in a gray twilight that knows not victory nor defeat.","person":"Theodore Roosevelt","source":"http://www.brainyquote.com/quotes/quotes/t/theodorero103499.html"});
        // $scope.quotes.push({"_id":"543da325e7b6b9f9751ad2ae","text":"Far better is it to dare mighty things, to win glorious triumphs, even though checkered by failure... than to rank with those poor spirits who neither enjoy nor suffer much, because they live in a gray twilight that knows not victory nor defeat.","person":"Theodore Roosevelt","source":"http://www.brainyquote.com/quotes/quotes/t/theodorero103499.html"});
        // $scope.quotes.push({"_id":"543da325e7b6b9f9751ad2ae","text":"Far better is it to dare mighty things, to win glorious triumphs, even though checkered by failure... than to rank with those poor spirits who neither enjoy nor suffer much, because they live in a gray twilight that knows not victory nor defeat.","person":"Theodore Roosevelt","source":"http://www.brainyquote.com/quotes/quotes/t/theodorero103499.html"});
    });
	res.error(function(data, status, headers, config) {
        alert("Quotes AJAX failed");
    });

    $scope.$on('updateCloudgrid', function(scope, element, attrs){
    	console.log("update");
    	console.log($scope.quotes);
    	console.log($('.grid'));
    	refreshGrid();
	});
});

function getRows(textLen) {
	return Math.max(minRows, Math.trunc(textLen * k / defaultColumnSize));
}

function refreshGrid() {
	$grid = $('.grid');
	$grid.cloudGrid({
	    gridSize: gridUnitSize,
	    gridGutter: gutterSize,
	    children: $grid.children('.gridItem')
	});
}

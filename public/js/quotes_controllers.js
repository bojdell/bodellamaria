function QuotesController($scope) {
    $scope.quotes = $http.get("http://bodecker.me/api/quotes");
    // $scope.quotes = [{"_id":"543da325e7b6b9f9751ad2ae","text":"Far better is it to dare mighty things, to win glorious triumphs, even though checkered by failure... than to rank with those poor spirits who neither enjoy nor suffer much, because they live in a gray twilight that knows not victory nor defeat.","person":"Theodore Roosevelt","source":"http://www.brainyquote.com/quotes/quotes/t/theodorero103499.html"},{"_id":"543da412e7b6b9f9751ad2af","text":"This is your life and it's ending one minute at a time.","person":"Tyler Durden","source":"https://chrome.google.com/webstore/detail/news-feed-eradicator-for/fjcldmjmjhkklehbacihaiopjklihlgg?hl=en"}];
}

// var $grid = $('.grid');
// $grid.cloudGrid({
//     gridSize: 60,
//     gridGutter: 13,
//     children: $grid.children('.gridItem')
// });
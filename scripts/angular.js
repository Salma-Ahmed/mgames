var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    $http.get('https://api.myjson.com/bins/l9pn3')
        .then(function (response) {
            $scope.categories = response.data;
            $scope.quantity = 10;
            $scope.id = "rate";
        });
});

// directive for rateYo plugin
app.directive("rateYo", function () {
    return {
        scope: {
            rating: "="
        },
        restrict: "E",
        template: "<div class='rateYo'></div>",
        link: function (scope, ele, attrs) {
            $(ele).rateYo({
                rating: scope.rating,
                starWidth: "15px",
                ratedFill: "#777776",
                normalFill: "#e1e1e1",
                spacing: "5px",
                readOnly: true
            });
        },
    }
});
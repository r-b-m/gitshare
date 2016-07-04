var app = angular.module('rbm', [
    'ngRoute', 'ngAnimate'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        // Home
        .when("/", {templateUrl: "partials/numbrite-valik.html", controller: "PageCtrl"})

        // Pages
        .when("/mahu-valik", {templateUrl: "partials/mahu-valik.html", controller: "PageCtrl"})
        .when("/tellimus", {templateUrl: "partials/tellimus.html", controller: "PageCtrl"})

        // else 404
        .otherwise("/", {templateUrl: "partials/numbrite-valik.html", controller: "PageCtrl"});


}]);


app.controller('PageCtrl', function ($scope/*, $location, $http */) {
    console.log("Page Controller reporting for duty.");
    $scope.pageClass = 'page-effect';
    $scope.select = function (index) {
        $scope.selected = index;
    };


});


app.controller("con", function ($scope) {
    $scope.FirstClass = "icon-number-one";
    $scope.changeClassFirst = function () {
        if ($scope.FirstClass === "icon-number-one")
            $scope.FirstClass = "icon-basic-tick step-done",
                $scope.Current = "current-page";
        else
            $scope.FirstClass = "icon-basic-tick step-done";
    };
    $scope.SecondClass = "icon-number-two";
    $scope.changeClassSecond = function () {
        if ($scope.SecondClass === "icon-number-two")
            $scope.SecondClass = "icon-basic-tick step-done",
                $scope.CurrentSecond = "current-page";
        else
            $scope.SecondClass = "icon-basic-tick step-done";
    };
    $scope.ThirdClass = "icon-number-three";
    $scope.changeClassThird = function () {
        if ($scope.ThirdClass === "icon-number-three")
            $scope.ThirdClass = "icon-basic-tick step-done";
        else
            $scope.ThirdClass = "icon-basic-tick step-done";
    };
});


var checkboxes = $("input[type='checkbox']"),
    submitButt = $("input[type='submit']");

checkboxes.click(function () {
    submitButt.attr("disabled", !checkboxes.is(":checked"));
});


//disabling step-back
window.location.href = "#/numbrite-valik";
window.onpopstate = function (e) {
    window.history.forward(1);
};
window.onhashchange = function (e) {
    window.history.forward(1);
};










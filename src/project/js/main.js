$(document).ready(function () {
    $("#carousel-example-generic").swiperight(function () {
        $("#carousel-example-generic").carousel('prev');
    });
    $("#carousel-example-generic").swipeleft(function () {
        $("#carousel-example-generic").carousel('next');
    });
});

function svgasimg() {
    return document.implementation.hasFeature(
        "http://www.w3.org/TR/SVG11/feature#Image", "1.1");
}

if (!svgasimg()) {
    var e = document.getElementsByTagName("img");
    if (!e.length) {
        e = document.getElementsByTagName("IMG");
    }
    for (var i = 0, n = e.length; i < n; i++) {
        var img = e[i],
            src = img.getAttribute("src");
        if (src.match(/svgz?$/)) {
            /* URL ends in svg or svgz */
            img.setAttribute("src",
                img.getAttribute("data-fallback"));
        }
    }
}
function showHide(shID) {
    if (document.getElementById(shID)) {
        if (document.getElementById(shID + '-show').style.display != 'none') {
            document.getElementById(shID + '-show').style.display = 'none';
            document.getElementById(shID).style.display = 'block';
        }
        else {
            document.getElementById(shID + '-show').style.display = 'inline';
            document.getElementById(shID).style.display = 'none';
        }
    }
}
$(document).ready(
    function () {
        $("#show").click(function () {
            $(".more").fadeToggle();
        });
    });
$('.carousel').carousel({
    interval: 5000 //changes the speed
});


$(function () {
    // Remove Search if user Resets Form or hits Escape!
    $('body, .navbar-collapse form[role="search"] button[type="reset"]').on('click keyup', function (event) {
        console.log(event.currentTarget);
        if (event.which == 27 && $('.navbar-collapse form[role="search"]').hasClass('active') ||
            $(event.currentTarget).attr('type') == 'reset') {
            closeSearch();
        }
    });

    function closeSearch() {
        var $form = $('.navbar-collapse form[role="search"].active')
        $form.find('input').val('');
        $form.removeClass('active');
    }

    // Show Search if form is not active // event.preventDefault() is important, this prevents the form from submitting
    $(document).on('click', '.navbar-collapse form[role="search"]:not(.active) button[type="submit"]', function (event) {
        event.preventDefault();
        var $form = $(this).closest('form'),
            $input = $form.find('input');
        $form.addClass('active');
        $input.focus();

    });
    // ONLY FOR DEMO // Please use $('form').submit(function(event)) to track from submission
    // if your form is ajax remember to call `closeSearch()` to close the search container
    $(document).on('click', '.navbar-collapse form[role="search"].active button[type="submit"]', function (event) {
        event.preventDefault();
        var $form = $(this).closest('form'),
            $input = $form.find('input');
        $('#showSearchTerm').text($input.val());
        closeSearch()
    });
});
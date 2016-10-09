<!doctype html>
<html lang="en">
<head>
    <?php require_once('head.php') ?>
</head>
<body>

<div id="fullpage">
    <div class="section home-page" id="page-home" >
        <div class="container">
            <!-- <img class="bg hidden-xs floating" src="../img/boat-drawing-fallback.png" alt="">
            <img class="water-float hidden-xs visible-lg visible-md" src="../img/water3.png" alt="">
            <img class="bg visible-xs" src="../img/boat-drawing-fallback.png" alt="">
            <img class="water-float visible-xs visible-sm hidden-md hidden-lg" src="../img/water2.png" alt=""> -->


            <h1>CSS3 FILTER</h1>
            <ul class="menu list-inline list-unstyled hidden-xs">
                <li><a href="#home">Avaleht</a></li>
                <li><a href="#building">Hõljumise Mõju</a></li>
                <li><a href="#restoration">Halltoonides</a></li>
                <li><a href="#partners">Skaleeritav Vektorgraafika</a></li>
            </ul>
            <a href="#" onclick="$.fn.fullpage.moveSectionDown();return false;" id="next-page" class="page-next">
                <span class="icon icon-arrow-down"></span>
            </a>

            <a href="#" onclick="$('.mobile-menu').fadeIn(); return false;" class="home-mobile-menu visible-xs"><span class="menu-toggle"></span></a>
        </div>
    </div>
    <div class="section" id="page-page1" >
        <div class="slide bg slide1" id="page1-slide1">
            <div class="container">
                <div class="content center-content">
                    <h1>HÕLJUMISE MÕJU</h1>

                    <p>
                        Kasutasin nendes vaadates css filtreid.
                    </p>

                    <a href="#" class="btn btn-spy light" onclick="$.fn.fullpage.moveSlideRight();return false;">Vaata
                        Galerii
                        <span class="icon icon-arrow-right"></span></a>
                </div>
            </div>
        </div>
        <div class="slide bg slid2" id="page1-slide2">
          <i class="smile"></i>

        </div>
        <div class="slide bg slide3" id="page1-slide3">

        </div>
        <div class="slide bg slide4" id="page1-slide4">

        </div>
        <div class="slide bg slide5" id="page1-slide5">

        </div>
        <div class="slide bg slide6" id="page1-slide6">

        </div>
    </div>
    <div class="section" id="page-page2" >
        <div class="slide bg slide1" id="page2-slide1">
            <div class="container">
                <div class="content dark center-content">
                    <h1>HALLTOONIDES</h1>
                    <p>Kasitasin css3 animatsioonid</p>
                    <a href="#" class="btn btn-spy dark" onclick="$.fn.fullpage.moveSlideRight();return false;">Vaata Galerii <span class="icon icon-arrow-right"></span></a>
                </div>
            </div>
        </div>
        <div class="slide bg slide2" id="page2-slide2"></div>
        <div class="slide" id="page2-slide3">
            <div class="video-container"><div id="yt-video1"></div></div>
             <div class="video-container"><iframe src="https://www.youtube.com/embed/FwHB7BXOLMk" frameborder="0" allowfullscreen></iframe></div>
        </div>
    </div>


    <div class="section" id="page-partners" >
        <div class="container bg partners-page">
            <div class="content dark no-padding bw-list">
                <h1>SKALEERITAV VEKTORGRAAFIKA</h1>
                <ul class="list-unstyled list-inline partner-list">
                    <li>
                        <a href="#" target="_blank">
                            <img class="img-responsive" src="" alt="">
                            <span>img1</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <img class="img-responsive" src="" alt="">
                            <span>img2</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <img class="img-responsive" src="" alt="">
                            <span>img3</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <img class="img-responsive" src="" alt="">
                            <span>img4</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <img class="img-responsive" src="" alt="">
                            <span>img5</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="section" id="page-contact" >
        <div class="container bg">
            <div class="row">

                </div>
            </div>
        </div>
    </div>
</div>
    <div class="mobile-menu">
        <a href="#" class="close-menu" onclick="$('.mobile-menu').fadeOut(); return false;"><span class="icon icon-close"></span></a>
        <ul class="list-unstyled">
            <li>
                <a href="#home">Avaleht</a>
            </li>
            <li>
                <a href="#building">Hõljumise Mõju</a>
            </li>
            <li>
                <a href="#restoration">Halltoonides</a>
            </li>
            <li>
                <a href="#partners">Skaleeritav Vektorgraafika</a>
            </li>
        </ul>
    </div>

    <script>
        $('.mobile-menu li a').click(function () {
            $('.mobile-menu').fadeOut();
        });
    </script>

    <ul class="float-menu list-unstyled">
        <li class="pull-left logo">

        </li>

        <li class="pull-right hidden-xs hidden-sm" >
            <a href="#partners">Skaleeritav Vektorgraafika</a>
        </li>

        <li class="pull-right hidden-xs hidden-sm" >
            <a href="#restoration">Halltoonides</a>
        </li>


        <li class="pull-right hidden-xs hidden-sm" >
            <a href="#building">Hõljumise Mõju</a>
        </li>

        <li class="pull-right active  hidden-xs hidden-sm" >
            <a href="#home">Avaleht</a>
        </li>
        <li class="pull-right visible-xs visible-sm" style="padding-top:10px;margin:0;">
            <a href="#" onclick="$('.mobile-menu').fadeIn(); return false;"><span class="menu-toggle"></span></a>
        </li>
    </ul>

    <script>

        $('#fullpage').fullpage({
            anchors:['home', 'building', 'restoration', 'partners', 'contact-us'],
            scrollOverflow: true,
            verticalCentered: false,
            menu: '.float-menu',
            controlArrows: true,
            onLeave: function (index, nextIndex, direction) {
                if (index == 2 && direction =='up') {
                    $.fn.fullpage.moveTo('building', 0);
                }
                if (index == 2 && direction =='down') {
                    $.fn.fullpage.moveTo('building', 0);
                }
                if (index == 3 && direction =='up') {
                    $.fn.fullpage.moveTo('restoration', 0);
                }
                if (index == 3 && direction =='down') {
                    $.fn.fullpage.moveTo('restoration', 0);
                }

                if (nextIndex == 1) {
                    $('.float-menu').fadeOut();
                } else {
                    $('.float-menu').fadeIn();
                }
                try {
                    $.each(players, function (key, player) {
                        player.stopVideo();
                    });
                } catch (err) {
                }
            },
            onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
                if (nextSlideIndex == 0) {
                    $('.fp-controlArrow').fadeOut();
                } else {
                    $('.fp-controlArrow').fadeIn();
                }
                try {
                    $.each(players, function (key, player) {
                        player.stopVideo();
                    });
                } catch (err) {
                }


            }
        });
        $('.fp-controlArrow').fadeOut();
    </script>

    <div style="position: fixed;top:0px;left: 0px;border:1px solid red;color:red;" class="hidden-print">
        <span class="visible-xs">
            xs
        </span>
        <span class="visible-sm">
            sm
        </span>
        <span class="visible-md">
            md
        </span>
        <span class="visible-lg">
            lg
        </span>
    </div>

    <script>
        if (!Modernizr.svgasimg) {
            var imgs = document.getElementsByTagName('img');
            var svgExtension = /.*\.svg$/
            var l = imgs.length;
            for (var i = 0; i < l; i++) {
                if (imgs[i].src.match(svgExtension)) {
                    imgs[i].src = imgs[i].src.slice(0, -4) + '-fallback.png';
                    console.log(imgs[i].src);
                }
            }
        }
    </script>
<script>
    $.fn.fullpage.scrollSlider= function(section, slide){
        var destiny = '';
        if(isNaN(index)) {
            destiny = $('[data-anchor="'+index+'"]');
        } else {
            destiny = $('.section').eq( (index -1) );
        }
        if (isNaN(index) && slide !== 'undefined') {
            scrollPageAndSlide(index, slide);
        } else {
            if (destiny.length > 0) {
                scrollPage(destiny);
            }
        }
    };
</script>

</body>
</html>

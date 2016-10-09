<title>CSS-FILTER</title>
<meta charset="UTF-8">
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0, width=device-width;">
<link href='http://fonts.googleapis.com/css?family=Lato:400,700,300&subset=latin,latin-ext' rel='stylesheet'
      type='text/css'>
<link rel="stylesheet" href="../css/style.min.css?<?php echo filemtime('../css/style.css') ?>">
<!--[if lt IE 9]>

<![endif]-->


<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="../js/scripts.js"></script>

<script>
    // Load the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


    var players = new Array();
    function onYouTubePlayerAPIReady() {
        players[0] = new YT.Player('yt-video1', {
            height: '100%',
            width: '100%',
            videoId: 'FwHB7BXOLMk'
        });

        /*players[1] = new YT.Player('yt-video2', {
            height: '100%',
            width: '100%',
            videoId: '7LnBvuzjpr4'
        });
        players[2] = new YT.Player('yt-video3', {
            height: '100%',
            width: '100%',
            videoId: '316AzLYfAzw'
        });
*/
    }

</script>

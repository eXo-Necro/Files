(function() {
    'use strict';
 
    var style = `
body.efyt-wide-player.viewport:not(.efyt-mini-player) ytd-watch-flexy[theater] #movie_player:not(.ytp-fullscreen) video.html5-main-video, body.efyt-wide-player.viewport:not(.efyt-mini-player) ytd-watch-flexy[theater] #movie_player:not(.ytp-fullscreen) .ytp-iv-video-content {
  width: calc(100vw - 17px) !important;
  left: 0px !important;
  top: 0px !important;
}`;
    var elem = document.createElement('style');
    elem.innerText = style;
    document.head.appendChild(elem);

  window.scroll(0, 56);
})();

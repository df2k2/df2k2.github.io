/*!
 * Videos
 * Depends on the Bootstrap Affix plugin
 * author: ybannykh@magento.com
*/

$(function() {

  var $video = $('.video-player');

  if ( $video.length ) {
    var $videoWrap = $('.video-player-wrap'),
        videoOffsetTop = $video.outerHeight(true) + $video.offset().top;

    $video.affix({
      offset: {
        top: videoOffsetTop,
        bottom: function () {
          return (this.bottom = $('#footer').outerHeight(true))
        }
      }
    });

    $video.on('affix.bs.affix', function () {
      $videoWrap.addClass('embed-responsive-16by9');
    });

    $video.on('affix-top.bs.affix', function () {
      $videoWrap.removeClass('embed-responsive-16by9');
    });


  }

});

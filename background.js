var moveIn = -185;
var $myImage = $('<div class="javert"><img src="http://i.imgur.com/y5kXW6A.png"></div>');
$('body').append($myImage);
$('.javert').css({
  'position': 'absolute',
  'top': Math.floor(Math.random()*$(window).height()) + 'px',
  'left': '-150px',
  '-webkit-transform': 'rotate(90deg)',
  '-moz-transform': 'rotate(90deg)',
  '-o-transform': 'rotate(90deg)',
  'transform': 'rotate(90deg)'
});

var random = function(){
  if (moveIn<0){  
    moveIn++;
    $('.javert').css({
      'position': 'absolute',
      'left': moveIn + 'px'
    });
  }
}

setInterval(function(){random();}, 100);
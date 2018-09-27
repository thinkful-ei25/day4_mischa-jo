'use strict';

$('main').on('click', '.thumbnails',function(event){
  //$(event.target).remove();
  //$('.hero').append(event.target);
  $('.hero > img').attr('src',event.target.src);
  // console.log(event.target.src);
  //console.log($('.hero > img'));
  $('.hero > img').attr('alt',event.target.alt);
  //console.log($('.hero > img').attr('alt'));
});
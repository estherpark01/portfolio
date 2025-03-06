
var con_top,conright_height,win_width;


setTimeout(function(){
  con_top = $('.sec3 .con2').offset().top;
  conright_height = $('.sec3 .con2 ul .con_right').height()+$('.sec3 .imgbox').height()-350;
  win_width = $(window).width();
  //console.log(con_top);
},100);




$(window).resize(function(){
  con_top = $('.sec3 .con2').offset().top;
  conright_height = $('.sec3 .con2 ul .con_right').height()+$('.sec3 .imgbox').height()-350;
  win_width = $(window).width();

  if(win_width<=1024){
    $('.sec3 .con2 .con_left').removeClass('fix');
    $('.sec3 .con2 ul').css('display','flex');
    $('.sec3 .con2 ul .con_right').css({'position':'static'});
  }
});



$(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  console.log('스크롤 위치:', scroll);
  // console.log('기준점:', con_top);
  if(win_width>1024){
      if (scroll >= con_top && scroll < con_top+conright_height) {
        $('.sec3 .con2 .con_left').addClass('fix');
        $('.sec3 .con2 ul').css('display','block');
        $('.sec3 .con2 ul .con_right').css({
          'position':'relative',
          'right':0,
          'top':0
        });
      } else {
        $('.sec3 .con2 .con_left').removeClass('fix');
        $('.sec3 .con2 ul').css('display','flex');
        $('.sec3 .con2 ul .con_right').css({'position':'static'});
      }  
      
  }
});



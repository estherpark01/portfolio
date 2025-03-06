// JavaScript Document

// $(document).ready(function(){
    var cnt=$('.tab_menu li').size();  //탭메뉴 개수 ***
    $('.tabs li:eq(0)').show(); // 첫번째 탭 내용만 열어라

    $('.tab_menu li:eq(0)').css('background','#0166B1').find('a').css('color','#fff'); //첫번째 탭메뉴 활성화
    $('.tab_menu li:eq(0)').addClass('cur');
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
    $('.tab_menu li').each(function (index) {  // index=0 1 2
      $(this).click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다    

          $(".tabs li").hide(); //모든 탭내용을 안보이게...
          $(".tab_menu li").removeClass('cur');
          $(".tabs li:eq("+index+")").css('display','flex'); //클릭한 해당 탭내용만 보여라
          $('.tab_menu li').css('background','none').find('a').css('color','#333'); //모든 탭메뉴를 비활성화
          $(this).css('background','#0166B1').find('a').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화
          $(this).addClass('cur');

     });
    });


    $('.tab_menu li').hover(function(){
       if(!$(this).hasClass('cur')){
          $(this).css('background','#0166B1').find('a').css('color','#fff'); 
       }
    },function(){
      if(!$(this).hasClass('cur')){
       $(this).css('background','none').find('a').css('color','#333');
      }
    });


  // });


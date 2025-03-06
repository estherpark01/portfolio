// JavaScript Document

$(document).ready(function(){
    var cnt=$('.content_area .progress .tab_menu li').size();  //탭메뉴 개수 ***
    $('.content_area .progress .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
    $('.content_area .progress .tab1').css('background','#B8A080').css('color','#fff'); //첫번째 탭메뉴 활성화
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
    $('.content_area .progress .tab').each(function (index) {  // index=0 1 2
      $(this).click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다    

          
          $(".content_area .progress .contlist").hide(); //모든 탭내용을 안보이게...
          $(".content_area .progress .contlist:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
          $('.content_area .progress .tab_menu .tab').css('background','none').css('color','#333'); //모든 탭메뉴를 비활성화
          $(this).css('background','#B8A080').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화

     });
    });

  });


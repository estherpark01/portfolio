// 전체 페이지 공통 js

//스크롤 애니메이션 AOS


//글로벌 네비게이션(gnb)

$(document).ready(function() {

    var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
    var on_off=false;  //false(안오버)  true(오버)
    
        $('#headerArea').mouseenter(function(){
           // var scroll = $(window).scrollTop();
            $(this).css('background','rgba(255,255,255,.9)').css('backdrop-filter','blur(3px)');
            $('#headerArea a').css('color','#333');
            on_off=true;
        });

        
       
    
       $('#headerArea').mouseleave(function(){   
            var scroll = $(window).scrollTop();  //스크롤의 거리
            
            if(scroll<smh-90 ){  //비주얼 위에 있는 상태면
                $(this).css('background','none').css('backdrop-filter','none'); 
                $('#headerArea a').css('color','#fff');
            }else{   //비주얼 아래에 있는 상태면
                $(this).css('background','rgba(255,255,255,1)').css('backdrop-filter','none'); 
                $('#headerArea a').css('color','#333');
            };
           on_off=false;    //안오버 상태
       });


    
       $(window).on('scroll',function(){//스크롤의 거리가 발생하면
            var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
            //console.log(scroll);
 
            if(scroll>smh-90){//스크롤 (비주얼높이-헤더높이)까지 내리면 
                $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
                $('#headerArea a').css('color','#333');
            }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
               if(on_off==false){ //헤더에 안오버 상태에서만 
                    $('#headerArea').css('background','none').css('border-bottom','none');
                    $('#headerArea a').css('color','#fff');
               }
            }; 
         });
 
   
     //2depth 열기/닫기
     $('ul.dropdownmenu').hover(
        function() { 
           $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
           $('#headerArea').animate({height:280},'fast').clearQueue();
        },function() {
           $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
           $('#headerArea').animate({height:90},'fast').clearQueue();
      });
     
      //1depth 효과
      $('ul.dropdownmenu li.menu').hover(
        function() { 
            $('.depth1',this).css('color','#B8A080');
        },function() {
           $('.depth1',this).css('color','#333');
      });

      //2depth 효과
      $('.menu ul li').hover(
        function() { 
            $('a',this).css('color','#B8A080');
        },function() {
           $('a',this).css('color','#333').css('background','none');
      });
      
      
 
      //tab 처리
      $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
         $('ul.dropdownmenu li.menu ul').slideDown('normal');
         $('#headerArea').animate({height:280},'fast').clearQueue();
      });
 
     $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
         $('ul.dropdownmenu li.menu ul').slideUp('fast');
         $('#headerArea').animate({height:90},'normal').clearQueue();
     });
 });





//패밀리 사이트 이동

    $('#footerArea .arrow').toggle(function(){
        $('.family .aList').fadeIn('slow');
        $(this).children('span').html('<i class="fa-solid fa-caret-down"></i>');
    }, function(){
        $('.family .aList').fadeOut('fast');
        $(this).children('span').html('<i class="fa-solid fa-caret-up"></i>');
    });




//토글 열고 닫기
    // $('#footerArea .family').click(
    //     function() { 
    //        $('.family .aList').fadeIn('normal',function(){
    //         $('a',this).stop();}); //모든 서브를 다 열어라
    //        $('.family .aList').animate('fast').css('display','block').clearQueue();
    //     },function() {
    //        $('.family .aList').fadeout('noraml',function(){
    //         $('a',this).stop();}); //모든 서브를 다 닫아라
    //        $('.family .aList').animate('fast').css('display','none').clearQueue();
    //   });

      
//tab키 처리

$('#footerArea .family').on('focus', function(){
    $('.family .aList').fadeIn('slow');
});
$('.family .aList li:last a').on('blur', function(){
    $('.family .aList').fadeout('fast');
});



//top으로 이동
$(window).on("scroll", function () {
    //스크롤 값의 변화가 생기면
    var scroll = $(window).scrollTop(); //스크롤의 거리

    // $(".text").text(scroll);

    if (scroll > 500) {
      //300이상의 거리가 발생되면
      $(".top_move").fadeIn("slow"); //top보여라~~~~
    } else {
      $(".top_move").fadeOut("fast"); //top안보여라~~~~
    }
  });

  $(".top_move").click(function (e) {
    e.preventDefault();
    //상단으로 스르륵 이동합니다.
    $("html,body").stop().animate({ scrollTop: 0 }, 1000);
  });
AOS.init({
  easing: 'ease-in-out-sine'
  });


//햄버거메뉴 처리
var onoff = false; //false(메뉴닫힘) true(메뉴열림)
$(".menuOpen").click(function(e){
   e.preventDefault();
   if(onoff == false){  //메뉴가 닫혀있을 때 클릭하면
     $("#gnb").slideDown('slow');
     $("#gnb li a").css('color','#fff');

     onoff = true;
    

   }else{  //메뉴가 열려있을 때 클릭하면
     $("#gnb").slideUp('fast');
     onoff = false;
   }
   
});

//  네비높이 맞추기(페이지 로딩시 1회)
var screenSize = $(window).width(); //가로해상도
//var winh =  $(document).height();  //문서 전체의 높이

// if( screenSize > 768){  //일반테블릿 이상의 해상도 에서는
//   $("#gnb").height('auto');
// }else{  //소형 테블릿 이하에 해상도에서는
//   $("#gnb").height(winh);
// }

var current=0; // 0(소형테블릿 이하), 1(일반테블릿 이상)

$(window).resize(function(){ 
   screenSize = $(window).width();  //가로 해상도
   if( screenSize > 1024){  //소형테블릿 이상이면
     $("#gnb").show();
    //  $("#gnb").css('color','#fff');
     //$("#gnb").height('auto');
         current=1; //일반테블릿 이상
   }
   if(current==1 && screenSize <= 1024){
     $("#gnb").hide();
     
     //$("#gnb").height(winh);
      current=0; //소형테블릿 이하
   }
 }); 





$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
    var scroll = $(window).scrollTop(); //스크롤의 거리
    var win_height =$(window).height();
    var header_height =$('header').height();
   
    if(scroll>win_height){ //300이상의 거리가 발생되면
        $('.topMove').fadeIn('slow');  //top보여라~~~~
    }else{
        $('.topMove').fadeOut('fast');//top안보여라~~~~
    }


    if(scroll>win_height-header_height){ //300이상의 거리가 발생되면
        $('header').css('background','#fff').css('border-bottom','1px solid #ccc');  //top보여라~~~~
        $('header ul li a').css('color','#333');
        $('header h1 img').attr('src', './images/header_logo2.png').fadeIn(600);
        $('#headerArea .menuOpen i').css('color','#333');
        
    }else{
        $('header').css('background','transparent').css('border-bottom','none');//top안보여라~~~~
        $('header ul li a').css('color','#fff');
        $('header h1 img').attr('src', './images/header_logo.png').fadeIn(600);
        $('#headerArea .menuOpen i').css('color','#fff');
        
    }
    
});


$('.topMove').click(function(e){
   e.preventDefault();
    //상단으로 스르륵 이동합니다.
   $("html,body").stop().animate({"scrollTop":0},1000); 
});
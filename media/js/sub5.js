$(document).ready(function () {
        
    $('.tab_menu li:eq(0)').find('a').addClass('spy');
    //첫번째 서브메뉴 활성화
    
    $('.sec2').addClass('boxMove');
    //첫번째 내용글 애니메이션 처리

    var smh,h0,h1,h2,h3,h4,h5,h6,h7;

   function init(){
      smh= $('.series_list').offset().top-100;  //메인 비주얼의 높이
      // var smh= $('.sec2').height();  //sec1
      var gap=130;
      h0= $('.sec2 .series_list>li:eq(0)').offset().top-gap ;
      h1= $('.sec2 .series_list>li:eq(1)').offset().top-gap ;
      h2= $('.sec2 .series_list>li:eq(2)').offset().top-gap ;
      h3= $('.sec2 .series_list>li:eq(3)').offset().top-gap ;
      h4= $('.sec2 .series_list>li:eq(4)').offset().top-gap ;
      h5= $('.sec2 .series_list>li:eq(5)').offset().top-gap ;
      h6= $('.sec2 .series_list>li:eq(6)').offset().top-gap ;
      h7= $('.sec2 .series_list>li:eq(7)').offset().top-gap ;
   }

   init();

   $(window).on('resize',function(){
      init();
   });

    

     //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다
       
       // $('.text').text(scroll);
        //스크롤 좌표의 값을 찍는다.
        
        //sticky menu 처리
        if(scroll>smh){ 
            $('.tab_menu').addClass('navOn');
            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
            $('header').hide();
        }else{
            $('.tab_menu').removeClass('navOn');
            //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
            $('header').show();
        }
        


      //   // top 이동 메뉴 나타나기

      //   if(scroll>500){ //500이상의 거리가 발생되면
      //       $('.topMove').fadeIn('slow');  //top보여라~~~~
      //   }else{
      //       $('.topMove').fadeOut('fast');//top안보여라~~~~
      //   };


        
        $('.tab_menu li').find('a').removeClass('spy');
        //모든 서브메뉴 비활성화~ 불꺼!!!
        
        
         //스크롤의 거리의 범위를 처리
        if(scroll<h0 || scroll<(h0+330)){
            $('.tab_menu li:eq(0)').find('a').addClass('spy');
            //1번째 서브메뉴 활성화

        }else if(scroll>(h0+330) && scroll<(h1+330)){
            $('.tab_menu li:eq(1)').find('a').addClass('spy');
            //2번째 서브메뉴 활성화

        }else if(scroll>(h1+330) && scroll<(h2+330)){
            $('.tab_menu li:eq(2)').find('a').addClass('spy');
            //3번째 서브메뉴 활성화

        }else if(scroll>(h2+330) && scroll<(h3+330)){
            $('.tab_menu li:eq(3)').find('a').addClass('spy');
            //4번째 서브메뉴 활성화

        }else if(scroll>(h3+330) && scroll<(h4+330)){
         $('.tab_menu li:eq(4)').find('a').addClass('spy');
         //5번째 서브메뉴 활성화

        }else if(scroll>(h4+330) && scroll<(h5+330)){
         $('.tab_menu li:eq(5)').find('a').addClass('spy');
         //6번째 서브메뉴 활성화

        }else if(scroll>(h5+330) && scroll<h6){
         $('.tab_menu li:eq(6)').find('a').addClass('spy');
         //7번째 서브메뉴 활성화

        }else if(scroll>=h6){
         $('.tab_menu li:eq(7)').find('a').addClass('spy');
         //8번째 서브메뉴 활성화

        }
        
        
    });



    //top으로 스르륵 이동
   //  $('.topMove').click(function(e){
   //      e.preventDefault();
   //       //상단으로 스르륵 이동합니다.
   //      $("html,body").stop().animate({"scrollTop":0},1000);   //부드럽게 스크롤하는 능력
   //   });



     // 메뉴 클릭시 해당 콘텐츠로 스르륵 이동
     var value=0;
     $('.tab_menu li a').click(function(e){
        e.preventDefault(); //href="#" 속성을 막아주는..메소드
   
         //이동할 스크롤의 거리

         if($(this).hasClass('link1')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
            value= h0;  // 해당 콘테츠의 상단의 거리~~
         }else if($(this).hasClass('link2')){
            value= h1; 
         }else if($(this).hasClass('link3')){
            value= h2; 
         }else if($(this).hasClass('link4')){
            value= h3; 
         }else if($(this).hasClass('link5')){
            value= h4; 
         }else if($(this).hasClass('link6')){
            value= h5; 
         }else if($(this).hasClass('link7')){
            value= h6; 
         }else if($(this).hasClass('link8')){
            value= h7; 
         }
         
       $("html,body").stop().animate({"scrollTop":value},1000);
     });
});
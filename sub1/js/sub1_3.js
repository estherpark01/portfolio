// var smh= $('.visual').height();  //메인 비주얼의 높이



// //스크롤의 좌표가 변하면.. 스크롤 이벤트
// $(window).on('scroll',function(){
//     var scroll = $(window).scrollTop();
//     //스크롤top의 좌표를 담는다
   
//     $('.text').text(scroll);
//     //스크롤 좌표의 값을 찍는다.
    
//     //sticky menu 처리
//     if(scroll>smh){ 
//         $('.year').addClass('navOn');
//         //스크롤의 거리가 350px 이상이면 서브메뉴 고정
//     }else{
//         $('.year').removeClass('navOn');
//         //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
//     }
    


//     // // top 이동 메뉴 나타나기

//     // if(scroll>500){ //500이상의 거리가 발생되면
//     //     $('.topMove').fadeIn('slow');  //top보여라~~~~
//     // }else{
//     //     $('.topMove').fadeOut('fast');//top안보여라~~~~
//     // };


    
//     // $('.subNav li').find('a').removeClass('spy');
//     // //모든 서브메뉴 비활성화~ 불꺼!!!
    
    
//      //스크롤의 거리의 범위를 처리
//     if(scroll>=0 && scroll<h1){
//         $('.subNav li:eq(0)').find('a').addClass('spy');
//         //첫번째 서브메뉴 활성화
        
//         $('#content div:eq(0)').addClass('boxMove');
//         //첫번째 내용 콘텐츠 애니메이
//     }else if(scroll>=h1 && scroll<h2){
//         $('.subNav li:eq(1)').find('a').addClass('spy');
//         //두번째 서브메뉴 활성화
        
//          $('#content div:eq(1)').addClass('boxMove');
//     }else if(scroll>=h2 && scroll<h3){
//         $('.subNav li:eq(2)').find('a').addClass('spy');
//         //세번째 서브메뉴 활성화
        
//          $('#content div:eq(2)').addClass('boxMove');
//     }else if(scroll>=h3){
//         $('.subNav li:eq(3)').find('a').addClass('spy');
//         //네번째 서브메뉴 활성화
        
//          $('#content div:eq(3)').addClass('boxMove');
//     }
    
    
   
    
// });




var y1_top = $('#content .content_area .y1').offset().top-91;
var y2_top =  $('#content .content_area .y2').offset().top-91;
var img_top = $('#content .content_area .img_box').offset().top-91-150;
$(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  
  if (scroll > y1_top  && scroll < img_top ) {
    $('#content .y1 h3').addClass('fix');
  } else {
    $('#content .y1 h3').removeClass('fix');
  }   

  if (scroll > y2_top  ) {
    $('#content .y2 h3').addClass('fix');
  } else {
    $('#content .y2 h3').removeClass('fix');
  } 
});
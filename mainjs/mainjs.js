// 메인 비주얼 처리 코드

    var timeonoff;   //타이머 처리  홍길동 정보
    var imageCount=$('.gallery ul li').size();   //이미지 총개수
    var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    
    $('.btn1').css('background','rgba(255,255,255,.5)'); //첫번째 불켜
    $('.btn1').css('width','200px'); // 버튼의 너비 증가
    $('.btn1').addClass('on');
    

    $('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다.
    $('.gallery .link1 span:first').css('top',600).css('opacity',0).delay(1200).animate({top:430, opacity:1},'slow');
    $('.gallery .link1 span:last').delay(1750).css('top',600).animate({top:500, opacity:1},'slow');

    function gallery_change(){
      $('.gallery li').fadeOut('slow'); //모든 이미지 안보인다.
		  $('.gallery .link'+cnt).fadeIn('4500');  //자기 자신만 이미지가 보인다
		  
		  // for(var i=1;i<=imageCount;i++){
			//   $('.btn'+i).css('background','#00f'); //버튼 모두 불 꺼
            //   $('.btn'+i).css('width','16');
		  // }

      $('.mbutton').css('background','rgba(255,255,255,.5)'); //버튼 모두 불 꺼
      $('.mbutton').css('width','20px');
      $('.mbutton').removeClass('on');
      $('.btn'+cnt).addClass('on');
      $('.btn'+cnt).css('background','rgba(255,255,255,.5)');//자신 버튼만 불 켜 
      $('.btn'+cnt).css('width','200px');
  

      $('.gallery li span').css('top',600).css('opacity',0);
      $('.gallery .link'+cnt).find('span:eq(0)').delay(1200).animate({top:430, opacity:1},'slow');
      $('.gallery .link'+cnt).find('span:eq(1)').css('opacity',0).delay(1750).animate({top:500, opacity:1},'slow');
    };

    function moveg(){
      if(cnt==imageCount+1)cnt=1;
      if(cnt==imageCount)cnt=0;  //카운트 초기화

      cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
     
    //  for(var i=1;i<=imageCount;i++){
    //         $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    //  }
    
    gallery_change();

       if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
     }
     
    timeonoff= setInterval( moveg , 4500);
    // 타이머를 동작 1~5이미지를 순서대로 자동 처리
      //var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
      //clearInterval(변수); -> 살인마/사이코패스/살인청부업자


   $('.mbutton').click(function(event){  //각각의 버튼 클릭시
	     var $target=$(event.target); //클릭한 버튼 $target == $(this)    ->jquery에서는 $(this) / java script에서는 $(event.target)
       clearInterval(timeonoff); //타이머 중지     
	 
	    //  for(var i=1;i<=imageCount;i++){
	    //      $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
      //    } 

		  // if($target.is('.btn1')){  //첫번째 버튼 클릭??
			// 	 cnt=1;  //클릭한 해당 카운트를 담아놓는다
		  // }else if($target.is('.btn2')){  //두번째 버튼 클릭??
			// 	 cnt=2; 
		  // }else if($target.is('.btn3')){ 
			// 	 cnt=3; 
		  // }else if($target.is('.btn4')){
			// 	 cnt=4; 
		  // }else if($target.is('.btn5')){
			// 	 cnt=5; 
		  // } 

      cnt = $(this).index('.mbutton') + 1;  //0~4 -> 1~5
      // console.log(cnt);

	    gallery_change();

      if(cnt==imageCount)cnt=0;  //카운트 초기화
     
      timeonoff= setInterval( moveg , 4500); //타이머의 부활!!!
    
      if(onoff==false){ //중지상태냐??
            onoff=true; //동작~~
            $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
      }
      
    });

	 //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
     if(onoff==true){ // 타이머가 동작 중이냐??
	       clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
		     $(this).html('<span class="hidden">play</span><span class="material-symbols-outlined">play_arrow</span>'); //js파일에서는 경로의 기준이 html파일이 기준!!
         onoff=false;   // 중지!!
	   }else{  // false 타이머가 중지 상태냐??
		   timeonoff= setInterval( moveg , 4500); //play버튼 클릭시  부활
		   $(this).html('<span class="hidden">stop</span><span class="material-symbols-outlined">stop</span>');
		   onoff=true; //동작
	   }
  });	

    //왼쪽/오른쪽 버튼 처리
    $('.visual .btn').click(function(){

      clearInterval(timeonoff); //살인마
      if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
          //1 2 3 4 5   1 2 3 4 5 .....
          if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
          //if(cnt==imageCount+1)cnt=1;  
          cnt++; //카운트 1씩증가
      }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
          //5 4 3 2 1   5 4 3 2 1 .....
          if(cnt==1)cnt=imageCount+1;   // 1->6  최초..   1번 이미지에서 +1 => 6 >>> 6에서 1씩 감소시키기
          if(cnt==0)cnt=imageCount;
          cnt--; //카운트 감소
      }
      
      gallery_change();

    // =>
    // $('.gallery li').hide(); //모든 이미지를 보이지 않게.
    // $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
                        
    // $('.mbutton').css('background','#00f'); //버튼 모두불꺼
    // $('.mbutton').css('width','16');
    // $('.btn'+cnt).css('background','#f00');//자신 버튼만 불켜 
    // $('.btn'+cnt).css('width','30px');

    // $('.gallery li span').css('top',210).css('opacity',0);
    // $('.gallery .link'+cnt).find('span').delay(1000).animate({top:170, opacity:1},'slow');




      
    // for(var i=1;i<=imageCount;i++){
    //     $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    // }


    // if($(this).is('.btnRight')){
    //   if(cnt==imageCount)cnt=0;
    // }else if($(this).is('.btnLeft')){
    //   if(cnt==1)cnt=imageCount+1;
    // }

    timeonoff= setInterval( moveg , 5000); //부활

    if(onoff==false){
      onoff=true;
      $('.ps').html('<span class="hidden">stop</span><span class="material-symbols-outlined">stop</span>');
    }
  });





// company 갤러리 처리 코드

$('#content .company_right .com_bot ul li a img').css('filter','grayscale(100%)');    //첫 번째 버튼만 활성화
$('#content .company_right .com_bot ul li:eq(0) a img').css('filter','grayscale(0%)');    //첫 번째 버튼만 활성화
      
    $('#content .company_right .com_bot ul li a').click(function(e){
        e.preventDefault();
      
        var ind = $(this).index('.company_right .com_bot a');   //0~5
        //ind = 0
        $('#content .company>img').attr('src','./images/company'+(ind+1)+'.jpg');
        $('#content .company>img').hide().fadeIn('slow');
  
        // var currentTime = new Date().getTime();
        // //console.log(currentTime);

        // var timeDiff = currentTime - lastClickTime;
        // // 일정 시간(예: 500ms) 이내에 다시 클릭한 경우 이벤트를 무시
        // if (timeDiff < 100) {
        //     return false;
        // }

        // $('.gallery-thumbs .title').html(companyimgs[ind].name);
        // $('.gallery-thumbs .main_t').html(companyimgs[ind].information);

        $('#content .company_right .com_bot ul li a img').css('filter','grayscale(100%)');
        $('#content .company_right .com_bot ul li:eq('+ind+') a img').css('filter','grayscale(0)');
    });
    




// 전문지도사육성과정

var memo = [
  {title: '국가공인실천예절지도사', 
  sub: '인성예절지도를 수행하며 기업체, 사회단체 등에 의전행사 및 자문 등의 역할을 할 수 있는 전문적인 자격증을 보유한 자를 말한다.',
  imgsrc: 'learn1.jpg'},
  {title: '유아다례지도사', 
  sub: '영ㆍ유아 어린이의 정서교육과 인성교육에 좋은 영향을 주는 차(茶)생활 예절을 체계적으로 교육 지도를 할 수 있는 유아다례 전문강사 교육 과정입니다.',
  imgsrc: 'learn2.jpg'},
  {title: '전통혼례지도사', 
  sub: '전통혼례를 현대화하고 작은 결혼식으로 대중화하여 건전한 혼례문화 보급과 함께 전통혼례 전문집례ㆍ집사로 활동할 수 있는 일자리 창출 교육 과정입니다.',
  imgsrc: 'learn3.jpg'}
];

var ind = 0; // 인덱스 카운터 0 1 2 
var total = memo.length; // 배열 개수 3개

function conchange(){ // 방향키 클릭 시 생성되는 태그
    $('.learn .learn_inner img').attr('src','./images/'+memo[ind].imgsrc).hide().fadeIn('fast');

    $('.learn_content h4').text(memo[ind].title); // 태그 생성
    $('.learn_content p').text(memo[ind].sub);
    // $('.business .text').text( (ind+1)+'/'+total); // 개수 리스트
}

$('.learn_content .btn_1').click(function(e){ 
    e.preventDefault();   //a href="#" 막는다~~
    ind--;  // 2 1 0    2 1 0   2 1 0
    if(ind==-1)ind=2;
    conchange(); // 입력한 함수 호출 > 그대로 출력
    
});
$('.learn_content .btn_2').click(function(e){ 
    e.preventDefault();
    
    ind++; // 0 1 2 0 1 2 0 1 2
    if(ind==3)ind=0;
    conchange(); // 입력한 함수 호출 > 그대로 출력
    
});






// 알림 마당


var swiper = new Swiper('.swiper',{
  slidesPerView: 'auto',  //단수  , 'auto'(내가 원하는 단의 너비) 
  spaceBetween: 20,   //단사이 여백 (단위:px)
  //loop: true,  //무한 loop
  //freeMode: true,  //터치 만큼 자유롭게 이동
  //centeredSlides: false, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
  // initialSlide: 0,     //시작 슬라이드 변경(0~ 에서 시작)
  // effect: 'fade',   //페이드효과(단수가 1단이 된다)
  // effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
  navigation: {    //이전/다음 버튼
      nextEl: '.notice .btn_2',
      prevEl: '.notice .btn_1',
  },
  // pagination: {   //페이지 네이션
  //     el: '.swiper-pagination',
  //     // dynamicBullets: true,
  //     // clickable: true,
  //     // type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
  // },
  // scrollbar: {  //하단 스크롤바
  //     el: '.swiper-scrollbar',
  //     // hide: true
  // },

  // autoplay: {  //자동
  //     delay: 3000,
  //     disableOnInteraction: false
  // },
});








// var position=0;  //최초위치
// //var movesize=150; //이미지 하나의 너비
// var movesize=$('#content .notice .notice_right .notice_box ul li').width();
// //console.log(movesize);
// var timeonoff;

// $('.notice_right ul').after($('.notice_right ul').clone());

// function moveG() {
//     position-=movesize;  // 350씩 감소
//     $('.notice_box').animate({left:position}, 'fast',
//         function(){							
//         if(position<=-350){
//             $('.notice_box').css('left',-350);
//             position=-350;
//         }
//     }).clearQueue();
// }

// // timeonoff= setInterval(moveG, 3000);


//     //슬라이드 겔러리를 한번 복제
// var lastClickTime = 0;      

// $('.button').click(function(e){
//  e.preventDefault();

//  var currentTime = new Date().getTime();
//  //console.log(currentTime);

//  var timeDiff = currentTime - lastClickTime;
//  // 일정 시간(예: 500ms) 이내에 다시 클릭한 경우 이벤트를 무시
//  if (timeDiff < 500) {
     
//   return false;
//  }

//  lastClickTime = currentTime;

// // clearInterval(timeonoff);
 
//  if($(this).is('.btn_2')){  //이전버튼 클릭
     
//       position-=movesize;  // 350씩 감소
//      $('.notice_box').animate({left:position}, 'fast',function(){
//         if(position<=-350){
//             position=-350;
//             $('.notice_box').css('left',-350);
//          }
//      }).clearQueue();  

//  }else if($(this).is('.btn_1')){  //다음버튼 클릭
//        if(position>=0){
//             $('.notice_box').css('left',-370);
//             position=-370;
//         }

//         position+=movesize; // 350씩 증가
//         $('.notice_box').animate({left:position}, 'fast',
//             function(){							
//                 if(position>=0){
//                     $('.notice_box').css('right',350);
//                     position=350;
//                   }
//                 }).clearQueue();

//   }
// });



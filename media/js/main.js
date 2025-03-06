//sec2
var swiper1 = new Swiper('.swiper1', {
    autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
    slidesPerView: 1,  //단수
    spaceBetween: 80,  //단사이 여백
    //loop: true,  //무한 loop
    //freeMode: true,  //터치 만큼 자유롭게 이동
    //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
    navigation: {    //이전/다음 버튼
      nextEl: '.next1',
      prevEl: '.prev1',
    },
    pagination: {   //페이지 네이션
      el: '.pagination1',
      //dynamicBullets: true,
      clickable: true,
      //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    }
  });


//sec4

/*숫자 자동입력*/

 function counter(){
          //num1
          var memberCountConTxt=155.5; //출력하고 싶은 최종값

          $({ val : 0 }).animate({ val : memberCountConTxt }, {
          duration: 1000,
          step: function() {
            var number = (this.val).toFixed(1);    // Math.floor => 소수점 버리는 기능(정수만 취하기)
            $(".sec4 .con_bot .inner .num1 strong").text(number);
          },
          complete: function() {
            var number = (this.val).toFixed(1); 
            $(".sec4 .con_bot .inner .num1 strong").text(number);
          }
          });



          //num2
          var memberCountConTxt=140; //출력하고 싶은 최종값

          $({ val : 0 }).animate({ val : memberCountConTxt }, {
          duration: 1000,
          step: function() {
          var number = Math.floor(this.val);    // Math.floor => 소수점 버리는 기능(정수만 취하기)
          $(".sec4 .con_bot .inner .num2 strong").text(number);
          },
          complete: function() {
          var number = Math.floor(this.val);
          $(".sec4 .con_bot .inner .num2 strong").text(number);
          }
          });


          //num3
          var memberCountConTxt=2.55; //출력하고 싶은 최종값

          $({ val : 0 }).animate({ val : memberCountConTxt }, {
          duration: 1000,
          step: function() {
          var number = (this.val).toFixed(2);    // Math.floor => 소수점 버리는 기능(정수만 취하기)
          $(".sec4 .con_bot .inner .num3 strong").text(number);
          },
          complete: function() {
          var number =(this.val).toFixed(2); 
          $(".sec4 .con_bot .inner .num3 strong").text(number);
          }
          });


          //num4
          var memberCountConTxt=154950; //출력하고 싶은 최종값

          const cn1 = memberCountConTxt.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");


          $({ val : 0 }).animate({ val : memberCountConTxt }, {
          duration: 1000,
          step: function() {
            var number = numberWithCommas(Math.floor(this.val));   // Math.floor => 소수점 버리는 기능(정수만 취하기)
          $(".sec4 .con_bot .inner .num4 strong").text(number);
          },
          complete: function() {
            var number = numberWithCommas(Math.floor(this.val));
           $(".sec4 .con_bot .inner .num4 strong").text(number);
          }
          });
 }


 function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 }

 let aboutBox_height  = $('.sec4 .con_bot').offset().top + $(window).height()-400; 
 let upDown = false;  //  fasle(위)  아래(true)  

 $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
     var scroll = $(window).scrollTop(); 

    // aboutBox_height  = $('.sec4 .con_bot').offset().top + $(window).height(); 

     if(scroll>aboutBox_height && upDown == false){
         counter();
         upDown = true;
     }else if(scroll<=aboutBox_height){
         upDown =false;
        //  $(".sec4 .con_bot .inner .num1 strong").text(0);
        //  $(".sec4 .con_bot .inner .num2 strong").text(0);
        //  $(".sec4 .con_bot .inner .num3 strong").text(0);
        //  $(".sec4 .con_bot .inner .num4 strong").text(0);
     }

     console.log(aboutBox_height,scroll);
     console.log(upDown);

 });
  





  //sec5
  var swiper2 = new Swiper('.swiper2', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: -10,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.pagination2',
    },
    navigation: {
      nextEl: '.next2',
      prevEl: '.prev2',
    }
  });

  // var gdata = [
  //   {'title':'제목1', 'desc':'내용1'},
  //   {'title':'제목2', 'desc':'내용2'},
  //   {'title':'제목3', 'desc':'내용3'},
  //   {'title':'제목4', 'desc':'내용4'},
  //   {'title':'제목5', 'desc':'내용5'},
  //   {'title':'제목6', 'desc':'내용6'},
  //   {'title':'제목7', 'desc':'내용7'},
  //   {'title':'제목8', 'desc':'내용8'}
  // ];
  // var text = document.getElementById('text');
  // var output ='';

  // output +='<dl>';
  // output +='<dt>'+ gdata[0].title +'</dt>';
  // output +='<dd>'+ gdata[0].desc +'</dd>';
  // output +='</dt>';  
  // text.innerHTML = output;

  swiper2.on('transitionEnd', function() {
      //console.log(swiper.realIndex);
      var sind = swiper2.realIndex;  // 0~9
      
      output ='<dl>';
      output +='<dt>'+ gdata[sind].title +'</dt>';
      output +='<dd>'+ gdata[sind].desc +'</dd>';
      output +='</dt>';  
      text.innerHTML = output;
  });






//겔러리 오버 효과
$('.sec6 .gallery  ul li').mouseenter(function(){
  $('.sec6 .gallery ul li').css('filter', 'brightness(50%)');
  $(this).css('filter', 'brightness(100%)');
});

$('.sec6 .gallery  ul').mouseleave(function(){
  $('.sec6 .gallery ul li').css('filter', 'brightness(100%)');
});
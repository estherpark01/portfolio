

// 모달 팝업

var btns = document.querySelectorAll(".open-modal");
var modals = document.querySelectorAll(".modal-custom");
var btnclose = document.querySelectorAll(".close-modal");

//document.getElementsByClassName("클래스명") 은 forEach()문을 사용할 수 없다
btns.forEach((e,i) => {
        btns[i].onclick =  function(e) {
            e.preventDefault();
            modals[i].style.display = "block";
        };
    
        // <span> 태그(X 버튼)를 클릭하면 Modal이 닫습니다.
        btnclose[i].onclick = function() {
            modals[i].style.display = "none";
        };
});    

// Modal 영역 밖을 클릭하면 Modal을 닫습니다.
window.onclick = function(e) {
    if (e.target.className == "modal-custom") {
        e.target.style.display = "none";
    }
};





// 2번째 아이템 슬라이드
var cnt=$('.tab_menu li').size();  //탭메뉴 개수 ***
    $('.item_area .item_list:eq(0)').show(); // 첫번째 탭 내용만 열어라
    $('.item_area .li1').css('background','none').css('color','#666'); //첫번째 탭메뉴 활성화
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***

    $('.tab_menu button').each(function (index) {  // index=0 1 2
      $(this).click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다    

          $(".item_area .item_list").hide(); //모든 탭내용을 안보이게...
          $(".item_area .item_list:eq("+(index)+")").show(); //클릭한 해당 탭내용만 보여라
          $('button').css('background','none').css('color','#666'); //모든 탭메뉴를 비활성화
          $(this).css('background','#B8A080').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화

     });
    });




// or

// tabBtns.forEach((btn, index) => {
//     btn.addEventListener('click', (e) => {  //각각의 버튼(btn)을 클릭하면 index=0~2
//         e.preventDefault();
//         tabBtns.forEach(otherBtn => {   //모든 버튼 불 off
//             otherBtn.classList.remove('active');
//         });
//         tabConts.forEach(othercont => {     //모든 내용 hide
//             othercont.classList.remove('active');
//         });
//         tabBtns[index].classList.add('active');
//         tabConts[index].classList.add('active');
//     });
// });
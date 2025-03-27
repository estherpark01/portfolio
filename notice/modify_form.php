<? 
	session_start(); 
	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);
	//세션변수 4
	//$num
	//$page
	//$liststyle

	include "../lib/dbconn.php";

	$sql = "select * from notice where num=$num";
	$result = mysqli_query( $connect, $sql);

	$row = mysqli_fetch_array($result);   	
	$item_nick = $row[nick]; 
	$item_subject     = $row[subject];
	$item_content     = $row[content];
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>알림마당:새소식 및 알림방</title>

    <link rel="shortcut icon" type="image/x-icon"  href="../favicon_1.ico" >
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">

    <link rel="stylesheet" href="../common/css/aos.css">
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="../sub6/common/css/sub6common.css">
    <link rel="stylesheet" href="./css/notice.css">
	
	<script>
		// function del(href) 
		// {
		// 	if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
		// 			document.location.href = href;
		// 	}
		// }
	</script>
</head>

<body>
	<div class="skipNav">
		<a href="#content">본문 바로가기</a>
		<a href="#gnb">글로벌 네비게이션 바로가기</a>
	</div>


	<div class="wrap">
	<? include '../common/sub_header.html' ?>

		<div class="visual">
            <img src="../sub6/common/images/visual.jpg" alt="">
            <strong>알림마당</strong>
        </div>
        <div class="sub_nav">
            <ul>
				<li><a class="current" href="../notice/list.php">새소식 및 알림방</a></li>
                <li><a href="../sub6/sub6_1.html">상담 및 컨설팅</a></li>
                <li><a href="../news/list.php">보도자료</a></li>
				<li><a href="../career/list.php">채용공고</a></li>
            </ul>
        </div>
	<!-- <div class="sub_layout"></div> -->


        <article id="content">
            <div class="title_area">
				<div class="line_map">
                    home > 알림마당 > <strong>새소식 및 알림방</strong>
                </div>
                <h2>새소식 및 알림방</h2>
            </div>
			<div class="content_area">
                <div class="summary">
                    <p>한국전통문화예절원의 소통공간, 새소식과 공지사항 안내입니다.</p>
                    <!-- <p>철강포장 및 소재 전문기업으로서 철강사업에 새로운 가치를 제공하고 시너지를 창출하고자 합니다.</p> -->
                </div>

				<div class="bbs_wrap">
					<form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&liststyle=<?=$liststyle?>">
						<ul class="bbs_write_top">
							<li>
								<dl>
									<dt>닉네임</dt>
									<dd><?=$item_nick?></dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="subject">제목</label></dt>
									<dd>
										<input type="text" name="subject" id="subject" value="<?=$item_subject?>" >
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="contents">내용</label></dt>
									<dd>
										<textarea name="contents" id="contents"><?=$item_content?></textarea>
									</dd>
								</dl>
							</li>
						</ul>

					
						<div class="btn_wrap">
							<a href="list.php?&page=<?=$page?>&liststyle=<?=$liststyle?>">목록</a>
							<button type="submit" class='active'>완료</button>
						</div>

					</form>
				</div>
			</div>
        </article>

	<? include "../common/sub_footer.html" ?>

	</div>

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css" integrity="sha512-9xKTRVabjVeZmc+GUW8GgSmcREDunMM+Dt/GrzchfN8tkwHizc5RP4Ok/MXFFy5rIjJjzhndFScTceq5e6GvVQ==" crossorigin="anonymous" referrerpolicy="no-referrer">
    
	<script src="../common/js/prefixfree.min.js"></script>
	<script src="../common/js/jquery-1.12.4.min.js"></script>
	<script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
	<script src="../common/js/jquery.easing.1.3.js"></script>
	<script src="../common/js/common.js"></script>
	<script src="./common/js/sub6common.js"></script>
</body>
</html>
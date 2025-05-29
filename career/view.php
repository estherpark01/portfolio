<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

	include "../lib/dbconn.php";

	$sql = "select * from $table where num=$num";
	$result = mysqli_query( $connect, $sql);

    $row = mysqli_fetch_array($result);    

	$item_num     = $row["num"];
	$item_id      = $row["id"];
	$item_name    = $row["name"];
  	$item_nick    = $row["nick"];
	$item_hit     = $row["hit"];

	$file_name[0]   = $row["file_name_0"];
	$file_name[1]   = $row["file_name_1"];
	$file_name[2]   = $row["file_name_2"];

	$file_type[0]   = $row["file_type_0"];
	$file_type[1]   = $row["file_type_1"];
	$file_type[2]   = $row["file_type_2"];

	$file_copied[0] = $row["file_copied_0"];
	$file_copied[1] = $row["file_copied_1"];
	$file_copied[2] = $row["file_copied_2"];

    $item_date    = $row["regist_day"];
	$item_subject = str_replace(" ", "&nbsp;", $row["subject"]);

	$item_content = str_replace(" ", "&nbsp;", $row["content"]);
	$item_content = str_replace("\n", "<br>", $item_content);
	$new_hit = $item_hit + 1;

	$sql = "update $table set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysqli_query( $connect, $sql);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>알림마당:채용공고</title>

    <link rel="shortcut icon" type="image/x-icon"  href="../favicon_1.ico" >
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css" integrity="sha512-9xKTRVabjVeZmc+GUW8GgSmcREDunMM+Dt/GrzchfN8tkwHizc5RP4Ok/MXFFy5rIjJjzhndFScTceq5e6GvVQ==" crossorigin="anonymous" referrerpolicy="no-referrer">
	
    <link rel="stylesheet" href="../common/css/aos.css">
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="../sub6/common/css/sub6common.css">
    <link rel="stylesheet" href="./css/career.css">
	<script src="../common/js/jquery-1.12.4.min.js"></script>
	<script src="../common/js/jquery-migrate-1.4.1.min.js"></script>

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
				<li><a href="../notice/list.php">새소식 및 알림방</a></li>
                <li><a href="../sub6/sub6_1.html">상담 및 컨설팅</a></li>
                <li><a href="../news/list.php">보도자료</a></li>
				<li><a class="current" href="../career/list.php">채용공고</a></li>
            </ul>
        </div>

        <article id="content">
			<div class="title_area">
                <div class="line_map">
                    home > 알림마당 > <strong>채용공고</strong>
                </div>
                <h2>채용공고</h2>
                <p>Career</p>
            </div>
		  <div class="content_area">
			  <div class="summary">
				  <p>한국전통문화예절원은 열린 마음으로 함께 일할 인재를 기다립니다.</p>
				  <!-- <p>철강포장 및 소재 전문기업으로서 철강사업에 새로운 가치를 제공하고 시너지를 창출하고자 합니다.</p> -->
			  </div>

				<div class="file_bbs_wrap">

					<ul class="bbs_view_ttl">
						<li><?= $item_subject ?></li>
						<li>
							<span><?= $item_nick ?></span>
							<span><?= $item_date ?></span>
							<span><i class="fa-regular fa-eye"><i>조회수</i></i> <?= $item_hit ?></span>
						</li>
						<?
							if($file_copied[0] || $file_copied[1] || $file_copied[2]){	//첨부파일이 하나라도 있으면
						?>
						<li class="file">
							<strong>첨부파일</strong>
							<?
								for ($i=0; $i<3; $i++)
								{
									if ($userid && $file_copied[$i])	// 로그인, 첨부된 파일이 있으면
									{
										$show_name = $file_name[$i];
										$real_name = $file_copied[$i];
										$real_type = $file_type[$i];
										$file_path = "./data/".$real_name;	//	경로 ./data/2022_02_24_10_29_32_0.zip
										$file_size = filesize($file_path);	// 파일의 용량
						
										echo "
											<p>
												$show_name
												<small>$file_size Byte</small>
												<a href='download.php?table=$table&num=$num&real_name=$real_name&show_name=$show_name&file_type=$real_type'>저장하기</a>
											</p>
										";
									}
								}
							?>
						</li>
						<? } ?>
					</ul>
					
					<div class="bbs_view_cont">
						<?= $item_content ?>
					</div>
					
					<div class="btn_wrap">
						<a href="list.php?table=<?=$table?>&page=<?=$page?>&liststyle=<?=$liststyle?>">목록</a>
						
						<? if($userid && ( $userid==$item_id || $userid=='admin' || $userlevel==1) ){ ?>
						<a href="write_form.php?table=<?=$table?>&mode=modify&num=<?=$num?>&page=<?=$page?>&liststyle=<?=$liststyle?>">수정</a>
						<a href="javascript:del('delete.php?table=<?=$table?>&num=<?=$num?>&liststyle=<?=$liststyle?>')">삭제</a>
						<? } ?>
					
						<? if($userid) { ?>
							<a href="write_form.php?table=<?=$table?>&liststyle=<?=$liststyle?>" class='active'>글쓰기</a>
						<? } ?>
					
					</div>
				</div>
			</div>
		</article>
		
		<? include "../common/sub_footer.html" ?>


</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css" integrity="sha512-9xKTRVabjVeZmc+GUW8GgSmcREDunMM+Dt/GrzchfN8tkwHizc5RP4Ok/MXFFy5rIjJjzhndFScTceq5e6GvVQ==" crossorigin="anonymous" referrerpolicy="no-referrer">


<script src="../common/js/jquery.easing.1.3.js"></script>
<script src="../common/js/common.js"></script>
<script src="./common/js/sub6common.js"></script>
<!-- <script src="./js/sub1_1.js"></script> -->
</body>
</html>
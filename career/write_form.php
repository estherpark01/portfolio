<? 
	session_start(); 
	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);

	include "../lib/dbconn.php";

	if ($mode=="modify")
	{
		$sql = "select * from $table where num=$num";
		$result = mysqli_query( $connect, $sql);

		$row = mysqli_fetch_array($result);      
	
		$item_nick     = $row[nick];
		$item_subject     = $row[subject];
		$item_content     = $row[content];

		$item_file_0 = $row[file_name_0];
		$item_file_1 = $row[file_name_1];
		$item_file_2 = $row[file_name_2];

		$copied_file_0 = $row[file_copied_0];
		$copied_file_1 = $row[file_copied_1];
		$copied_file_2 = $row[file_copied_2];
	}
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
	
	<script>
		function check_input()
		{
			if (!document.board_form.subject.value)
			{
				alert("제목을 입력하세요1");    
				document.board_form.subject.focus();
				return;
			}

			if (!document.board_form.content.value)
			{
				alert("내용을 입력하세요!");    
				document.board_form.content.focus();
				return;
			}
			document.board_form.submit();
		}
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
					<? if($mode=="modify") { ?>
					<form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&table=<?=$table?>&liststyle=<?=$liststyle?>" enctype="multipart/form-data"> 
					<? } else { ?>
					
					<form  name="board_form" method="post" action="insert.php?table=<?=$table?>&liststyle=<?=$liststyle?>" enctype="multipart/form-data"> 
					<? } ?>
					
						<ul class="bbs_write_top">
					
							<li>
								<dl>
									<dt>닉네임</dt>
									<? if($userid){ ?>
									 <dd><?=$usernick?></dd>
									<? }else{ ?>
									  <dd><?=$item_nick?></dd>
									<? } ?>	
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="subject">제목</label></dt>
									<dd><input type="text" name="subject" id="subject" value="<?=$item_subject?>" ></dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="contents">내용</label></dt>
									<dd>
										<textarea id="contents" name="content"><?=$item_content?></textarea>
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="upfile0">첨부파일1</label></dt>
									<dd>
										<input type="file" name="upfile[]" id="upfile0">
										<!-- * 5MB까지 업로드 가능! -->
										<? if ($mode=="modify" && $item_file_0) { ?>
										<div class="delete_ok">
											<?=$item_file_0?> 파일이 등록되어 있습니다.
											<div class="check">
												<input type="checkbox" name="del_file[]" id="del_file0" value="0">
												<label for="del_file0">삭제</label>
											</div>
										</div>
										<? } ?>
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="upfile1">첨부파일2</label></dt>
									<dd>
										<input type="file" name="upfile[]" id="upfile1">
										<!-- * 5MB까지 업로드 가능! -->
										<? if ($mode=="modify" && $item_file_1) { ?>
										<div class="delete_ok">
											<?=$item_file_1?> 파일이 등록되어 있습니다.
											<div class="check">
												<input type="checkbox" name="del_file[]" id="del_file1" value="1">
												<label for="del_file1">삭제</label>
											</div>
										</div>
										<div class="clear"></div>
										<? } ?>
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="upfile2">첨부파일3</label></dt>
									<dd>
										<input type="file" name="upfile[]" id="upfile2">
										<!-- * 5MB까지 업로드 가능! -->
										<? if ($mode=="modify" && $item_file_2) { ?>
										<div class="delete_ok">
											<?=$item_file_2?> 파일이 등록되어 있습니다.
											<div class="check">
												<input type="checkbox" name="del_file[]" id="del_file2" value="2">
												<label for="del_file2">삭제</label>
											</div>
										</div>
										<div class="clear"></div>
										<? } ?>
									</dd>
								</dl>
							</li>
						</ul>
					
						<div class="btn_wrap">
							<a href="list.php?table=<?=$table?>&page=<?=$page?>&liststyle=<?=$liststyle?>">목록</a>
							<a href="#" onclick="check_input()" class='active'>완료</a>
						</div>
					</form>
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

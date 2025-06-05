<? 
	session_start(); 
	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);

	$table = "download";

	include "../lib/dbconn.php";

	if (!$scale)
    $scale=8;			// 한 화면에 표시되는 글 수

	if ($mode=="search")
	{
		if(!$search)
		{
			echo("
				<script>
					window.alert('검색할 단어를 입력해 주세요!');
					history.go(-1);
				</script>
			");
			exit;
		}

		$sql = "select * from $table where $find like '%$search%' order by num desc";
	}
	else
	{
		$sql = "select * from $table order by num desc";
	}

	$result = mysqli_query( $connect, $sql);
	$total_record = mysqli_num_rows($result); // 전체 글 수

	// 전체 페이지 수($total_page) 계산 
	if ($total_record % $scale == 0){
		$total_page = floor($total_record/$scale);      
	} else {
		$total_page = floor($total_record/$scale) + 1;
	}

	if (!$page){                 // 페이지번호($page)가 0 일 때
		$page = 1;
	}              // 페이지 번호를 1로 초기화

	// 표시할 페이지($page)에 따라 $start 계산  
	$start = ($page - 1) * $scale;      
	$number = $total_record - $start;
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

					<div class="bbs_sort">
						<div class="total">총 <b><?= $total_record ?></b> 개의 게시물이 있습니다.</div>

						<select class="scale" name="scale" onchange="location.href='list.php?scale='+this.value+'&liststyle=<?=$liststyle?>'">
							<option value=''><?=$scale?>개씩</option>
							<option value='4'>4개씩</option>
							<option value='8'>8개씩</option>
							<option value='10'>10개씩</option>
							<option value='12'>12개씩</option>
						</select>

						<ul class="lst_style">
							<li class="active"><a href="list.php?liststyle=list&scale=<?=$scale?>">목록형</a></li>
							<li><a href="list.php?liststyle=box&scale=<?=$scale?>">박스형</a></li>
						</ul>

					</div>
					
					
					<div class="bbs_lst">
						<ul class="lst_ttl">
							<li class="lst_width1">번호</li>
							<li class="lst_width2">제목</li>
							<li class="lst_width3">글쓴이</li>
							<!-- <li class="lst_width3">글쓴이</li> -->
							<li class="lst_width4">등록일</li>
							<!-- <li class="lst_width5">조회</li> -->
						</ul>
						
						<ul class="lst_cont">
							<?		
								for ($i=$start; $i<$start+$scale && $i < $total_record; $i++)                    
								{
									mysqli_data_seek($result, $i);         
									// 가져올 레코드로 위치(포인터) 이동  
									$row = mysqli_fetch_array($result);       
									// 하나의 레코드 가져오기
									
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
									$item_date = substr($item_date, 0, 10);
						
									$item_subject = str_replace(" ", "&nbsp;", $row["subject"]);
							?>
							<li>
								<div class="lst_width1"><?= $number ?></div>
								<div class="lst_width2">
                                    
                                    <a href="view.php?table=<?=$table?>&num=<?=$item_num?>&page=<?=$page?>&liststyle=<?=$liststyle?>">
                                        <p>
                                            <?= $item_subject ?>
                                            <?
                                                if ($file_copied[0] || $file_copied[1] || $file_copied[3])	// 첨부된 파일이 있으면
                                                {
                                                    echo '<i class="fa-solid fa-paperclip"><i>파일</i></i>';
                                                }
                                            ?>
                                        </p>
                                    </a>
								</div>
                                <div class="lst_width3"><?= $item_nick ?></div>
								<div class="lst_width4"><?= $item_date ?></div>
							</li>
							<?
									$number--;
								}
							?>
						</ul>
					</div>



					<div class="page_num">
						<span class="prev">이전</span>
						<?
							// 게시판 목록 하단에 페이지 링크 번호 출력
							for ($i=1; $i<=$total_page; $i++)
							{
								if ($page == $i)     // 현재 페이지 번호 링크 안함
								{
									echo "<span class='active'>{$i}</span>";
								}
								else
								{ 
									if($mode=="search")	// 검색리스트일 때 (page, scale, mode, find, search)
									{
										echo "<span><a href='list.php?page=$i&scale=$scale&liststyle=$liststyle&mode=search&find=$find&search=$search'>{$i}</a></span>";
									}
									else
									{    // 일반 리스트일 때
										echo "<span><a href='list.php?page=$i&scale=$scale&liststyle=$liststyle'>{$i}</a></span>";
									}
								}      
							}
						?>			
						<span class="next">다음</span>
					</div>

					<div class="btn_wrap">
						<a href="list.php?table=<?=$table?>&page=<?=$page?>&liststyle=<?=$liststyle?>">목록</a>
						<? if($userid){	// 로그인 했을 경우 ?>
						<a href="write_form.php?table=<?=$table?>&liststyle=<?=$liststyle?>" class='active'>글쓰기</a>
						<? } ?>
					</div>
					

					<div class="bbs_search">
						<form name="board_form" method="post" action="list.php?table=<?=$table?>&mode=search&liststyle=<?=$liststyle?>"> 
							<select name="find">
								<option value='subject'>제목</option>
								<option value='content'>내용</option>
								<option value='nick'>별명</option>
								<option value='name'>이름</option>
							</select>
							<label class="hidden" for="search"></label>
							<input type="text" name="search" id="search" placeholder="검색어를 입력하세요">
							<button type="submit">검색</button>
						</form>
					</div>

				</div>

			</div>
		</article>
		
	<?
		if (!$liststyle){
		$liststyle = 'list';	// 리스트 스타일
		echo "
			<script>
				$('.lst_style li').removeClass('active');
				$('.lst_style li:eq(0)').addClass('active');
			</script>
		";
		} else if($liststyle == 'box'){
		$liststyle = 'box';	// 리스트 스타일
		echo "
			<script>
				$('.lst_style li').removeClass('active');
				$('.lst_style li:eq(1)').addClass('active');
				$('.bbs_lst').addClass('box');
			</script>
		";

		}
	?>
	<? include "../common/sub_footer.html" ?>


</div>

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css" integrity="sha512-9xKTRVabjVeZmc+GUW8GgSmcREDunMM+Dt/GrzchfN8tkwHizc5RP4Ok/MXFFy5rIjJjzhndFScTceq5e6GvVQ==" crossorigin="anonymous" referrerpolicy="no-referrer">


	<script src="../common/js/jquery.easing.1.3.js"></script>
	<script src="../common/js/common.js"></script>
	<script src="./common/js/sub6common.js"></script>
	<!-- <script src="./js/sub1_1.js"></script> -->

</body>
</html>
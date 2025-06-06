<?
    session_start();

    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION); 
    /*
    $id='green2'
    $name='홍길동'
    $hp1='010'
    $hp2='1111'
    $hp3='2222'
    */


    if(!$id) {  /* !='없으면'*/
        echo("
            <script>
                window.alert('아이디를 입력하세요');
                //history.go(-1);
            </script>
        ");
        exit;
    }

    if(!$name) {  /* !='없으면'*/
        echo("
            <script>
                window.alert('이름을 입력하세요');
                //history.go(-1);
            </script>
        ");
        exit;
    }

    if(!($hp2 && $hp3)) {
        echo("
            <script>
                window.alert('연락처를 입력하세요');
                //history.go(-1);
            </script>
        ");
        exit;
    }


    include "../lib/dbconn.php";

    $sql = "select * from member where id='$id'";
    $result = mysqli_query( $connect, $sql); //있으면 1, 없으면 null

    $num_match = mysqli_num_rows($result);  //1 null

    if(!$num_match) //검색 레코드가 없으면
    {
        echo(" 
            <script>
                window.alert('등록되지 않은 아이디 입니다');
                //history.go(-1);
            </script>
        ");
        exit;
    }
    else     //검색 레코드가 있으면
    {
        $hp = $hp1."-".$hp2."-".$hp3;

        $row = mysqli_fetch_array($result);
        //$row[id] ,.... $row[level]
        $sql ="select * from member where id='$id' and name='$name' and hp='$hp'";
        $result = mysqli_query( $connect, $sql);
        $num_match = mysqli_num_rows($result); //있으면 1, 없으면 null

        /* db에 이미 암호화 된 pass를 다시 암호화해서 기존의 pass로 알아낼수 없다,
        암호화된 pass가 입력된 pass의 암호화와 일치하는가를 확인해야함*/

        if(!$num_match) //null이면=입력된 pass가 암호화된 패스와 맞지 않다면
        {
            echo("
                <script>
                    window.alert('등록된 정보가 없습니다');
                    //history.go(-1);
                </script>
            ");

            exit;
        }
        else  //1이면=아이디와 이름 전화번호가 모두 일치 한다면
        {
            $userid = $row["id"];
            $username = $row["name"];
            $userhp = $row["hp"];
            $date = $row["regist_day"];

            // 랜덤 비밀번호 생성
            function generateRandomPassword($length=8, $strength=0) {
                //$length=8 => 랜덤패스워드 글자수
                $vowels = 'aeuy!@#$';
                $consonants = 'bdghjmnpqrstvz';  //랜덤으로 뽑아낼 기본 문자

                if ($strength & 1) {    // $strength == 1
                    $consonants .= 'BDGHJLMNPQRSTVWXZ';  //추가할 문자
                }

                $password = '';
                $alt = time() % 2;  // 0,1
                for ($i = 0; $i < $length; $i++) {  // 0~7 8회
                    if ($alt == 1) {
                        $password .= $consonants[(rand() % strlen($consonants))];   // 글자들의 인덱스번호
                        $alt = 0;
                    } else {
                        $password .= $vowels[(rand() % strlen($vowels))];
                        $alt = 1;
                    }
                }
                
                return $password;   // 임시 패스워드
            }

            $ranpass = generateRandomPassword(8,1);  //랜덤으로 뽑은 8자의 문자

            echo ("
                <script>
                    $('#loadtext').fadeIn();
                    $('.loadtext_bg').fadeIn();
                </script>
                
                <p><span>{$username}</span>회원님 가입정보입니다.</p>
                <div class='notice'>
                    임시비밀번호는 <strong> $ranpass </strong> 입니다.<br>
                    로그인 후 비밀번호를 변경해주세요.
                </div>
                <dl>
                    <dt>아이디</dt>
                    <dd>{$userid}</dd>
                    <dt>이름</dt>
                    <dd>{$username}</dd>
                    <dt>연락처</dt>
                    <dd>{$userhp}</dd>
                    <dt>가입일자</dt>
                    <dd>{$date}</dd>
                </dl>
                <ul>
                    <li><a href='./login_form.php'>로그인하기</a></li>
                </ul>
                <a href='#' class='close'>닫기</a>



            ");
                
            $sql = "update member set pass=password('$ranpass') where id='$id' and name='$name' and hp='$hp'"; // 임시패스워드로 비밀번호를 수정해준다.
            $result = mysqli_query( $connect, $sql);
        }
       
       
    }

    mysqli_close($connect);
?>


<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>비밀번호 찾기</title>
</head>
<body>
    
</body>
</html>
<?
    session_start();
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

    // $userid = $_SESSION['$userid']
    // $userid = $_SESSION['$username']
    // $userid = $_SESSION['$usernick']
    // $userid = $_SESSION['$userlevel']
?>
<meta charset="utf-8">

<?
    include "../lib/dbconn.php";

    $sql = "delete from member where id='$userid'";
    // $sql .= "nick='$nick', hp='$hp', email='$email', regist_day='$regist_day' where id='$userid'";

    mysqli_query( $connect, $sql);

    
    // 세션변수 전부 날리기
    unset($_SESSION['userid']); //세션변수 삭제->로그아웃
    unset($_SESSION['username']);
    unset($_SESSION['usernick']);
    unset($_SESSION['userlevel']);

    mysqli_close($connect);                // DB 연결 끊기
    echo "
        <script>
            window.alert('회원 탈퇴 되었습니다.');
            location.href = '../index.html';
        </script>
    ";
?>
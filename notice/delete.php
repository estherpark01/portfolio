<?
    session_start();
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);


    // $num (프라이머리 키)
    // $page
    // $liststyle

    include "../lib/dbconn.php";

    $sql = "delete from notice where num = $num";
    mysqli_query( $connect, $sql);

    mysqli_close($connect); 

    echo "
        <script>
            location.href = 'list.php?page=$page&liststyle=$liststyle';
        </script>
    ";
?>
<?
    session_start();
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

    include "../lib/dbconn.php";

    $sql = "select * from $table where num = $num";
    $result = mysqli_query( $connect, $sql);

    $row = mysqli_fetch_array($result);

    $copied_name[0] = $row["file_copied_0"];
    $copied_name[1] = $row["file_copied_1"];
    $copied_name[2] = $row["file_copied_2"];

    for ($i=0; $i<3; $i++)
    {
        if ($copied_name[$i])       //첨부파일이 있을 때
        {
            $image_name = "./data/".$copied_name[$i];
            unlink($image_name);    //첨부된 파일 삭제
        }
    }

    $sql = "delete from $table where num = $num";
    mysqli_query( $connect, $sql);

    mysqli_close($connect);   

    echo "
        <script>
            location.href = 'list.php?table=$table';
        </script>
    ";
?>
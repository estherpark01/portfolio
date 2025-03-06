<meta charset="utf-8">
<?
   
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

    // $id = $_POST['id'];
    //$id='a';

    if(!$id)
    {
        echo "
            <span class='fail'>아이디를 입력하세요.</span>
            <script>
                $('#id').parent().parent('dl').removeClass('success');
                $('#id').parent().parent('dl').addClass('fail');
            </script>
        ";
        // echo "<span class='fail'>아이디를 입력하세요.</span>";
    }
    else if(strpos($id, ' ') !== false)     //strpos: 공백 검사
    {
        echo "
            <span class='fail'>공백을 포함하지 않은 아이디를 입력하세요.</span>
            <script>
                $('#id').parent().parent('dl').removeClass('success');
                $('#id').parent().parent('dl').addClass('fail');
            </script>
        ";

    }
    else if(strlen($id) < 6){
        echo "
            <span class='fail'>6자 이상의 아이디를 입력하세요.</span>
            <script>
                $('#id').parent().parent('dl').removeClass('success');
                $('#id').parent().parent('dl').addClass('fail');
            </script>
        ";
    }
    else
    {
        include "../lib/dbconn.php";    // DB연결

        $sql = "select * from member where id='$id'";

        $result = mysqli_query( $connect, $sql);
        $num_record = mysqli_num_rows($result); //검색된 레코드 개수


        if ($num_record)    //1:참, 0:거짓
        {
            echo "
                <span class='fail'>중복되는 아이디입니다.</span>
                <script>
                    $('#id').parent().parent('dl').removeClass('success');
                    $('#id').parent().parent('dl').addClass('fail');
                </script>
            ";
        }
        else
        {
            echo "
                <span class='success'>사용가능한 아이디입니다.</span>
                <script>
                    $('#id').parent().parent('dl').removeClass('fail');
                    $('#id').parent().parent('dl').addClass('success');
                </script>
            ";
        }
    
        mysqli_close($connect);   
    }

?>
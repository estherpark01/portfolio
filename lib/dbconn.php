<?
    $connect=mysqli_connect( "localhost", "pe", "1234", "pe_db") or  
        die( "SQL server에 연결할 수 없습니다.");

        mysqli_select_db($connect , "pe_db");
?>
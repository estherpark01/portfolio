﻿<meta charset="utf-8">
<?
 session_start(); 
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);

   
   // $nick = $_POST['nick'];


   if(!$nick) 
   {
      echo "
         <span class='fail'>닉네임을 입력하세요.</span>
         <script>
             $('#nick').parent().parent('dl').removeClass('success');
             $('#nick').parent().parent('dl').addClass('fail');
         </script>
      ";
   }
   else if(strpos($nick, ' ') !== false)
   {
       echo "
         <span class='fail'>공백을 포함하지 않은 닉네임을 입력하세요.</span>
         <script>
             $('#nick').parent().parent('dl').removeClass('success');
             $('#nick').parent().parent('dl').addClass('fail');
         </script>
       ";
   }
   else
   {
      include "../lib/dbconn.php";
 
      $sql = "select * from member where nick='$nick' ";

      $result = mysqli_query( $connect, $sql);
      $num_record = mysqli_num_rows($result);

      if ($num_record)
      {
       
         echo "
            <span class='fail'>이미 존재하는 닉네임입니다.</span>
            <script>
                $('#nick').parent().parent('dl').removeClass('success');
                $('#nick').parent().parent('dl').addClass('fail');
            </script>
         ";
      }
      else
      {
         echo "
            <span class='success'>사용가능한 닉네임입니다.</span>
            <script>
                $('#nick').parent().parent('dl').removeClass('fail');
                $('#nick').parent().parent('dl').addClass('success');
            </script>
         ";
      }
		 
      mysqli_close($connect);   
   }
?>
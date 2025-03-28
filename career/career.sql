
create table download (
   num int not null auto_increment,
   id char(15) not null,
   name  char(10) not null,
   nick  char(10) not null,
   subject char(100) not null,
   content text not null,
   regist_day char(20),
   hit int,
   file_name_0 char(40),
   file_name_1 char(40),
   file_name_2 char(40),
   file_name_3 char(40),
   file_name_4 char(40),
   file_copied_0 char(30),
   file_copied_1 char(30),
   file_copied_2 char(30),
   file_copied_3 char(30),
   file_copied_4 char(30), 
   -- 파일 유형에 따라 다운로드 방법이 다름
   file_type_0 char(30),      
   file_type_1 char(30),
   file_type_2 char(30),
   file_type_3 char(30),
   file_type_4 char(30),
   primary key(num)
);
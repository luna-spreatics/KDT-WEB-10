-- DCL

-- 현재 계정의 권한 확인
show grants;

-- 존재하는 계정 확인
select * from mysql.user;

-- 계정 생성
create user 'user2'@'localhost' identified by '4321';

-- 권한 삭제
revoke privileges on *.* from 'user2'@'localhost';

-- 계정 삭제
drop user 'user2'@'localhost';

-- 계정 수정 (비밀번호 변경)
alter user 'user'@'localhost' identified by '1234';

-- 저장
-- 현재 사용중인 MySQL의 캐시를 지우고 새로운 설정을 적용하기 위해 사용
flush privileges;
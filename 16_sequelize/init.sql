-- [공통]
-- 데이터베이스 목록 보기
SHOW databases;

-- 데이터베이스 선택
USE sesac;

-- [DDL]
-- 테이블 생성
DROP TABLE visitor;
CREATE TABLE visitor (
  id INT NOT NULL PRIMARY KEY auto_increment,
  name VARCHAR(10) NOT NULL,
  comment MEDIUMTEXT
);

-- 테이블 구조 확인
DESC visitor;

-- [DML]
-- 테이블 데이터 조회 (Read)
SELECT * FROM visitor;

-- 테이블 데이터 추가 (Cerate)
INSERT INTO visitor (name, comment) VALUES("홍길동", "내가 왔다.");
INSERT INTO visitor (name, comment) VALUES("이찬혁", "으라차차");

-- 테이블 데이터 수정 (Update)
UPDATE visitor SET comment = '으라차차' WHERE id = 2;

-- 테이블 데이터 삭제 (Delete)
DELETE FROM visitor WHERE id >=17;


-- [DCL]
-- MySQL 사용자 추가하기
CREATE USER 'user'@'%' IDENTIFIED BY '1234'; 
-- user 계정에 DB 권한 부여 (모든 DB에 접근 가능하도록)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
-- 현재 사용중인 MySQL 캐시를 지우고 새로운 설정 적용
FLUSH PRIVILEGES;

-- MySQL 비번 변경하고 싶다면?
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '비밀번호';


-- ###########################################
show databases;
use kdt;
show tables;

-- 만약) visitor2로 테스트 한다면..?
-- visitor2 테이블 만들고 테스트 해야함
-- nor, no such table error 발생
CREATE TABLE visitor2 (
  id INT NOT NULL PRIMARY KEY auto_increment,
  name VARCHAR(10) NOT NULL,
  comment MEDIUMTEXT
);
SELECT * FROM visitor2;

-- [user 실습] 새로운 데이터베이스 생성
CREATE TABLE user (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  userid VARCHAR(20) NOT NULL,
  name VARCHAR(10) NOT NULL,
  pw VARCHAR(20) NOT NULL
);
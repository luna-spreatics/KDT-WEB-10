-- [공통]
-- 데이터베이스 목록 보기
SHOW databases;

-- 데이터베이스 선택
USE kdt;

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
-- MySQL 비번 변경하고 싶다면? (mysql 모듈 사용시, 아래 sql문으로 비밀번호의 플러그인을 
-- caching_sha2_password 에서 mysql_native_password 로 다운시켜주는 것)
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '비밀번호';


-- 생성된 user 확인

select * from mysql.user;

-- ========================================
-- user 계정 생성하기
-- mysql_native_password: mysql 비밀번호 암호화 방식 중 하나
-- mysql 8부터 기본값이 caching_sha2_password로 변경됨
-- caching_sha2_password로 사용하려면 mysql2 모듈 이용하기
CREATE USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '1234'; 
-- user 계정에 모든 권한 부여
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
-- 현재 사용중인 mysql 캐시 지우고 새로운 설정 적용
FLUSH PRIVILEGES;
-- 생성된 계정 확인
SELECT host, user from mysql.user;


-- https://www.lesstif.com/dbms/mysql-2054-mysql-8-authentication-policy-89556039.html
-- http://minsql.com/mysql8/C-2-A-authentificationPlugin/
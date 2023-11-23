-- 데이터베이스: 데이터의 집합
-- DBMS: 데이터베이스를 운영/관리하는 프로그램 (ex. MySQL)
-- 테이블: 하나 이상의 열과 행으로 구성된 데이터베이스의 최소 단위
-- SQL: RDBMS에서 사용되는 언어 (데이터베이스를 구축, 관리, 활용하기 위한 언어)
-- 참고! SQL은 대소문자를 구별하지 않음
-- 명령어를 구분하기 쉽게 하기 위해 대문자로 작성하는 것(필수는 X)
-- 단, 데이터베이스명, 테이블명 같은 경우 윈도우에서는 대소문자를 구분하지 않지만,
-- 그 외 리눅스 환경의 경우 대소문자를 구분함 (주의 필요)

-- DDL (Data Definition Language)
-- 데이터베이스, 테이블을 정의하는 언어

-- [Database 관련 명령어]
-- 1. Database 생성
create database kdt default character set utf8 collate utf8_general_ci;

-- 2. Database 목록 조회
show databases;

-- 3. Database 사용 선언
use kdt;

-- 4. Database 삭제
drop database kdt;

-- [Table 관련 명령어]
-- 1. 테이블 생성
-- 제약조건 ("옵션")
-- NOT NULL: NULL 허용 X
-- AUTO_INCREMENT: 자동 숫자 증가, 테이블에 데이터 추가할 때마다 자동으로 숫자 증가 
-- PRIMARY KEY: 기본키 (중복값 허용X, NULL 허용X) -> 하나의 테이블당 하나만!!
-- DEFAULT 기본값: 특정 속성의 기본 값 설정
-- UNIQUE: 중복 허용X, NULL 허용 -> 하나의 테이블당 여러개 가능!!
create table product (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);

-- 2. 테이블 목록 확인
-- 현재 사용중인 데이터베이스의 모든 테이블 조회
show tables;

-- 3. 테이블 구조 확인
-- 테이블의 컬럼 정보 (자료형, NULL 여부, KEY, DEFAULT 등)
desc product;

-- 4. 테이블 삭제
-- drop: 테이블 존재 자체를 없앰
drop table product;
-- truncate: 테이블 구조만 남겨놓고 모든 행 삭제
truncate table product;

-- 5. 테이블 정의 수정
-- 이미 테이블을 만들었고, 테이블에 데이터가 추가되었을 때
-- 컬럼 정보가 바뀌어야 하는 경우 사용

-- 5-1. 컬럼 추가
alter table product add new_column date;

-- 5-2. 컬럼 수정
alter table product modify new_column int;
alter table product change new_column new_column2 int; -- 컬럼명 변경

-- 5-3. 컬럼 삭제
alter table product drop new_column2;














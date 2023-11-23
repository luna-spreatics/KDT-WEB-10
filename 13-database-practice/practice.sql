-- 공통
SHOW DATABASES;
USE kdt;
SHOW TABLES;

DROP TABLE member;

-- 실습1. SQL - DDL
CREATE TABLE member (
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age INT,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2) DEFAULT 'x'
);

DESC member;


-- 실습2. SQL - DDL
-- id 컬럼 값 형식 변경
ALTER TABLE member MODIFY id VARCHAR(10); 
-- age 컬럼 삭제
ALTER TABLE member DROP age; 
-- interest 컬럼 추가
ALTER TABLE member ADD interest VARCHAR(100); 


-- 실습3. CREATE
CREATE TABLE user(
	id VARCHAR(10) NOT NULL PRIMARY KEY,
	pw VARCHAR(20) NOT NULL,
	name VARCHAR(5) NOT NULL,
	gender ENUM('F','M', '') DEFAULT '',
	birthday DATE NOT NULL,
	age INT(3) NOT NULL DEFAULT 0
);

-- 실습4. INSERT
INSERT INTO user( id, pw, name, gender, birthday, age ) VALUES( 'hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33 );
INSERT INTO user( id, pw, name, gender, birthday, age ) VALUES( 'sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31 );
INSERT INTO user( id, pw, name, gender, birthday, age ) VALUES( 'power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53 );
INSERT INTO user( id, pw, name, gender, birthday, age ) VALUES( 'hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39 );
INSERT INTO user( id, pw, name, gender, birthday, age ) VALUES( 'widowmaker', '38ewifh3', '위도우', '', '1986-06-27', 47 );
INSERT INTO user( id, pw, name, gender, birthday, age ) VALUES( 'dvadva', 'k3f3ah', '송하나', 'F', '1994-06-03', 22 );
INSERT INTO user( id, pw, name, gender, birthday, age ) VALUES( 'jungkrat', '4ifha7f', '정크랫', 'M', '1975-11-11', 24 );

-- 실습5. SELECT
-- 1. 모든 회원목록을 가져오는데, 이때 birtday 컬럼의 값을 기준으로 오름차순 정렬하여 가져오시오.
SELECT * FROM user ORDER BY birthday ASC;
-- 2. 회원 목록 중 gender 컬럼의 값이 "M" 인 회원목록을 가져오는데, 이때 name 컬럼의 값을 기준으로 내림차순 정렬하여 가져오시오.
SELECT * FROM user WHERE gender='M' ORDER BY name DESC;
-- 3. 1990 년대에 태어난 회원의 id, name 컬럼을 가져와 목록으로 보여주시오.
SELECT id, name FROM user WHERE birthday LIKE '199%';
-- 4. 6월생 회원의 목록을 birthday 기준으로 오름차순 정렬하여 가져오시오.
SELECT * FROM user WHERE birthday LIKE '%-06-%' ORDER BY birthday ASC;
-- 5. gender 컬럼의 값이 "M" 이고, 1970 년대에 태어난 회원의 목록을 가져오시오.
SELECT * FROM user WHERE gender='M' AND birthday LIKE '197%';
-- 6. 모든 회원목록 중 age를 기준으로 내림차순 정렬하여 가져오는데, 그때 처음 3개의 레코드만 가져오시오.
SELECT * FROM user ORDER BY age DESC LIMIT 3;
-- 7. 모든 회원 목록 중 나이가 25 이상 50 이하인 회원의 목록을 출력하시오.
SELECT * FROM user WHERE age BETWEEN 25 and 50;
SELECT * FROM user WHERE age >= 25 AND age <= 50;
-- 8. id 컬럼의 값이 hong1234 인 레코드의 pw 컬럼의 값을 12345678로 변경하시오.
UPDATE user SET pw='12345678' WHERE id='hong1234';
-- 9. id 컬럼의 값이 jungkrat인 레코드를 삭제하시오.
DELETE FROM user WHERE id='jungkrat';


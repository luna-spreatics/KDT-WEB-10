-- 사용자 권한 부여 명령어
GRANT permission_type ON dbname.table_name TO username@host IDENTIFIED BY 'my_password' [with grant option];
-- 예제 (호스트 : 로컬호스트)
GRANT ALL PRIVILEGES ON testDB.testTable TO myuser@localhost IDENTIFIED BY 'testPassword';
-- 예제 (호스트 : 원격 접속)
GRANT ALL PRIVILEGES ON testDB.testTable TO myuser@'%' IDENTIFIED BY 'testPassword';
-- 예제 (호스트 : 아이피)
GRANT ALL PRIVILEGES ON testDB.testTable TO myuse@192.168.0.100 IDENTIFIED BY 'testPassword';

-- 계정 생성 (1)
CREATE user '[계정명]'@'[접속경로]' IDENTIFIED BY '[비밀번호]';
FLUSH PRIVILEGES;

CREATE user user1@localhost IDENTIFIED BY '[비밀번호]';
FLUSH PRIVILEGES;

-- 계정 생성 (2)
INSERT INTO mysql.user( user, host, password ) VALUES ( '[계정명]' , '[접속경로]' , password('[비
밀번호]')); 
FLUSH PRIVILEGES;

UPDATE mysql.user SET password = password('[비밀번호]') WHERE user='root';
FLUSH PRIVILEGES;

DROP user '[계정명]'@'[접속경로]';
FLUSH PRIVILEGES;

-- 권한 확인
SHOW GRANTS;
SHOW GRANTS FOR '[계정명]'@'[접속경로]';

-- // 권한 설정
GRANT PRIVILEGES ON [DB명].[TABLE명] TO '[계정명]'@[접속경로] IDENTIFIED BY PASSWORD '[비밀번호]' WITH GRANT OPTION;

-- // 모든 권한 허용
GRANT ALL PRIVILEGES ON *.* TO 'root'@'192.168.94.%' WITH GRANT OPTION;

-- // 특정 테이블의 특정 컬럼 조회 권한 허용
GRANT SELECT(id, name), INSERT ON [DB명].[TABLE명] TO 'root'@'localhost';

-- // 권한 삭제
REVOKE PRIVILEGES ON [DB명].[TABLE명] FROM '[계정명]'@'[접속경로]';
const mysql = require('mysql2');

// DB 연결
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'kdt',
});

/**
 * creatConnection vs createPool
 * // createConnection은 요청마다 연결을 생성하고 해제하지만 createPool은 연결을 재사용함
    const pool = mysql.createPool({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'kdt',
    })
 */

// 처음에 DB에 직접 값 넣는거 보여주고, DB 데이터 삭제 후, 코드 추가해서 보여주기
exports.initializeTable = (cb) => {
  const createQuery = `
    CREATE TABLE IF NOT EXISTS visitor (
      id INT NOT NULL PRIMARY KEY auto_increment,
      name VARCHAR(10) NOT NULL,
      comment MEDIUMTEXT
    )
  `;

  const selectQuery = `
    SELECT COUNT(*) as count FROM visitor
  `;

  const insertQuery = `
    INSERT INTO visitor (name, comment) VALUES
      ("홍길동", "내가 왔다."),
      ("이찬혁", "으라차차")
  `;

  conn.query(createQuery, (err, rows) => {
    if (err) throw err;

    conn.query(selectQuery, (err, rows) => {
      if (err) throw err;

      const result = rows[0].count;

      if (result === 0) {
        conn.query(insertQuery, (err, rows) => {
          if (err) throw err;
          console.log('insert data');
        })
      }
      cb(rows);
    })
  })
}

// (2) GET /visitors => localhost:PORT/visitors
exports.getVisitors = (cb) => {
  // [Before]
  // return [
  //   { id: 1, name: '홍길동', comment: '내가 왔다.' },
  //   { id: 2, name: '이찬혁', comment: '으라차차' },
  // ];

  // [After]
  conn.query(`SELECT * FROM visitor`, (err, rows) => {
    // 에러처리를 한다면?
    try {
      if (err) {
        throw err;
      }

      console.log('Visitor.js: ', rows);
      cb(rows);
    } catch (err) {
      console.log(err);
      cb(false);
    }

  });
};

// (6) GET /visitor => localhost:PORT/visitor?id=N
exports.getVisitor = (id, cb) => {
  const sql = 'SELECT * FROM visitor WHERE id = ?';
  conn.query(sql, [id], (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('Visitor.js: ', rows);
    cb(rows[0]);
  });
};

// *(6) GET /visitor/:id => localhost:PORT/visitor/:id
exports.getVisitor2 = (id, cb) => {
  const sql = 'SELECT * FROM visitor WHERE id = ?';
  conn.query(sql, [id], (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('Visitor.js: ', rows);
    cb(rows[0]);
  });
};

// (3) POST /visitor/write => localhost:PORT/visitor/write
exports.postVisitor = (data, cb) => {
  console.log(data);
  const sql = 'INSERT INTO visitor (name, comment) VALUES (?, ?)';

  const values = [data.name, data.comment]
  conn.query(sql, values, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('Visitor.js: ', rows);
    cb(rows.insertId);
  },
  );
};

// (4) PATCH /visitor/edit => localhost:PORT/visitor/edit
exports.patchVisitor = (data, cb) => {
  console.log(data);
  const sql = 'UPDATE visitor SET name = ?, comment = ? WHERE id = ?';
  const values = [data.name, data.comment, data.id];
  conn.query(sql, values, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('Visitor.js: ', rows);
    cb(rows); // true, rows(=true)
  },
  );
};

// (5) DELETE /visitor/delete => localhost:PORT/visitor/delete
exports.deleteVisitor = (id, cb) => {
  console.log(id);
  const sql = 'DELETE FROM visitor WHERE id = ?';
  conn.query(sql, [id], (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('Visitor.js: ', rows);
    cb(true); // true, rows(=true)
  });
};


// -----------------------------------------------------------
// promise 형태로 반환해서 컨트롤러에서 콜백함수 대신 프로미스 사용하기

// v1) 프로미스 객체로 만들어서 반환
/*
exports.getVisitors = () => {
    return new Promise((resolve, reject) => {
        try {
            conn.query(`SELECT * FROM visito`, (err, rows) => {
                if (err) {
                    // throw err;
                    reject(err);
                }
                console.log('Visitor.js >', rows);
                resolve(rows);
            })
        } catch (err) {
            console.log('Visitor cathch >', err);
            reject(err);
        }
    })
}
*/

// v2) connection 객체를 프로미스 커넥션 형태로 변환
/*
const connPromise = conn.promise();

exports.getVisitors = async () => {
  try {
    const [rows] = await connPromise.query(`SELECT * FROM visitor`);
    return rows;
  } catch (err) {
    console.log('Visitor cathch >', err);
    throw err;
  }
}
*/
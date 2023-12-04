const mysql = require('mysql2');

// DB 연결
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'kdt',
});

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
  conn.query(`SELECT * FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('Visitor.js: ', rows);
    cb(rows[0]);
  });
};

// *(6) GET /visitor/:id => localhost:PORT/visitor/:id
exports.getVisitor2 = (id, cb) => {
  conn.query(`SELECT * FROM visitor WHERE id=${id}`, (err, rows) => {
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
  conn.query(
    `INSERT INTO visitor(name, comment) VALUES('${data.name}', '${data.comment}');`,
    (err, rows) => {
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
  /**
 * // Prepared Statements를 사용하여 SQL 인젝션 방지
  const query = 'UPDATE visitor SET name=?, comment=? WHERE id=?';
  const values = [data.name, data.comment, data.id];

  conn.query(query, values, (err, rows) => {
    if (err) {
      console.error('Error during update query: ', err);
      throw err;
    }

    console.log('Visitor.js: ', rows);
    cb(null, rows); // 에러가 없을 경우 첫 번째 매개변수는 null
  });
 */
  conn.query(
    `UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id=${data.id}`,
    (err, rows) => {
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
  conn.query(`DELETE FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('Visitor.js: ', rows);
    cb(true); // true, rows(=true)
  });
};

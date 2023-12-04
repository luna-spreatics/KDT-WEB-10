// TODO: visitor 모델(-> 테이블 구조) 정의
// 시퀄라이즈 모델이랑 mysql table 연결
const Visitor = function (Sequelize, DataTypes) {
  // Sequelize는 model/index.js에서의 sequelize
  // DataTypes는 model/index.js에서의 Sequelize

  // Sequilize.define(param1, param2, param3)
  // param1: 모델 이름 설정
  // param2: 컬럼 정의
  // param3: 모델 옵션 정의
  const model = Sequelize.define(
    'visitor', // param1: 모델 이름 설정
    // 15에서 진행했던 테이블과 구분하기 위해 2 숫자 붙여봄 (visitor2)
    // -> (조건)mysql에서 visitor2로 테이블 생성은 해주어야 함
    {
      id: {
        // id int not null primary key auto_increment
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        // name varchar(10) not null
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        // comment mediumtext
        type: DataTypes.TEXT('medium'),
      },
    }, // param2: 컬럼 정의
    {
      tableName: 'visitor2', // 실제 DB 테이블 이름 명시, 값을 안주면 param1 + s 값으로 테이블 생성
      // freezeTableName: true, // 모델 이름 그대로 테이블 이름 고정!!
      // - Sequelize를 이용하여 모델을 정의하면 기본적으로 모델 이름에 다 s를 붙이려고 든다.
      //    즉, Sequelize가 자동으로 sql문으로 변환할 때 insert into visitors ~~~ 라고 바꿈
      //    freezeTableName를 true로 지정하면 복수형태로 바꾸지 않고 내가 지정한 모델 이름 그대로 가겠다라는 뜻.
      // - charset, collate는 db 자체가 한글 인코딩이 가능하도록 만들어뒀기 때문에 따로 설정하지 않아도 됨!
      timestamps: false,
      // - 데이터가 추가되고 수정된 시간을 자동으로 컬럼으로 만들어서 기록함.
      //    -> 우리는 관련 컬럼을 만들어두지 않았으므로 false로 지정
    } // param3: 모델의 옵션 정의
  );

  return model;
};

module.exports = Visitor;

// *시퀄라이즈는 기본적으로 다음과 같이 사용
// - 모델 이름: 단수형
// - 테이블 이름: 복수형

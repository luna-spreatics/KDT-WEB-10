const User = function (Sequelize, DataTypes) {
  // Sequilize.define(param1, param2, param3)
  // param1: 모델(테이블) 이름 설정
  // param2: 컬럼 정의
  // param3: 모델 옵션 정의
  return Sequelize.define(
    'user', // param1: 모델(테이블) 이름 설정
    {
      // id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      // userid VARCHAR(20) NOT NULL,
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      // name VARCHAR(10) NOT NULL,
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      // pw VARCHAR(20) NOT NULL
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    }, // param2: 컬럼 정의
    {
      tableName: 'user',
      freezeTableName: true,
      timestamps: false,
    } // param3: 모델 옵션 정의
  );
};

module.exports = User;

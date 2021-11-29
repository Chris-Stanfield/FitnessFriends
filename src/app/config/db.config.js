

module.exports = {
  HOST: "ec2-3-226-134-153.compute-1.amazonaws.com",
  USER: "tuyzdizyzkxmec",
  PASSWORD: "501ac44f2b8da7a1c435c59b3c0bb8e3cb3b3595d593d08a7a3569785eda4072",
  DB:  "db890rvnm6jjqq",
  dialect: "postgres",
  ssl: {rejectUnauthorized: false},
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

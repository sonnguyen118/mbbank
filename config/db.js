import mysql from "serverless-mysql";

const pool = mysql({
  config: {
    host: "localhost",
    user: "root",
    password: "",
    port: 3308,
    database: "mb_bank",
  },
});

export { pool };

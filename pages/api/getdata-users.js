import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3308",
    database: "mb_bank",
    password: "",
  });
  try {
    const query = "SELECT * FROM account";
    const values = [];
    const [data] = await connection.execute(query, values);
    connection.end();

    res.status(200).json({ results: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

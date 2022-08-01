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
    // const values = {
    //   user_account: "Sonnguyen1",
    //   user_password: "123",
    //   user_name: "Sơn",
    //   user_mother: "root",
    //   user_power: "Quản trị viên",
    // };
    const values = ["Sonnguyen111", "123", "Sơn", "root", "Quản trị viên"];
    // const query = "INSERT INTO account SET ?";
    // ('Sonnguyen1','123','Ly ăn shit','root','Quản trị viên')
    const query =
      "INSERT INTO account (user_account, user_password, user_name, user_mother, user_power ) VALUE (?, ?, ?, ?, ?)";
    // const data = await connection.execute(query, values);
    // const values = [];
    const [data] = connection.execute(query, values);
    connection.end();
    res.status(200).json({ results: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

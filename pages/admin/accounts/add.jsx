import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/admin.layout";
import Link from "next/link";
import { useRouter } from "next/router";

const Upload = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [name, setName] = useState("");
  const [userpower, setUserpower] = useState("");

  const [addrtype, setAddrtype] = useState(["Quản trị viên", "Người biên tập"]);
  const Add = addrtype.map((Add) => Add);
  const handleAddrTypeChange = (e) => setUserpower(addrtype[e.target.value]);
  console.log(userpower);
  const submitHandle = () => {
    router.push({
      pathname: "/admin/accounts/create/meme",
      query: {
        username: username,
        password: password,
        name: name,
        mother: "root",
        userpower: userpower,
      },
    });
    // useEffect( () => {
    //   async function fetchData() {
    //     const connection = await mysql.createConnection({
    //       host: "localhost",
    //       user: "root",
    //       port: "3308",
    //       database: "mb_bank",
    //       password: "",
    //     });
    //   }
    //     fetchData();
    // }, [submitHandle]);
  };
  return (
    <AdminLayout>
      <div className="admin-group">
        <div className="admin-group-input">
          <label className="admin-group-input-label">
            Nhập vào tên tài khoản (Username)
          </label>
          <input
            type={"text"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="admin-group-input-input w-50"
          ></input>
          <label className="admin-group-input-label">
            Nhập vào mật khẩu (Password)
          </label>
          <input
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="admin-group-input-input w-50"
          ></input>
          <label className="admin-group-input-label">
            Nhập lại password (rePassword)
          </label>
          <input
            type={"password"}
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            className="admin-group-input-input w-50"
          ></input>
          <label className="admin-group-input-label">
            Nhập vào họ tên người dùng
          </label>
          <input
            type={"text"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="admin-group-input-input w-50"
          ></input>
          <label className="admin-group-input-label">Lựa chọn phân quyền</label>
          <select
            className="form-select w-50 mb-5"
            aria-label="Default select example"
            onChange={(e) => handleAddrTypeChange(e)}
          >
            <option selected>---Lựa chọn quyền của thành viên---</option>
            {Add.map((address, key) => (
              <>
                <option value={key}>{address}</option>
              </>
            ))}
          </select>

          <button className="admin-group-btn" onClick={submitHandle}>
            Lưu
          </button>
        </div>
        <div className="admin-footer ">
          <Link href={"/admin/accounts"}>
            <a className="admin-footer-item d-flex align-items-center">
              <i className="admin-footer-item fas fa-angle-double-right"></i>
              <p className="admin-footer-item ml-3">
                Đi tới danh sách người dùng
              </p>
            </a>
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Upload;

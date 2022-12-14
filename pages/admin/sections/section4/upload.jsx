import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/admin/admin.layout";
import Link from "next/link";

const Upload = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [name, setName] = useState("");
  const [userpower, setUserpower] = useState("");
  return (
    <AdminLayout>
      <div className="admin-group">
        <div className="admin-group-input">
          <label className="admin-group-input-label">
            Nhập vào tiêu đề sự kiện
          </label>
          <input type={"text"} className="admin-group-input-input"></input>
          <label className="admin-group-input-label">
            Nhập nội dung cự kiện
          </label>
          <input type={"text"} className="admin-group-input-input"></input>
          <label className="admin-group-input-label">
            Nhập vào Link dẫn tới sự kiện
          </label>
          <input type={"text"} className="admin-group-input-input"></input>
          <label className="admin-group-input-label">Tải lên hình ảnh</label>

          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
            className="admin-group-input-input-img"
          ></input>
          <button className="admin-group-btn">Lưu</button>
        </div>
        <div className="admin-footer ">
          <Link href={"/admin/sections/section4"}>
            <a className="admin-footer-item d-flex align-items-center">
              <i className="admin-footer-item fas fa-angle-double-right"></i>
              <p className="admin-footer-item ml-3">Đi tới danh sách sự kiện</p>
            </a>
          </Link>
          <Link href={"/admin/sections/section4/trash"}>
            <a className="admin-footer-item d-flex align-items-center">
              <i className="admin-footer-item fas fa-angle-double-right"></i>
              <p className="admin-footer-item ml-3">Đi tới thùng rác</p>
            </a>
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Upload;

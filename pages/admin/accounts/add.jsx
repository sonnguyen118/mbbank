import React from "react";
import AdminLayout from "../../components/admin/admin.layout";
import Link from "next/link";

const Upload = () => {
  return (
    <AdminLayout>
      <div className="admin-group">
        <div className="admin-group-input">
          <label className="admin-group-input-label">
            Nhập vào tên người dùng (Username)
          </label>
          <input type={"text"} className="admin-group-input-input w-50"></input>
          <label className="admin-group-input-label">
            Nhập vào mật khẩu (Password)
          </label>
          <input
            type={"password"}
            className="admin-group-input-input w-50"
          ></input>
          <label className="admin-group-input-label">
            Nhập lại password (rePassword)
          </label>
          <input
            type={"password"}
            className="admin-group-input-input w-50"
          ></input>
          <label className="admin-group-input-label">Lựa chọn phân quyền</label>
          <select
            className="form-select w-50 mb-5"
            aria-label="Default select example"
          >
            <option selected>Người biên tập</option>
            <option value="1">Admin</option>
            <option value="2">Vua</option>
            <option value="3">Chúa tể</option>
          </select>

          <button className="admin-group-btn">Lưu</button>
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

import React from "react";
import AdminLayout from "../../components/admin/admin.layout";
import Link from "next/link";

const Upload = () => {
  return (
    <AdminLayout>
      <div className="admin-group">
        <label className="admin-group-input-label">Thành phố / Tỉnh</label>
        <select
          className="form-select w-50 mb-5"
          aria-label="Default select example"
        >
          <option selected>Thành phố Hà Nội</option>
          <option value="1">Hà Nội</option>
          <option value="2">Huế</option>
          <option value="3">Nghệ An</option>
        </select>
        <div className="admin-group-input">
          <label className="admin-group-input-label">
            Nhập vào tên chi nhánh
          </label>
          <input type={"text"} className="admin-group-input-input w-50"></input>

          <button className="admin-group-btn">Lưu</button>
        </div>
        <div className="admin-footer ">
          <Link href={"/admin/sections/section5"}>
            <a className="admin-footer-item d-flex align-items-center">
              <i className="admin-footer-item fas fa-angle-double-right"></i>
              <p className="admin-footer-item ml-3">
                Đi tới danh sách chi nhánh
              </p>
            </a>
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Upload;

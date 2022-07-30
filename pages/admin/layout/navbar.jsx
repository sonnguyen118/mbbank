import React from "react";
import AdminLayout from "../../components/admin/admin.layout";

const NavbarChangeAdmin = () => {
  const menu = [
    "Tiện ích",
    "Ưu đãi",
    "Khám phá Hi Collection",
    "Đăng ký nhận thẻ",
  ];
  return (
    <AdminLayout>
      <div className="admin__change">
        <div className="admin__change-group">
          <p className="admin__change-group-title">
            Danh sách menu đề mục, bạn có thể thay đổi, không nên xóa vì ảnh
            hưởng tới cấu trúc layout của website.
          </p>
          {menu?.map((menu) => (
            <>
              <input
                defaultValue={menu}
                className="admin__change-group-input"
              ></input>
            </>
          ))}
          <button className="admin__change-group-btn">Lưu</button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default NavbarChangeAdmin;

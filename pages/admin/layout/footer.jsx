import React from "react";
import AdminLayout from "../../components/admin/admin.layout";

const FooterChangeAdmin = () => {
  const menu = [
    "1900 54 54 26",
    "VietnamMBBank",
    "www.mbbank.com.vn",
    "BẢN QUYỀN THUỘC NGÂN HÀNG TMPC QUÂN ĐỘI",
  ];
  return (
    <AdminLayout>
      <div className="admin__change">
        <div className="admin__change-group">
          <p className="admin__change-group-title">
            Danh sách nội dung chân trang, bạn có thể thay đổi, không nên xóa vì
            ảnh hưởng tới cấu trúc layout của website.
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

export default FooterChangeAdmin;

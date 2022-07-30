import React from "react";
import AdminLayout from "../../../components/admin/admin.layout";
import Link from "next/link";

const Trash = () => {
  const imgArray = [
    {
      title: "ảnh 1",
      src: "/section_1/section_1.jpg",
      user: "root",
      time: "18:00 13/07/1995",
    },
    {
      title: "ảnh 1",
      src: "/section_1/section_1.jpg",
      user: "root",
      time: "18:00 13/07/1995",
    },
    {
      title: "ảnh 1",
      src: "/section_1/section_1.jpg",
      user: "root",
      time: "18:00 13/07/1995",
    },
    {
      title: "ảnh 1",
      src: "/section_1/section_1.jpg",
      user: "root",
      time: "18:00 13/07/1995",
    },
    {
      title: "ảnh 1",
      src: "/section_1/section_1.jpg",
      user: "root",
      time: "18:00 13/07/1995",
    },
    {
      title: "ảnh 1",
      src: "/section_1/section_1.jpg",
      user: "root",
      time: "18:00 13/07/1995",
    },
  ];
  return (
    <AdminLayout>
      <div className="admin__change">
        <div className="card">
          <div className="card-header border-0">
            <h3 className="card-title">Ảnh trong slider đầu trang</h3>
            <p className="card-title-p">
              Lưu ý số lượng ảnh nên giới hạn dưới 10, quá số lượng nút chuyển
              slider sẽ tràn mất thẩm mỹ website
            </p>
            <div className="card-tools">
              <a href="#" className="btn btn-tool btn-sm">
                <i className="fas fa-bars" />
              </a>
            </div>
          </div>
          <div className="card-body table-responsive p-0">
            <table className="table table-striped table-valign-middle">
              <thead>
                <tr>
                  <th>Tiêu đề ảnh</th>
                  <th>Tên File</th>
                  <th>Người đăng</th>
                  <th>Thời gian đăng tải</th>
                  <th>Công cụ (Sửa, Xóa)</th>
                </tr>
              </thead>
              <tbody>
                {imgArray?.map((slider, index) => (
                  <>
                    <tr>
                      <td>{slider.title}</td>
                      <td>{slider.src.slice(11)}</td>
                      <td>{slider.user}</td>
                      <td>{slider.time}</td>
                      <td>
                        <a href="#" className="text-muted">
                          <i className="fas fa-pen"></i>
                        </a>
                        <a href="#" className="text-muted ml-4">
                          <i className="fas fa-trash-alt"></i>
                        </a>
                      </td>
                    </tr>
                  </>
                ))}
                <tr>
                  <td>
                    <a href="#" className="text-muted">
                      Tải lên ảnh mới
                      <i className="fas fa-folder-plus ml-3"></i>
                    </a>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <Link href={"/admin/sections/section4"}>
                      <a className="text-muted">
                        Quay trở lại danh sách hình ảnh
                        <i className="fas fa-angle-double-right ml-3"></i>
                      </a>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Trash;

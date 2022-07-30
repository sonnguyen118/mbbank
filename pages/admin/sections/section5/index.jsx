import React from "react";
import AdminLayout from "../../../components/admin/admin.layout";
import Link from "next/link";

const Section5 = () => {
  const title = "Khám phá bộ sưu tập Hi Collection";
  const imgArray = [
    {
      title: "Cancer",
      image_card: "/section_1/section_1.jpg",
      image_popub: "/section_1/section_1.jpg",
      user: "root",
      time: "18:00 13/07/1995",
    },
    {
      title: "Cancer",
      image_card: "/section_1/section_1.jpg",
      image_popub: "/section_1/section_1.jpg",
      user: "root",
      time: "18:00 13/07/1995",
    },
    {
      title: "Cancer",
      image_card: "/section_1/section_1.jpg",
      image_popub: "/section_1/section_1.jpg",
      user: "root",
      time: "18:00 13/07/1995",
    },
    {
      title: "Cancer",
      image_card: "/section_1/section_1.jpg",
      image_popub: "/section_1/section_1.jpg",
      user: "root",
      time: "18:00 13/07/1995",
    },
  ];
  return (
    <AdminLayout>
      <div className="admin__change">
        <div className="admin__change-group w-100">
          <p className="admin__change-group-title">
            Chỉnh sửa nội dung của phần Section 5 gồm tiêu đề và các thành phần
            của Crad.
          </p>
          <input
            defaultValue={title}
            className="admin__change-group-input d-inline"
          ></input>
          <button className="admin__change-group-btn mg-50">Lưu</button>
        </div>
        <div className="card-header border-0">
          <h3 className="card-title">Ảnh trong slider</h3>
          <p className="card-title-p">Lưu ý:</p>
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
                <th>STT</th>
                <th>Tiêu đề Card</th>
                <th>Người đăng</th>
                <th>Thời gian đăng tải</th>
                <th>Công cụ (Sửa, Xóa)</th>
              </tr>
            </thead>
            <tbody>
              {imgArray?.map((slider, index) => (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{slider.title}</td>
                    <td>{slider.user}</td>
                    <td>{slider.time}</td>
                    <td>
                      <Link href={"/admin/sections/section4/repair"}>
                        <a className="text-muted">
                          <i className="fas fa-pen"></i>
                        </a>
                      </Link>
                      <a href="#" className="text-muted ml-4">
                        <i className="fas fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                </>
              ))}
              <tr>
                <td>
                  <Link href={"/admin/sections/section5/upload"}>
                    <a className="text-muted">
                      Tải lên Card mới
                      <i className="fas fa-folder-plus ml-3"></i>
                    </a>
                  </Link>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Link href={"/admin/sections/section5/trash"}>
                    <a className="text-muted">
                      Đi tới thùng rác
                      <i className="fas fa-trash ml-3"></i>
                    </a>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav aria-label="..." className="mt-5">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1">
                Previous
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </AdminLayout>
  );
};

export default Section5;

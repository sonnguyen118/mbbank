import React from "react";
import AdminLayout from "../../components/admin/admin.layout";
import Link from "next/link";

const Table = () => {
  const title = "Ưu đãi bất tận";
  const imgArray = [
    {
      title: "PGD Đống Đa",
      src: "/section_1/section_1.jpg",
      content: "Giảm giá mạnh nhất tháng 2",
      user: "root",
      time: "18:00 13/07/1995",
    },
    {
      title: "PGD Đống Đa",
      src: "/section_1/section_1.jpg",
      content: "Giảm giá mạnh nhất tháng 2",
      user: "root",
      time: "18:00 13/07/1995",
    },
    {
      title: "PGD Đống Đa",
      src: "/section_1/section_1.jpg",
      content: "Giảm giá mạnh nhất tháng 2",
      user: "root",
      time: "18:00 13/07/1995",
    },
    {
      title: "PGD Đống Đa",
      src: "/section_1/section_1.jpg",
      content: "Giảm giá mạnh nhất tháng 2",
      user: "root",
      time: "18:00 13/07/1995",
    },
    {
      title: "PGD Đống Đa",
      src: "/section_1/section_1.jpg",
      content: "Giảm giá mạnh nhất tháng 2",
      user: "root",
      time: "18:00 13/07/1995",
    },
    {
      title: "Mua ngay",
      src: "/section_1/section_1.jpg",
      content: "Giảm giá mạnh nhất tháng 2",
      user: "root",
      time: "18:00 13/07/1995",
    },
    {
      title: "Mua ngay",
      src: "/section_1/section_1.jpg",
      content: "Giảm giá mạnh nhất tháng 2",
      user: "root",
      time: "18:00 13/07/1995",
    },
    {
      title: "Mua ngay",
      src: "/section_1/section_1.jpg",
      content: "Giảm giá mạnh nhất tháng 2",
      user: "root",
      time: "18:00 13/07/1995",
    },
  ];
  return (
    <AdminLayout>
      <div className="admin__change">
        <div className="admin__change-group w-100">
          <select
            className="form-select w-50"
            aria-label="Default select example"
          >
            <option selected>Thành phố Hà Nội</option>
            <option value="1">Hà Nội</option>
            <option value="2">Huế</option>
            <option value="3">Nghệ An</option>
          </select>
        </div>
        <div className="card-header border-0 mt-5 mb-3">
          <h3 className="card-title">
            Dữ liệu các chi nhánh theo cơ sở Hà Nội
          </h3>
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
                <th>Tên chi nhánh</th>
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
                      <Link href={"/admin/table/repair"}>
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
                  <Link href={"/admin/table/upload"}>
                    <a className="text-muted">
                      Thêm chi nhánh
                      <i className="fas fa-folder-plus ml-3"></i>
                    </a>
                  </Link>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
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

export default Table;

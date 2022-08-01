import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/admin.layout";
import Link from "next/link";

const Accounts = () => {
  const [listAccounts, setlistAccounts] = useState([]);
  useEffect(() => {
    async function getDataAccount() {
      const apiAccount = `http://localhost:3000/api/getdata-users`;
      const response = await fetch(apiAccount);
      const res = await response.json();
      console.log(res);
      setlistAccounts(res.results);
      console.log(listAccounts);
    }
    getDataAccount();
  }, []);
  console.log(listAccounts, "listAccounts");
  return (
    <AdminLayout>
      <div className="admin__change">
        <div className="card-header border-0 mt-5 mb-3">
          <h3 className="card-title">
            Dữ liệu các quản trị viên và người dùng website
          </h3>
        </div>
        <div className="card-body table-responsive p-0">
          <table className="table table-striped table-valign-middle">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên tài khoản</th>
                <th>Tên người dùng</th>
                <th>Được tạo bởi</th>
                <th>Quyền hạn</th>
                <th>Thời gian tạo</th>
                <th>Công cụ (Sửa, Xóa)</th>
              </tr>
            </thead>
            <tbody>
              {listAccounts?.map((listAccount, index) => (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{listAccount.user_account}</td>
                    <td>{listAccount.user_name}</td>
                    <td>{listAccount.user_mother}</td>
                    <td>{listAccount.user_power}</td>
                    <td>{listAccount.time}</td>
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
                  <Link href={"/admin/accounts/add"}>
                    <a className="text-muted">
                      Thêm người dùng
                      <i className="fas fa-folder-plus ml-3"></i>
                    </a>
                  </Link>
                </td>
                <td></td>
                <td></td>
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

export default Accounts;

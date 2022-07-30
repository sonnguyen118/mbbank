import React from "react";
import AdminLayout from "../components/admin/admin.layout";

const AdminPage = () => {
  return (
    <AdminLayout>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-0">
                  <div className="d-flex justify-content-between">
                    <h3 className="card-title">
                      Lượt người dùng ghé thăm Website
                    </h3>
                    <a href="javascript:void(0);">Lượt View</a>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex">
                    <p className="d-flex flex-column">
                      <span className="text-bold text-lg">820</span>
                      <span>Lượt ghé thăm website</span>
                    </p>
                    <p className="ml-auto d-flex flex-column text-right">
                      <span className="text-success">
                        <i className="fas fa-arrow-up" /> 12.5%
                      </span>
                      <span className="text-muted">Kể từ tuần trước</span>
                    </p>
                  </div>
                  {/* /.d-flex */}
                  <div className="position-relative mb-4">
                    <canvas id="visitors-chart" height={200} />
                  </div>
                  <div className="d-flex flex-row justify-content-end">
                    <span className="mr-2">
                      <i className="fas fa-square text-primary" /> Tuần trước
                    </span>
                    <span>
                      <i className="fas fa-square text-gray" /> Tuần này
                    </span>
                  </div>
                </div>
              </div>
              {/* /.card */}
              <div className="card">
                <div className="card-header border-0">
                  <h3 className="card-title">Bài đăng</h3>
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
                        <th>Bài đăng</th>
                        <th>Người đăng</th>
                        <th>Thời gian đăng tải</th>
                        <th>Xem chi tiết</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Some Product</td>
                        <td>$13 USD</td>
                        <td>
                          <small className="text-success mr-1">
                            <i className="fas fa-arrow-up" />
                            12%
                          </small>
                          12,000 Sold
                        </td>
                        <td>
                          <a href="#" className="text-muted">
                            <i className="fas fa-search" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Another Product</td>
                        <td>$29 USD</td>
                        <td>
                          <small className="text-warning mr-1">
                            <i className="fas fa-arrow-down" />
                            0.5%
                          </small>
                          123,234 Sold
                        </td>
                        <td>
                          <a href="#" className="text-muted">
                            <i className="fas fa-search" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Amazing Product</td>
                        <td>$1,230 USD</td>
                        <td>
                          <small className="text-danger mr-1">
                            <i className="fas fa-arrow-down" />
                            3%
                          </small>
                          198 Sold
                        </td>
                        <td>
                          <a href="#" className="text-muted">
                            <i className="fas fa-search" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Perfect Item
                          <span className="badge bg-danger">NEW</span>
                        </td>
                        <td>$199 USD</td>
                        <td>
                          <small className="text-success mr-1">
                            <i className="fas fa-arrow-up" />
                            63%
                          </small>
                          87 Sold
                        </td>
                        <td>
                          <a href="#" className="text-muted">
                            <i className="fas fa-search" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* /.card */}
            </div>
            {/* /.col-md-6 */}
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-0">
                  <div className="d-flex justify-content-between">
                    <h3 className="card-title">
                      Thống kế số lượng người dùng đăng ký nhận thẻ
                    </h3>
                    <a href="javascript:void(0);">Số lượng</a>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex">
                    <p className="d-flex flex-column">
                      <span className="text-bold text-lg">18,230.00</span>
                      <span>Lượt đăng ký</span>
                    </p>
                    <p className="ml-auto d-flex flex-column text-right">
                      <span className="text-success">
                        <i className="fas fa-arrow-up" /> 33.1%
                      </span>
                      <span className="text-muted">So với tháng trước</span>
                    </p>
                  </div>
                  {/* /.d-flex */}
                  <div className="position-relative mb-4">
                    <canvas id="sales-chart" height={200} />
                  </div>
                  <div className="d-flex flex-row justify-content-end">
                    <span className="mr-2">
                      <i className="fas fa-square text-primary" /> Năm nay
                    </span>
                    <span>
                      <i className="fas fa-square text-gray" /> Năm ngoái
                    </span>
                  </div>
                </div>
              </div>
              {/* /.card */}
              <div className="card">
                <div className="card-header border-0">
                  <h3 className="card-title">
                    Tải xuống File dữ liệu người dùng đăng ký
                  </h3>
                  <div className="card-tools">
                    <a
                      href={"/admin/text.jpg"}
                      className="btn btn-sm btn-tool"
                      download
                    >
                      <i className="fas fa-download" />
                    </a>
                    <a href="#" className="btn btn-sm btn-tool">
                      <i className="fas fa-bars" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* /.col-md-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
    </AdminLayout>
  );
};

export default AdminPage;

import React from "react";
import Image from "next/image";

const AdminMain = () => {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link d-flex align-items-center">
          <div className="admin-main-branklink-img">
            <Image
              src={`/admin/logocriti.png`}
              alt="Điện Máy Toàn Cầu"
              layout="fill"
              data-testid="close-icon"
              objectFit="contain"
            />
          </div>
          <span className="brand-text font-weight-light">Criti Admin V3</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex align-items-center">
            <div className="admin-main-imageuser">
              <Image
                src={`/mb-bank-logo.png`}
                alt="Điện Máy Toàn Cầu"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Chào MB Bank !
              </a>
            </div>
          </div>
          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div
              className="input-group d-flex align-items-center"
              data-widget="sidebar-search"
            >
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}
              <li className="nav-header">Quản lý giao diện</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-copy" />
                  <p>
                    Layout
                    <i className="fas fa-angle-left right" />
                    <span className="badge badge-info right">2</span>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/layout/top-nav.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Đầu trang</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/layout/top-nav-sidebar.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Chân trang</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>
                    Sections
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/forms/general.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Slide đầu trang - Section 1</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/forms/advanced.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Video & Tiêu đề - Section 2</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/forms/editors.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Nội dung - Section 3</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/forms/validation.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Ưu đãi - Section 4</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/forms/validation.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>List Card- Section 5</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p>
                    Bảng đăng ký
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/tables/simple.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Simple Tables</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/tables/data.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>DataTables</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/tables/jsgrid.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>jsGrid</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-header">Quản lý hệ thống</li>
              <li className="nav-item">
                <a href="pages/calendar.html" className="nav-link">
                  <i className="nav-icon fas fa-user-plus" />
                  <p>
                    Thành viên
                    <span className="badge badge-info right">2</span>
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/gallery.html" className="nav-link">
                  <i className="nav-icon fas fa-users" />
                  <p>Quản trị viên</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/gallery.html" className="nav-link">
                  <i className="nav-icon fas fa-power-off" />
                  <p>Đăng xuất</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Bảng điều khiển</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Trang Chủ</a>
                  </li>
                  <li className="breadcrumb-item active">Criti Admin v3</li>
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
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
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}
      </aside>
      {/* /.control-sidebar */}
    </div>
  );
};

export default AdminMain;

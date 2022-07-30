import React, { useState, useEffect, Children } from "react";
import { useRouter } from "next/router";
import AdminHeader from "./admin.header";
import Head from "next/head";
import AdminMain from "./admin.main";
import AdminFooter from "./admin.footer";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

const AdminLayout = ({ children }) => {
  const [account, setAcount] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  //useEffect
  useEffect(() => {
    const account = localStorage.getItem("account");
    const password = localStorage.getItem("password");
    setAcount(account);
    setPassword(password);
    if (account === null || password === null) {
      router.push("/criti-login");
    }
  }, []);
  return (
    <>
      <Head>
        <title>Trang quản trị MB Bank</title>
        <meta charset="utf-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/admin/admin_logo.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="/plugins/fontawesome-free/css/all.min.css"
        />

        <link
          rel="stylesheet"
          href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
        />

        <link rel="stylesheet" href="/dist/css/adminlte.min.css" />
        <script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          defer
        ></script>
        <script
          src="/plugins/bootstrap/js/bootstrap.bundle.min.js"
          defer
        ></script>
      </Head>
      <main className="hold-transition sidebar-mini">
        <div className="wrapper">
          <AdminHeader />
          <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
              {/* Brand Logo */}
              <a
                href="index3.html"
                className="brand-link d-flex align-items-center"
              >
                <div className="admin-main-branklink-img">
                  <Image
                    src={`/admin/logocriti.png`}
                    alt="Điện Máy Toàn Cầu"
                    layout="fill"
                    data-testid="close-icon"
                    objectFit="contain"
                  />
                </div>
                <span className="brand-text font-weight-light">
                  Criti Admin V3
                </span>
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
                      <div className="nav-link">
                        <i className="nav-icon fas fa-copy" />
                        <p>
                          Layout
                          <i className="fas fa-angle-left right" />
                          <span className="badge badge-info right">2</span>
                        </p>
                      </div>
                      <ul className="nav nav-treeview">
                        <li className="nav-item">
                          <Link href={"/admin/layout/navbar"}>
                            <a className="nav-link">
                              <i className="far fa-circle nav-icon" />
                              <p>Đầu trang</p>
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href={"/admin/layout/footer"}>
                            <a className="nav-link">
                              <i className="far fa-circle nav-icon" />
                              <p>Chân trang</p>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <div className="nav-link">
                        <i className="nav-icon fas fa-edit" />
                        <p>
                          Sections
                          <i className="fas fa-angle-left right" />
                          <span className="badge badge-info right">5</span>
                        </p>
                      </div>
                      <ul className="nav nav-treeview">
                        <li className="nav-item">
                          <Link href={"/admin/sections/section1"}>
                            <a className="nav-link">
                              <i className="far fa-circle nav-icon" />
                              <p>Slide đầu trang - Section 1</p>
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href={"/admin/sections/section2"}>
                            <a className="nav-link">
                              <i className="far fa-circle nav-icon" />
                              <p>Video & Tiêu đề - Section 2</p>
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href={"/admin/sections/section3"}>
                            <a className="nav-link">
                              <i className="far fa-circle nav-icon" />
                              <p>Nội dung - Section 3</p>
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href={"/admin/sections/section4"}>
                            <a className="nav-link">
                              <i className="far fa-circle nav-icon" />
                              <p>Ưu đãi - Section 4</p>
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href={"/admin/sections/section5"}>
                            <a className="nav-link">
                              <i className="far fa-circle nav-icon" />
                              <p>List Card- Section 5</p>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link href={"/admin/table"}>
                        <a className="nav-link">
                          <i className="nav-icon fas fa-table" />
                          <p>Bảng đăng ký</p>
                        </a>
                      </Link>
                    </li>
                    <li className="nav-header">Quản lý hệ thống</li>
                    <li className="nav-item">
                      <div className="nav-link">
                        <i className="nav-icon fas fas fa-users" />
                        <p>Quản trị viên</p>
                        <i className="fas fa-angle-left right" />
                      </div>
                      <ul className="nav nav-treeview">
                        <li className="nav-item">
                          <Link href={"/admin/accounts"}>
                            <a className="nav-link">
                              <i className="far fa-circle nav-icon" />
                              <p>Danh sách quản trị</p>
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a href="pages/tables/data.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Thêm quản trị</p>
                          </a>
                        </li>
                      </ul>
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
                        <li className="breadcrumb-item active">
                          Criti Admin v3
                        </li>
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
              <>{children}</>
              {/* /.content */}
            </div>
            {/* /.content-wrapper */}
            {/* Control Sidebar */}
            <aside className="control-sidebar control-sidebar-dark">
              {/* Control sidebar content goes here */}
            </aside>
            <AdminFooter />
            {/* /.control-sidebar */}
          </div>
          <Script src="/dist/js/adminlte.js"></Script>

          <Script src="/plugins/chart.js/Chart.min.js"></Script>

          <Script src="/dist/js/demo.js"></Script>

          <Script src="/dist/js/pages/dashboard3.js"></Script>
        </div>
      </main>
    </>
  );
};

export default AdminLayout;

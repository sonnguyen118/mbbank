import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AdminHeader from "../components/admin/admin.header";
import Head from "next/head";
import AdminMain from "../components/admin/admin.main";
import AdminFooter from "../components/admin/admin.footer";
import Script from "next/script";

const AdminPage = () => {
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
          <AdminMain />

          <Script src="/dist/js/adminlte.js"></Script>

          <Script src="/plugins/chart.js/Chart.min.js"></Script>

          <Script src="/dist/js/demo.js"></Script>

          <Script src="/dist/js/pages/dashboard3.js"></Script>
        </div>
        <AdminFooter />
      </main>
    </>
  );
};

export default AdminPage;

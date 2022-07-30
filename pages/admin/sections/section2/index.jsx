import React from "react";
import AdminLayout from "../../../components/admin/admin.layout";
import Image from "next/image";

const Section2 = () => {
  const data = [
    {
      youtube: "wdf1xuMM4o8",
      title_1: "Bạn đã có chiếc",
      hightlight: "thẻ độc đáo nhất thế giới",
      title_2: "trong tay!?",
    },
  ];
  return (
    <AdminLayout>
      <div className="admin__change d-flex justify-content-between">
        <div className="admin__change-group">
          <p className="admin__change-group-title">
            Chỉnh sửa nội dung của phần Section 2 gồm Youtube và Ttile.
            <br></br>
            Lưu ý:
            <br></br>
            Với video youtube, nhúng mã code phần đỏ
            <br></br>/embed/
            <span className="admin__change-group-title-s">wdf1xuMM4o8</span>
            ?control
          </p>
          {data?.map((data, i) => (
            <>
              <input
                defaultValue={data.youtube}
                className="admin__change-group-input w-100"
              ></input>
              <p className="admin__change-group-title">
                Chữ tiêu đề (tách ra để phân biệt phần hightlight)
              </p>
              <input
                defaultValue={data.title_1}
                className="admin__change-group-input w-100"
              ></input>
              <p className="admin__change-group-title">
                Chữ HightLight (phần chữ nổi bật lên trong tiêu đề)
              </p>
              <input
                defaultValue={data.hightlight}
                className="admin__change-group-input w-100"
              ></input>
              <p className="admin__change-group-title">
                Chữ tiêu đề (tách ra để phân biệt phần hightlight)
              </p>
              <input
                defaultValue={data.title_2}
                className="admin__change-group-input w-100"
              ></input>
            </>
          ))}
          <button className="admin__change-group-btn">Lưu</button>
        </div>
        <div className="admin__change-img-tutorial">
          <Image
            src={`/admin/tutorial.png`}
            alt="Điện Máy Toàn Cầu"
            layout="fill"
            data-testid="close-icon"
            objectFit="contain"
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Section2;

import React from "react";
import AdminLayout from "../../../components/admin/admin.layout";

const Section3 = () => {
  const data = [
    {
      title_1: "Giao dịch",
      title_2: "#tiện lợi",
      title_3: "Trải nghiệm",
      title_4: "#khác biệt",
      title_5: "Tích hợp 2 in 1 tính năng thẻ tín dụng và thẻ ATM",
      title_6: "Được cấp hạn mức tín dụng tự động",
      title_7: "Bảo mật và an toàn",
      title_8: "Bạn có muốn đăng ký nhận thẻ tại các CN/PGD NV toàn quốc?!",
      content_5:
        "Mang đầy đủ tính năng và tiện ích thẻ tín dụng và thẻ ATM trên cùng 1 chiếc thẻ. Sử dụng đa nguồn tiền và ưu tiên nguồn tiền phù hợp với từng giao dịch: Giao dịch qua POS, Internet hoặc rút tiền tại ATM nước ngoài ưu tiên nguồn hạn mức tín dụng của thẻ; Giao dịch rút tiền tại ATM/CDM tại Việt Nam ưu tiên nguồn tài khoản thanh toán.",
      content_6:
        "Thẻ sẽ được cấp hạn mức tín dụng tự động khi đạt điều kiện của MB. Chi tiêu càng nhiều - Hạn mức càng cao!",
      content_7:
        "Thẻ không hiển thị thông tin, bảo mật và an toàn. Xem đầy đủ thông tin của thẻ ngay trên App MBBank.",
      note: "Lưu ý: Thẻ chỉ được bán duy nhất tại các CN/PGD MB trên toàn quốc và chưa phát hành online.",
    },
  ];
  return (
    <AdminLayout>
      <div className="admin__change">
        <div className="admin__change-group w-100">
          <p className="admin__change-group-title">
            Chỉnh sửa nội dung của phần Section 3 gồm các nội dung và cụm tiêu
            đề.
          </p>
          <p className="admin__change-group-title">Tiêu đề</p>
          <input
            defaultValue={data[0].title_1}
            className="admin__change-group-input d-inline w-20"
          ></input>
          <input
            defaultValue={data[0].title_2}
            className="admin__change-group-input d-inline w-20 ml-5"
          ></input>
          <input
            defaultValue={data[0].title_3}
            className="admin__change-group-input d-inline w-20 ml-5"
          ></input>
          <input
            defaultValue={data[0].title_4}
            className="admin__change-group-input d-inline w-20 ml-5"
          ></input>
          <p className="admin__change-group-title">Nội dung</p>
          <input
            defaultValue={data[0].title_5}
            className="admin__change-group-input w-100"
          ></input>
          <textarea
            defaultValue={data[0].content_5}
            className="admin__change-group-input w-100 h-300"
          ></textarea>
          <input
            defaultValue={data[0].title_6}
            className="admin__change-group-input w-100"
          ></input>
          <textarea
            defaultValue={data[0].content_6}
            className="admin__change-group-input w-100 h-300"
          ></textarea>
          <input
            defaultValue={data[0].title_7}
            className="admin__change-group-input w-100"
          ></input>
          <textarea
            defaultValue={data[0].content_7}
            className="admin__change-group-input w-100 h-300"
          ></textarea>
          <p className="admin__change-group-title">Lưu ý và câu hỏi</p>
          <input
            defaultValue={data[0].note}
            className="admin__change-group-input w-100"
          ></input>
          <input
            defaultValue={data[0].title_8}
            className="admin__change-group-input w-100"
          ></input>

          <button className="admin__change-group-btn d-block">Lưu</button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Section3;

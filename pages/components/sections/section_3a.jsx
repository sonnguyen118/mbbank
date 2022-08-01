import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Section3a = () => {
  const [seemore, setSeemore] = useState(false);
  const handlerCliclk = () => {
    if (seemore) {
      setSeemore(false);
      console.log("tắt xem thêm");
    } else {
      setSeemore(true);
      console.log("bật xem thêm");
    }
  };
  return (
    <div className="section_3-block1" id="section_3a">
      <div className="section_3-block1-title">
        <div className="section_3-block1-title-group">
          <h1 className="section_3-block1-title-group-main">Giao dịch</h1>
          <h1 className="section_3-block1-title-group-sub">#tiện lợi</h1>
        </div>
        <div className="section_3-block1-title-group">
          <h1 className="section_3-block1-title-group-main">Trải nghiệm</h1>
          <h1 className="section_3-block1-title-group-sub">#khác biệt</h1>
        </div>
      </div>
      <div className="section_3-block1-bos">
        <div className="section_3-block1-bos-header">
          <div className="section_3-block1-bos-header-box">
            <div className="section_3-block1-item-box">
              <div className="section_3-block1-item-box-icon">
                <Image
                  src={`/4x/asset2.png`}
                  alt="Điện Máy Toàn Cầu"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
              <p className="section_3-block1-item-box-title">
                Tích hợp 2 in 1 tính năng thẻ tín dụng và thẻ ATM.
              </p>
              <p className="section_3-block1-item-box-text">
                Định danh thẻ chỉ chưa đầy 1 phút trên App MBbank
              </p>
              <p
                className={
                  seemore
                    ? "section_3-block1-item-box-text"
                    : "section_3-block1-item-box-text see-more"
                }
              >
                Mang đầy đủ tính năng và tiện ích thẻ tín dụng và thẻ ATM trên
                cùng 1 chiếc thẻ. Sử dụng đa nguồn tiền và ưu tiên nguồn tiền
                phù hợp với từng giao dịch: Giao dịch qua POS, Internet hoặc rút
                tiền tại ATM nước ngoài ưu tiên nguồn hạn mức tín dụng của thẻ;
                Giao dịch rút tiền tại ATM/CDM tại Việt Nam ưu tiên nguồn tài
                khoản thanh toán.
              </p>
              {seemore ? (
                <>
                  <span
                    className="section_3-block1-item-box-text-seemore"
                    onClick={handlerCliclk}
                  >
                    Ẩn bớt
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="section_3-block1-item-box-text-seemore"
                    onClick={handlerCliclk}
                  >
                    Xem thêm
                  </span>
                </>
              )}
            </div>
          </div>
          <div className="section_3-block1-bos-header-box">
            <div className="section_3-block1-item-box">
              <div className="section_3-block1-item-box-icon">
                <Image
                  src={`/4x/asset3.png`}
                  alt="Điện Máy Toàn Cầu"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
              <p className="section_3-block1-item-box-title">
                Được cấp hạn mức tín dụng tự động{" "}
              </p>
              <p className="section_3-block1-item-box-text">
                Thẻ sẽ được cấp hạn mức tín dụng tự động khi đạt điều kiện của
                MB. Chi tiêu càng nhiều - Hạn mức càng cao!
              </p>
            </div>
            <div className="section_3-block1-item-box">
              <div className="section_3-block1-item-box-icon">
                <Image
                  src={`/4x/asset4.png`}
                  alt="Điện Máy Toàn Cầu"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
              <p className="section_3-block1-item-box-title">
                Bảo mật và an toàn
              </p>
              <p className="section_3-block1-item-box-text">
                Thẻ không hiển thị thông tin, bảo mật và an toàn. Xem đầy đủ
                thông tin của thẻ ngay trên App MBBank.
              </p>
            </div>
          </div>
        </div>
        <div className="section_3-block1-bos-footer">
          <p className="section_3-block1-item-footer__a">
            Lưu ý: Thẻ chỉ được bán duy nhất tại các CN/PGD MB trên toàn quốc và
            chưa phát hành online.
          </p>
          <div className="section_3-block1-item-footer__b">
            <div className="section_3-block1-item-footer__b-title">
              Bạn có muốn đăng ký nhận thẻ tại các CN/PGD NV toàn quốc?!{" "}
            </div>
            <button className="section_3-block1-item-footer__b-btn">
              ĐĂNG KÝ NHẬN THẺ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3a;

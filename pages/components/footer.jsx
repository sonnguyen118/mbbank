import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <p className="footer-left-title">Miễn phí trọn đời trên App MBBank</p>
          <div className="footer-left-group">
            <div className="footer-left-group-img1">
              <Image
                src={`/4x/asset14.png`}
                alt="Điện Máy Toàn Cầu"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="footer-left-group-img2">
              <Image
                src={`/4x/asset15.png`}
                alt="Điện Máy Toàn Cầu"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-right-social">
            <div className="footer-right-social-title">
              <p className="footer-right-social-title-text">1900 54 54 26</p>
              <div className="footer-right-social-title-img">
                <Image
                  src={`/4x/asset16.png`}
                  alt="Điện Máy Toàn Cầu"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="footer-right-social-title">
              <p className="footer-right-social-title-text">VietnamMBBank</p>
              <div className="footer-right-social-title-img">
                <Image
                  src={`/4x/asset17.png`}
                  alt="Điện Máy Toàn Cầu"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="footer-right-social-title">
              <p className="footer-right-social-title-text">
                www.mbbank.com.vn
              </p>
              <div className="footer-right-social-title-img">
                <Image
                  src={`/4x/asset18.png`}
                  alt="Điện Máy Toàn Cầu"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
          <p className="footer-right-bottom">
            BẢN QUYỀN THUỘC NGÂN HÀNG TMCP QUÂN ĐỘI
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

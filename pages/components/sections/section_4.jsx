import React from "react";
import Image from "next/image";
import Link from "next/link";

const Section4 = () => {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];
  return (
    <>
      <form className="section_4" id="section_4">
        <div className="section_4-information">
          <p className="section_4-information-title">
            Địa chỉ đăng ký nhận thẻ:
          </p>
          <div className="section_4-information-group">
            <input
              className="section_4-information-group-input"
              type={"text"}
              placeholder="Họ và tên"
            ></input>
            <select className="section_4-information-group-select">
              <option value="0">Thành Phố</option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
              <option value="3">Citroen</option>
            </select>
          </div>
          <div className="section_4-information-group">
            <input
              className="section_4-information-group-input"
              type={"text"}
              placeholder="CMND/CCCD"
            ></input>
            <select className="section_4-information-group-select">
              <option value="0">Chi nhánh/PGD</option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
              <option value="3">Citroen</option>
            </select>
          </div>
          <div className="section_4-information-group">
            <input
              className="section_4-information-group-input"
              type={"text"}
              placeholder="Số điện thoại"
            ></input>
            <select className="section_4-information-group-select">
              <option value="0">Bạn muốn nhận thẻ nào?</option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
              <option value="3">Citroen</option>
            </select>
          </div>
        </div>
        <button className="section_4-button">ĐĂNG KÝ NHẬN THẺ</button>
      </form>
    </>
  );
};

export default Section4;

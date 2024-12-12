import React, { useState } from "react";
import Menu from "../../assets/images/header-img/menu.svg";
import Logo from "../../assets/images/header-img/Logo.png";
import Search from "../../assets/images/header-img/search.svg";
import Add from "../../assets/images/header-img/add.png";
import Left from "../../assets/images/header-img/left-topbar.png";
import Bell from "../../assets/images/header-img/bell.png";
import Person from "../../assets/images/header-img/person.png";
import Google from "../../assets/images/header-img/google.svg";

export default function Header({ isOpen, setIsOpen }) {
  const [isAcc, setIsAcc] = useState(false);

  return (
    <>
      <header className="pt-4 pl-6 pr-6 bg-[#212121] flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isOpen ? "fixed top-0 right-[-300px]" : ""}`}
            >
              <img className="cursor-pointer" src={Menu} alt="menu-img" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isOpen ? "h-scree" : "fixed top-0 left-[-300px] "}`}
            >
              <img className="cursor-pointer" src={Menu} alt="menu-img" />
            </button>
            <span className="flex items-center gap-1">
              <img src={Logo} alt="logo-img" />
              <sup className="font-normal text-xs text-[#a6a6a6]">TR</sup>
            </span>
          </div>
          <div className="flex items-center">
            <input
              className="w-[574px] bg-black text-white py-1 pl-2 outline-none"
              placeholder="Ara"
              type="search"
            />
            <button className="py-[7px] px-6 max-[64px] bg-[#4d4d4d]">
              <img src={Search} alt="search-img" />
            </button>
          </div>
          <div className="flex items-center gap-7">
            <img src={Add} alt="Add-img" />
            <img src={Left} alt="Left-img" />
            <img src={Bell} alt="Bell-img" />
            <div className="justify-end">
              <button onClick={() => setIsAcc(!isAcc)} className="h-auto">
                <img src={Person} alt="Person" />
              </button>
              <div
                className={`fixed top-0 right-0 mt-[60px] px-5 py-5 rounded-lg bg-neutral-600 transition-transform duration-300 ${
                  isAcc ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <h2 className="flex items-center  text-white gap-4">
                  <span className="bg-blue-500 w-8 h-8 rounded-full"></span>
                  Asadbek Umarov
                </h2>
                <div className="flex items-center gap-2 py-[4px]">
                  <img src={Google} alt="" />
                  <p className="text-white">Google hisobi</p>
                </div>
                <div className="flex items-center gap-2 py-[4px]">
                  <img src={Google} alt="" />
                  <p className="text-white">chiqish</p>
                </div>
                <div className="flex items-center gap-2 py-[4px]">
                  <img src={Google} alt="" />
                  <p className="text-white">Youtube studio</p>
                </div>
                <div className="flex items-center gap-2 py-[4px]">
                  <img src={Google} alt="" />
                  <p className="text-white">Xarid va homiyliklar</p>
                </div>
                <div className="flex items-center gap-2 py-[4px]">
                  <img src={Google} alt="" />
                  <p className="text-white">Youtube dagi ma'lumotlaringiz</p>
                </div>
                <div className="flex items-center gap-2 py-[4px]">
                  <img src={Google} alt="" />
                  <p className="text-white">qiyofa qurilma mavzusi</p>
                </div>
                <div className="flex items-center gap-2 py-[4px]">
                  <img src={Google} alt="" />
                  <p className="text-white">Til: uzbek</p>
                </div>
                <div className="flex items-center gap-2 py-[4px]">
                  <img src={Google} alt="" />
                  <p className="text-white">Xavfsiz rejim: o'chirilgan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-[250px] mt-6 justify-center">
            <div className="flex gap-3">
              <button className="text-white font-medium text-sm bg-[#4d4d4d] py-1 px-3 rounded-[30px]">
                Kino
              </button>
              <button className="text-white font-medium text-sm bg-[#4d4d4d] py-1 px-3 rounded-[30px]">
                Comedy
              </button>
              <button className="text-white font-medium text-sm bg-[#4d4d4d] py-1 px-3 rounded-[30px]">
                Mix
              </button>
              <button className="text-white font-medium text-sm bg-[#4d4d4d] py-1 px-3 rounded-[30px]">
                Cartoons{" "}
              </button>
              <button className="text-white font-medium text-sm bg-[#4d4d4d] py-1 px-3 rounded-[30px]">
                Muzik{" "}
              </button>
              <button className="text-white font-medium text-sm bg-[#4d4d4d] py-1 px-3 rounded-[30px]">
                Futbol{" "}
              </button>
              <button className="text-white font-medium text-sm bg-[#4d4d4d] py-1 px-3 rounded-[30px]">
                El sanatları{" "}
              </button>
              <button className="text-white font-medium text-sm bg-[#4d4d4d] py-1 px-3 rounded-[30px]">
                UX Tasarım{" "}
              </button>
              <button className="text-white font-medium text-sm bg-[#4d4d4d] py-1 px-3 rounded-[30px]">
                Animasyon{" "}
              </button>
              <button className="text-white font-medium text-sm bg-[#4d4d4d] py-1 px-3 rounded-[30px]">
                Görsel sanatlar
              </button>
              <button className="text-white font-medium text-sm bg-[#4d4d4d] py-1 px-3 rounded-[30px]">
                Son yüklenenler{" "}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

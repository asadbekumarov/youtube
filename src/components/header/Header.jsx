import React from "react";
import Menu from "../../assets/images/header-img/menu.svg";
import Logo from "../../assets/images/header-img/Logo.png";
import Search from "../../assets/images/header-img/search.svg";
import Add from "../../assets/images/header-img/add.png";
import Left from "../../assets/images/header-img/left-topbar.png";
import Bell from "../../assets/images/header-img/bell.png";
import Person from "../../assets/images/header-img/person.png";
import Home from "../../assets/images/aside-img/home.svg";
export default function Header() {
  return (
    <>
      <header className="pt-4 pb-6 pl-6 pr-6 bg-[#212121] flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img className="cursor-pointer	" src={Menu} alt="menu-img" />
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
            <img src={Person} alt="Person" />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-[250px] mt-6">
            <div className="flex gap-6">
              <img src={Home} alt="home-img" />
              <p className="text-white">Anasayfa</p>
            </div>
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

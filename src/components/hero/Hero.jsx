import React from "react";
import Home from "../../assets/images/aside-img/home.svg";
import Discover from "../../assets/images/aside-img/discover.png";
import Subscriptions from "../../assets/images/aside-img/subscriptions.png";
import Vid from "../../assets/images/aside-img/vid.png";
import Clock from "../../assets/images/aside-img/clock.png";
import Your from "../../assets/images/aside-img/your-videos.png";
import Clock1 from "../../assets/images/aside-img/clock1.png";
import Like from "../../assets/images/aside-img/like-videos.png";
import downarrow from "../../assets/images/aside-img/downarrow.png";
import Game from "../../assets/images/following-img/game.png";
import Ya from "../../assets/images/following-img/ya.png";
import Best from "../../assets/images/following-img/best.png";
import Seu from "../../assets/images/following-img/seu.png";
import Design from "../../assets/images/following-img/design.png";
import Man from "../../assets/images/following-img/design.png";
import downarrow1 from "../../assets/images/aside-img/downarrow.png";
import Live from "../../assets/images/following-img/live.png";
import Live1 from "../../assets/images/following-img/live1.png";
import Live2 from "../../assets/images/following-img/live2.png";
import Leftnotification from "../../assets/images/following-img/leftnotification.png";
import Leftnotification1 from "../../assets/images/following-img/leftnotification1.png";
import Leftnotification2 from "../../assets/images/following-img/leftnotification2.png";
import Leftnotification3 from "../../assets/images/following-img/leftnotification3.png";
import Leftnotification4 from "../../assets/images/following-img/leftnotification4.png";
import Logo from "../../assets/images/header-img/Logo.png";

import Menu from "../../assets/images/header-img/menu.svg";

export default function Hero({ isOpen, setIsOpen }) {
  console.log(isOpen);

  return (
    <>
      <section className="pl-7 pr-7 bg-[#212121] flex">
        <aside className="w-[240px] pr-5 flex">
          <div
            className={`${isOpen ? "-translate-x" : "-translate-x-[500px]"}`}
          >
            <div className="flex items-center gap-6 mb-5">
              <img src={Home} alt="home-img" />
              <p className="text-white">Anasayfa</p>
            </div>
            <div className="flex items-center gap-6 mb-5">
              <img src={Discover} alt="Discover-img" />
              <p className="text-white">Keşfet</p>
            </div>
            <div className="flex text-white gap-6 mb-5">
              <img src={Subscriptions} alt="subscriptions-img" />
              <p>Abonelikler</p>
            </div>
            <hr />
            <div className="flex text-white gap-6 mt-5 mb-5 items-center">
              <img src={Vid} alt="Vid-img" />
              <p>Kitaplık</p>
            </div>
            <div className="flex text-white gap-6 mb-5 items-center">
              <img src={Clock} alt="Geçmiş-img" />
              <p>Geçmiş</p>
            </div>
            <div className="flex text-white gap-6 mb-5 items-center">
              <img src={Your} alt="Your-img" />
              <p>Your</p>
            </div>
            <div className="flex text-white gap-6 mb-5 items-center">
              <img src={Clock1} alt="Clock1-img" />
              <p>Clock1</p>
            </div>
            <div className="flex text-white gap-6 mb-5 items-center">
              <img src={Like} alt="Like-img" />
              <p>Like</p>
            </div>
            <div className="flex text-white gap-6 mb-5 items-center">
              <img src={downarrow} alt="downarrow-img" />
              <p>downarrow</p>
            </div>
            <hr />
            <h4 className="font-medium text-sm text-[#a6a6a6] pt-4">
              ABONELİKLER
            </h4>
            <div className="flex text-white gap-6 mt-5 mb-5 items-center">
              <div className="flex justify-between gap-6">
                <img src={Game} alt="Game" />
                <div className="flex justify-between items-center w-[200px]">
                  <p>The Game</p>
                  <img src={Live} alt="Live" />
                </div>
              </div>
            </div>
            <div className="flex text-white gap-6 mb-5 items-center">
              <div className="flex justify-between gap-6">
                <img src={Ya} alt="Ya-img" />
                <div className="flex justify-between items-center w-[200px]">
                  <p>Lean Yo</p>
                  <img src={Live1} alt="Live" />
                </div>
              </div>
            </div>
            <div className="flex text-white gap-6 mb-5 items-center">
              <div className="flex justify-between gap-6">
                <img src={Best} alt="Best-img" />
                <div className="flex justify-between items-center w-[200px]">
                  <p>Best Kuaför</p>
                  <img src={Live2} alt="Live" />
                </div>
              </div>
            </div>
            <div className="flex text-white gap-6 mb-5 items-center">
              <img src={Seu} alt="Seu" />
              <div className="flex justify-between items-center w-[200px]">
                <p>Best Kuaför</p>
                <img src={Leftnotification} alt="Leftnotification" />
              </div>
            </div>
            <div className="flex text-white gap-6 mb-5 items-centeE">
              <img src={Design} alt="Design" />
              <div className="flex justify-between items-center w-[200px]">
                <p>Discover Design</p>
                <img src={Leftnotification1} alt="Leftnotification" />
              </div>
            </div>
            <div className="flex text-white gap-6 mb-5 items-center">
              <img src={Ya} alt="Ya-img" />
              <div className="flex justify-between items-center w-[200px]">
                <p>Build Game</p>
                <img src={Leftnotification2} alt="Leftnotification" />
              </div>
            </div>
            <div className="flex text-white gap-6 mb-5 items-center">
              <img src={Man} alt="Man-img" />
              <div className="flex justify-between items-center w-[200px]">
                <p>Vlogger Man</p>
                <img src={Leftnotification3} alt="Leftnotification" />
              </div>
            </div>
            <div className="flex text-white gap-6 mb-5 items-center">
              <img src={downarrow1} alt="downarrow1-img" />
              <div className="flex justify-between items-center w-[200px]">
                <p>Daha fazla göster</p>
                <img src={Leftnotification4} alt="Leftnotification" />
              </div>
            </div>
          </div>
        </aside>
        <div className="">
          <iframe
            className="mx-[50px] py-3 text-center justify-center"
            width="1500"
            height="700"
            src="https://www.youtube.com/embed/Z_6I8yVePXg?si=fVh5ElK3VWHp8Dz_"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </>
  );
}

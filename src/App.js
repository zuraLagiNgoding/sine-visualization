import React, { useEffect, useState } from "react";
import "./App.css";
import Sine from "./Sine";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";
import { IoMdArrowRoundForward } from "react-icons/io";
import { NextUIProvider } from "@nextui-org/react";
import clsx from "clsx";

export function Nav() {

  const [navState, setNavState] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if(window.scrollY > 100) {
        setNavState(true);
        console.log(navState);
      } else if (window.scrollY < 100) {
        setNavState(false);
        console.log(navState);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);

  return (
    <div
      className={clsx(
        "transition-all duration-150 fixed w-full px-32 py-5 text-lg text-black font-bold flex justify-between bg-white z-10 ",
        navState && "drop-shadow-lightBlueSmall px-36 py-7"
      )}
    >
      <h1 className="">Kelompok 1</h1>
      <i className="cursor-pointer">
        <AiFillGithub size="32" className="fill-black" />
      </i>
    </div>
  );
}

export function Rumus() {
  return (
    <div className="flex flex-col grow p-24 items-center text-justify blink">
      <div className="flex w-full justify-center">
        <h1 className="text-6xl font-semibold drop-shadow-lightBlue select-none">
          Rumus <span className=" text-blue-600">Sinus</span>
        </h1>
      </div>
      <p className="2xl:px-56 mt-12 text-xl text-gray-800">
        Rumus sinus (sin) dalam trigonometri digunakan untuk menghitung
        hubungan antara
        <span className=" text-blue-600">
          panjang sisi yang berlawanan dengan suatu sudut (θ) dalam
          segitiga
        </span>
        dengan panjang hipotenusa. Rumusnya adalah:
      </p>
      <img src="/rumus.png" className="w-[28rem] " />
      <p className="2xl:px-56 text-xl text-gray-800">
        Dengan kata lain, sinus dari suatu sudut adalah rasio antara
        panjang sisi yang berlawanan dengan sudut tersebut dan panjang
        hipotenusa segitiga.
      </p>
    </div>
  )
}

export function Rentang() {
  return (
    <div className="flex flex-col grow p-24 items-center text-justify blink">
      <div className="flex w-full justify-center">
        <h1 className="text-6xl font-semibold drop-shadow-lightBlue select-none">
          Rentang <span className=" text-blue-600">Sinus</span>
        </h1>
      </div>
      <p className="2xl:px-56 mt-12 text-xl text-gray-800">
        Rentang nilai sinus adalah kisaran nilai yang dapat diambil oleh fungsi
        sinus (sin) dalam trigonometri. Untuk fungsi sinus, <span className=" text-blue-600">
          rentang nilai selalu berada di antara -1 dan 1
        </span> Ini berarti nilai sinus tidak akan pernah lebih kecil dari -1 atau lebih besar dari 1
      </p>
    </div>
  );
}

export function Kuadran() {
  return (
    <div className="flex flex-col grow p-24 items-center text-justify blink">
      <div className="flex w-full justify-center">
        <h1 className="text-6xl font-semibold drop-shadow-lightBlue select-none">
          Kuadran pada <span className=" text-blue-600">Sinus</span>
        </h1>
      </div>
      <img src="/kuadran.png" className="w-[28rem] mt-12" />
      <p className="2xl:px-56 mt-6 text-xl text-gray-800">
        Kuadran sinus merujuk pada tanda
        <span className=" text-blue-600">(positif atau negatif)</span> dari
        nilai sinus suatu sudut dalam berbagai kuadran pada sistem koordinat
        kartesian. Secara umum:
      </p>
      <ul className="2xl:px-64 mt-6 text-lg text-gray-800">
        <li className="">
          <span className="font-bold text-blue-600">Kuadran I (0°-90°):</span> Sinus positif karena panjang sisi yang berlawanan dengan sudut dan
          panjang hipotenusa berada di atas sumbu x.
        </li>
        <li className="mt-2">
          <span className="font-bold text-blue-600">Kuadran II (90°-180°):</span> Sinus negatif karena panjang sisi yang berlawanan dengan sudut berada di atas sumbu x, sedangkan panjang hipotenusa berada di bawah sumbu x.
        </li>
        <li className="mt-2">
          <span className="font-bold text-blue-600">Kuadran III (180°-270°):</span> Sinus positif karena panjang sisi yang berlawanan dengan sudut dan panjang hipotenusa berada di bawah sumbu x.
        </li>
        <li className="mt-2">
          <span className="font-bold text-blue-600">Kuadran IV (270°-360°):</span> Sinus negatif karena panjang sisi yang berlawanan dengan sudut berada di bawah sumbu x, sedangkan panjang hipotenusa berada di atas sumbu x.
        </li>
      </ul>
    </div>
  );
}

function App() {

  const [select, setSelect] = useState(0);

  function tabHandler(){
    if(select == 0) {
      setSelect(1)
    } else if (select == 1) {
      setSelect(2)
    } else if (select == 2) {
      setSelect(0)
    }
  }

  return (
    <NextUIProvider>
      <div className="flex flex-col relative">
        <Nav />
        <div className="flex flex-col text-gray-800 grow p-24 mt-12">
          <div className="flex w-full justify-center">
            <h1 className="text-[5rem] 2xl:text-[6rem] drop-shadow-lightBlue w-3/4 mr-auto ml-[6rem]">
              Mari kita belajar trigonometri
              <span className="underline text-blue-600">Sinus</span>
            </h1>
          </div>
          <div className="px-24 py-10 mt-32">
            <h1 className="text-6xl font-semibold drop-shadow-lightBlue">
              <span className="text-blue-600">Sinus</span> itu apasih?
            </h1>
            <p className="text-xl text-gray-800 mt-12 text-justify">
              Sine atau dalam bahasa Indonesia sering disebut dengan
              <span className="text-blue-600">"sinus"</span> adalah sebuah
              fungsi matematika yang menghubungkan perbandingan panjang sisi
              yang berlawanan dengan sudut tertentu dalam segitiga siku-siku
              dengan panjang sisi terpanjang.
            </p>
          </div>
        </div>
        <div className="App px-[15rem] scale-[.65] lg:scale-85 xl:scale-100">
          <Sine />
        </div>
        <div className="p-32">
          <div className=" flex flex-col text-gray-800 grow p-24 rounded-[3rem] glass">
            <div className=" flex items-center gap-4 font-semibold">
              <p
                className={clsx(
                  "transition duration-300 text-gray-400 cursor-pointer border-0 select-none",
                  select == 0 &&
                    "border border-b-2 text-blue-500 text-xl border-b-blue-500"
                )}
                onClick={() => setSelect(0)}
              >
                Rumus Sinus
              </p>
              <p
                className={clsx(
                  "transition duration-300 text-gray-400 cursor-pointer border-0 select-none",
                  select == 1 &&
                    "border border-b-2 text-blue-500 text-xl border-b-blue-500"
                )}
                onClick={() => setSelect(1)}
              >
                Rentang Sinus
              </p>
              <p
                className={clsx(
                  "transition duration-300 text-gray-400 cursor-pointer border-0 select-none",
                  select == 2 &&
                    "border border-b-2 text-blue-500 text-xl border-b-blue-500"
                )}
                onClick={() => setSelect(2)}
              >
                Kuadran
              </p>
              <IoMdArrowRoundForward
                size={32}
                className="ml-auto fill-blue-500 stroke-none cursor-pointer"
                onClick={tabHandler}
              />
            </div>
            <div className="flex">
              {select == 0 ? <Rumus /> : null}
              {select == 1 ? <Rentang /> : null}
              {select == 2 ? <Kuadran /> : null}
            </div>
          </div>
        </div>
        <div className="pb-24">
          <h1 className="px-48 py-24 text-5xl font-semibold drop-shadow-lightBlue">
            Untuk lengkapnya, Yukk kita nonton video ini!
          </h1>
          <div className="flex justify-center w-full">
            <video
              className="w-[56rem] rounded-3xl"
              controls
            >
              <source src="/aturan-sinus.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;

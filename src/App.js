import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Sine from "./Sine";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaCircleArrowUp } from "react-icons/fa6";
import { NextUIProvider } from "@nextui-org/react";
import { motion } from "framer-motion"; 
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
        "transition-all duration-150 fixed w-full pr-32 py-5 text-lg text-black font-bold flex justify-between items-center bg-white z-10 ",
        navState && "drop-shadow-lightBlueSmall pr-36 py-7"
      )}
    >
      <div className="flex group relative items-center">
        <h1
          className={clsx(
            "flex items-center justify-end transition duration-400 text-lg ease-in-out h-12 group-hover:text-blue-500 bg-white z-10 text-right w-[20rem] px-2",
            navState && "!w-[22rem] !text-2xl"
          )}
        >
          Kelompok 1
        </h1>
        <ul className="flex gap-4 transition duration-700 ease-in-out translate-x-[-47rem] group-hover:translate-x-10">
          <li className="text-sm 2xl:text-lg transition duration-300 ease-in-out border-0 hover:border-b-2 cursor-pointer border-b-blue-500">
            <a href="https://zura-portfolio.vercel.app/">Maliki Azis Azyura</a>
          </li>
          <li className="text-sm 2xl:text-lg transition duration-300 ease-in-out border-0 hover:border-b-2 cursor-pointer border-b-blue-500">
            <a>Hadiana Easy Rizqina</a>
          </li>
          <li className="text-sm 2xl:text-lg transition duration-300 ease-in-out border-0 hover:border-b-2 cursor-pointer border-b-blue-500">
            <a>Farren Hilmi</a>
          </li>
          <li className="text-sm 2xl:text-lg transition duration-300 ease-in-out border-0 hover:border-b-2 cursor-pointer border-b-blue-500">
            <a href="https://anindiakece.github.io/Website-Anindia/">
              Anindia Aulia
            </a>
          </li>
          <li className="text-sm 2xl:text-lg transition duration-300 ease-in-out border-0 hover:border-b-2 cursor-pointer border-b-blue-500">
            <a href="https://ririnfebrianiiii.github.io/portfolio/">
              Ririn Febriani
            </a>
          </li>
        </ul>
      </div>
      <a
        className="transition duration-250 ease-in-out hover:scale-125 cursor-pointer "
        href="https://github.com/zuraLagiNgoding/sine-visualization"
      >
        <AiFillGithub size="32" className="fill-black" />
      </a>
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
        hubungan antara <span className=" text-blue-600">
          panjang sisi yang berlawanan dengan suatu sudut (θ) dalam
          segitiga
        </span> dengan panjang hipotenusa. Rumusnya adalah:
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
      <img src="/kuadran.png" className="w-[28rem] mt-12" alt="kuadran"/>
      <p className="2xl:px-56 mt-6 text-xl text-gray-800">
        Kuadran sinus merujuk pada tanda <span className=" text-blue-600">(positif atau negatif)</span> dari
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

  const [navState, setNavState] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setNavState(true);
        console.log(navState);
      } else if (window.scrollY < 100) {
        setNavState(false);
        console.log(navState);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [select, setSelect] = useState(0);

  function tabHandler(){
    if(select === 0) {
      setSelect(1)
    } else if (select === 1) {
      setSelect(2)
    } else if (select === 2) {
      setSelect(0)
    }
  }

  const draw = {
    initial: {
      pathLength: 0,
      opacity: 0,
    },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <NextUIProvider>
      <div
        className="w-full min-h-screen flex flex-col relative overflow-hidden custom-background"
        ref={ref}
      >
        {navState ? (
          <div className="fixed right-8 bottom-8 blink">
            <FaCircleArrowUp
              size={36}
              className="fill-blue-500 stroke-none cursor-pointer transition duration-250 ease-in-out hover:scale-125"
              onClick={handleClick}
            />
          </div>
        ) : null}
        <Nav />
        <div className="relative flex flex-col text-gray-800 grow p-24 mt-12">
          <motion.div className="absolute top-[-3rem] left-0 w-full scale-[1.1]">
            <motion.svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlnsSvgjs="http://svgjs.dev/svgjs"
              viewBox="0 0 800 400"
            >
              <motion.path
                variants={draw}
                initial="initial"
                animate="animate"
                d="M8.071748733520508,93.27354431152344C45.545590575536096,117.06128578186035,123.43498030662536,216.88340100606283,214.3497772216797,224.21524047851562C305.26457413673404,231.54707995096842,402.77877082824705,129.07026105244955,508.5201721191406,133.63229370117188C614.2615734100342,138.1943263498942,744.1120904032389,228.30941215515136,796.4125366210938,249.3273468017578"
                fill="none"
                stroke-width="24"
                stroke='url("#SvgjsLinearGradient1001")'
                stroke-linecap="round"
                stroke-dasharray="0 0"
              ></motion.path>
              <defs>
                <linearGradient id="SvgjsLinearGradient1001">
                  <stop stop-color="hsl(205, 69%, 60%)" offset="0"></stop>
                  <stop stop-color="hsl(205, 69%, 80%)" offset="1"></stop>
                </linearGradient>
              </defs>
            </motion.svg>
          </motion.div>
          <div className="flex w-full justify-center">
            <h1 className="text-[5rem] 2xl:text-[6rem] z-[1] leading-tight font-semibold drop-shadow-lightBlue w-3/4 mr-auto ml-[6rem]">
              Mari kita belajar trigonometri{" "}
              <span className="underline text-blue-600">Sinus</span>
            </h1>
          </div>
          <div className="px-24 py-10 mt-32">
            <h1 className="text-6xl font-semibold drop-shadow-lightBlue">
              <span className="text-blue-600">Sinus</span> itu apa sih?
            </h1>
            <p className="text-xl text-gray-800 mt-12 text-justify">
              Sine atau dalam bahasa Indonesia sering disebut dengan{" "}
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
                  select === 0 &&
                    "border border-b-2 !text-blue-500 text-xl border-b-blue-500"
                )}
                onClick={() => setSelect(0)}
              >
                Rumus Sinus
              </p>
              <p
                className={clsx(
                  "transition duration-300 text-gray-400 cursor-pointer border-0 select-none",
                  select === 1 &&
                    "border border-b-2 !text-blue-500 text-xl border-b-blue-500"
                )}
                onClick={() => setSelect(1)}
              >
                Rentang Sinus
              </p>
              <p
                className={clsx(
                  "transition duration-300 text-gray-400 cursor-pointer border-0 select-none",
                  select === 2 &&
                    "border border-b-2 !text-blue-500 text-xl border-b-blue-500"
                )}
                onClick={() => setSelect(2)}
              >
                Kuadran
              </p>
              <IoMdArrowRoundForward
                size={32}
                className="ml-auto fill-blue-500 stroke-none cursor-pointer transition duration-250 ease-in-out hover:scale-125"
                onClick={tabHandler}
              />
            </div>
            <div className="flex">
              {select === 0 ? <Rumus /> : null}
              {select === 1 ? <Rentang /> : null}
              {select === 2 ? <Kuadran /> : null}
            </div>
          </div>
        </div>
        <div className="pb-24">
          <h1 className="px-48 py-24 text-5xl font-semibold drop-shadow-lightBlue">
            Untuk lengkapnya, Yukk kita nonton video ini!
          </h1>
          <div className="flex justify-center w-full">
            <video className="w-[56rem] rounded-3xl" controls>
              <source src="/aturan-sinus.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="flex justify-center items-center w-full bg-gray-100 px-24 py-12 text-xl rounded-t-[3.5rem]">
          <div>
            <h1 className="w-1/2 mb-6">
              <b>Eitss!</b> kami punya quiz untuk Anda, jangan lewatkan
              kesempatan untuk mengukur pemahaman Anda mengenai sinus!
            </h1>
            <a
              href="https://quizizz.com/join?gc=76137954"
              className="cursor-pointer bg-blue-500 px-5 py-3 rounded-2xl text-white"
            >
              Klik Disini!
            </a>
          </div>
          <div>
            <img className="w-[25rem]" src="gambar.png" alt="emoji" />
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;

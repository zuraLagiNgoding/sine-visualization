import React from 'react';
import './App.css';
import Sine from './Sine';
import {  AiFillGithub } from "react-icons/ai";

export function Nav() {
  return (
    <div className="px-32 py-10 text-xl text-white font-bold flex justify-between">
      <h1 className=''>Kelompok 1</h1>
      <i className="cursor-pointer">
          <AiFillGithub size="32" className='fill-white'/>
      </i>
    </div>
  )
}


function App() {
  return (
    <div className='flex flex-col relative'>
      <Nav/>
      <div className='flex flex-col text-third grow p-24'>
        <div className='flex w-full justify-center'>
          <h1 className='text-[10rem] drop-shadow-lightBlue'>Visualisasi <span className='underline'>Sinus</span></h1>
        </div>
        <p className='px-24 py-10 text-xl'>Sine atau dalam bahasa Indonesia sering disebut dengan "sin" adalah sebuah fungsi matematika yang menghubungkan perbandingan panjang sisi yang berlawanan dengan sudut tertentu dalam segitiga siku-siku dengan panjang sisi terpanjang</p>
      </div>
      <div className="App">
        <Sine/>
      </div>
    </div>
  );
}

export default App;
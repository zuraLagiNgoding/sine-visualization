import React, { useState, useEffect } from 'react';

export default function Sine() {
    const [degree, setDegree] = useState(0);
    const [sine, setSine] = useState();

    function handleDegree(e) {
        setDegree(parseInt(e.target.value));
    }

    useEffect(() => {

        if (degree === 0 || degree === 180 || degree === 360) {
            setSine("0")
        }
        else if (degree === 30 || degree === 150) {
            setSine("1/2")
        }
        else if (degree === 210 || degree === 330) {
            setSine("-1/2")
        }
        else if (degree === 60 || degree === 120) {
            setSine("1/2 √3")
        }
        else if (degree === 240 || degree === 300) {
            setSine("-1/2 √3")
        }
        else if (degree === 90) {
            setSine("1")
        }
        else if (degree === 270) {
            setSine("-1")
        }
    })

    return (
    <>
        <div className='grow flex gap-3 justify-center items-center drop-shadow-lightBlue '>
            <svg width='1500' height='600' xmlns='http://www.w3.org/2000/svg' >
                <g transform='scale(1.7) translate(20 20)'>
                    <text x="0" y="100">
                        sin(
                    </text>

                    {/* connected line */}
                    <line className='grey' x1={Math.cos(degree / 180 * Math.PI) * 100 + 100 + 110} y1={-Math.sin(degree / 180 * Math.PI) * 100 + 100}
                        x2={degree + 460} y2={-Math.sin(degree / 180 * Math.PI) * 100 + 100} />

                    {/* circle */}
                    <g transform='translate(110 0)'>
                        <line className='grey' x1="100" y1="100" x2="200" y2="100" />


                        <circle className='grey' cx="100" cy="100" r="100" />
                        <path d={'M 130 100 A 30 30 0 ' + (degree <= 180 ? '0' : '1') + ' 0' + (Math.cos(degree / 180 * Math.PI) * 30 + 100) + ' ' + (-Math.sin(degree / 180 * Math.PI) * 30 + 100)} />
                        <line className='grey' x1="100" y1="100" x2={Math.cos(degree / 180 * Math.PI) * 100 + 100} y2={-Math.sin(degree / 180 * Math.PI) * 100 + 100} />
                        <text x={Math.cos(degree / 180 * Math.PI) * 100 + 100 + 10} y={-Math.sin(degree / 180 * Math.PI) * 100 + 100}>
                            {degree}°
                        </text>
                    </g>

                    <text x="370" y="100">
                        ) =
                    </text>

                    {/* sine */}
                    <g transform='translate(460 0)'>
                        <line className='grey' x1="0" y1="100" x2="360" y2="100" />

                        <polyline
                            points={Array.from({ length: degree }, (value, key) => {
                                return key + " " + (-Math.sin(key / 180 * Math.PI) * 100 + 100)
                            })} />
                        <text x={degree + 10} y={-Math.sin(degree / 180 * Math.PI) * 100 + 100}>
                            {sine}
                        </text>
                    </g>
                </g>
            </svg>
            <select name="degree" id="degree" onChange={handleDegree} value={degree}>
                <option value="30">30</option>
                <option value="60">60</option>
                <option value="90">90</option>
                <option value="120">120</option>
                <option value="150">150</option>
                <option value="180">180</option>
                <option value="210">210</option>
                <option value="240">240</option>
                <option value="270">270</option>
                <option value="300">300</option>
                <option value="330">330</option>
                <option value="360">360</option>
            </select>
        </div>    
    </>
    )
}

// const SinusDraw = ({ degree }) => (
//     <>
//       <div id='container'>
//           <svg width='940' height='240' xmlns='http://www.w3.org/2000/svg' >
//               <g transform='translate(20 20)'>
//                   <text x="0" y="100">
//                       sin(
//                   </text>

//                   {/* connected line */}
//                   <line className='grey' x1={Math.cos(degree / 180 * Math.PI) * 100 + 100 + 110} y1={-Math.sin(degree / 180 * Math.PI) * 100 + 100}
//                       x2={degree + 460} y2={-Math.sin(degree / 180 * Math.PI) * 100 + 100} />

//                   {/* circle */}
//                   <g transform='translate(110 0)'>
//                       <line className='grey' x1="100" y1="100" x2="200" y2="100" />


//                       <circle className='grey' cx="100" cy="100" r="100" />
//                       <path d={'M 130 100 A 30 30 0 ' + (degree <= 180 ? '0' : '1') + ' 0' + (Math.cos(degree / 180 * Math.PI) * 30 + 100) + ' ' + (-Math.sin(degree / 180 * Math.PI) * 30 + 100)} />
//                       <line className='grey' x1="100" y1="100" x2={Math.cos(degree / 180 * Math.PI) * 100 + 100} y2={-Math.sin(degree / 180 * Math.PI) * 100 + 100} />
//                       <text x={Math.cos(degree / 180 * Math.PI) * 100 + 100 + 10} y={-Math.sin(degree / 180 * Math.PI) * 100 + 100}>
//                           {degree}°
//               </text>
//                   </g>

//                   <text x="370" y="100">
//                       ) =
//                   </text>

//                   {/* sine */}
//                   <g transform='translate(460 0)'>
//                       <line className='grey' x1="0" y1="100" x2="360" y2="100" />

//                       <polyline
//                           points={Array.from({ length: degree }, (value, key) => {
//                               return key + " " + (-Math.sin(key / 180 * Math.PI) * 100 + 100)
//                           })} />
//                       <text x={degree + 10} y={-Math.sin(degree / 180 * Math.PI) * 100 + 100}>
//                           {parseFloat(Math.sin(degree / 180 * Math.PI)).toFixed(4)}
//                       </text>
//                   </g>
//               </g>
//           </svg>
//           <select name="cars" id="cars" onChange={setDegree(target.value)}>
//             <option value="30">30</option>
//             <option value="60">60</option>
//             <option value="90">90</option>
//             <option value="120">120</option>
//             <option value="150">150</option>
//             <option value="180">180</option>
//             <option value="210">210</option>
//             <option value="240">240</option>
//             <option value="270">270</option>
//             <option value="300">300</option>
//             <option value="330">330</option>
//             <option value="360">360</option>
//           </select>
//       </div>
      
//     </>
// )
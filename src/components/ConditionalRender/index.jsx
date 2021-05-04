import React from 'react'
import './ConditionalRender.css'


export const ConditionalRender = ({ data }) => {
    // 1 варинант
    // <div style={{background: data.color }} className="card">
    //     <h3>{data.title}</h3>
    // </div>


    // 1 -  if else вариант
    // if (data.color) { // Проверка true
    //     return <div style={{ background: data.color }} className="card">
    //         <h3>{data.title}</h3>
    //     </div>
    // } else {  // null == false
    //     return <div style={{ backgroundImage: `url(${data.img})` }} className="card">
    //         {/* <p> here must be image </p> */}
    //         <h3>{data.title}</h3>
    //     </div>
    // }

    // 2 -  switch вариант
    // switch (data.color) { // Проверка true
    //     case null:
    //         return <div style={{ backgroundImage: `url(${data.img})` }} className="card">
    //             {/* <p> here must be image </p> */}
    //             <h3>{data.title}</h3>
    //         </div>
    //     default: // null == false
    //         return <div style={{ background: data.color }} className="card">
    //             <h3>{data.title}</h3>
    //         </div>
    // }

    // 3  -   ? : nth
    // return <>  
    //     {
    //         data.color
    //             ? <div style={{ background: data.color }} className="card">
    //                 <h3>{data.title}</h3>
    //             </div>
    //             : <div style={{ backgroundImage: `url(${data.img})` }} className="card">
    //                 {/* <p> here must be image </p> */}
    //                 <h3>{data.title}</h3>
    //             </div>
    //     }

    // </>

    // 4 - &&

    return <>
        {
            data.color && <div style={{ background: data.color }} className="card">
                <h3>{data.title}</h3>
            </div>

        }
        {
            data.color === null && <div style={{ backgroundImage: `url(${data.img})` }} className="card">
                <h3>{data.title}</h3>
            </div>
        }
    </>



}
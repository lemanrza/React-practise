import React, { useState } from 'react'

export const RandomColor = () => {
    const [color, setColor] = useState("#fff")
    return (
        <>
            <div className='square' style={{
                width: "90px", height: "90px", border: "1px solid black", backgroundColor: color
            }}></div>
            <button onClick={() => {
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                setColor(`rgb(${r}, ${g}, ${b})`);

            }}>Create new color</button>
        </>
    )
}

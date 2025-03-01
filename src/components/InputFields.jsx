import React, { useState } from 'react'

export const InputFields = ({setSum}) => {
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    return (
        <>
            <input type="number" onChange={(e) => {
                setNum1(e.target.value)
            }} placeholder='enter first number' value={num1} />
            <input type="number" onChange={(e) => {
                setNum2(e.target.value)
            }} placeholder='enter second number' value={num2} />
            <button onClick={() => {
                setSum(Number(num1) + Number(num2))
            }}>Calculate sum</button>
        </>
    )
}

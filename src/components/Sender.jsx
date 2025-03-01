import React, { useState } from 'react'

export const Sender = ({ setMessage }) => {
    const [inputText, setInputText] = useState("")
    return (
        <>
            <input onChange={(e) => {
                setInputText(e.target.value)
            }} type="text" />
            <button onClick={() => {
                setMessage(inputText)
                setInputText("")
            }}
            >Show Message</button >
        </>
    )
}

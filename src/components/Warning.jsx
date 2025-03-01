import React, { useState } from 'react'

export const Warning = () => {
    const [warning, setWarning] = useState("")

    return (
        <>
            <button onClick={() => {
                setWarning(true)
                setTimeout(() => {
                    setWarning(false)
                }, 3000);
            }}>click me</button>
            {warning && <p>Warning</p>}</>
    )
}

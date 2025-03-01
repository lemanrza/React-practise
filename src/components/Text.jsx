import React, { useState } from 'react'

export const Text = () => {
    const [text, setText] = useState("")

  return (
    <>
        <input type="text" onKeyUp={(e) => {
        setText(e.target.value)
      }} placeholder='enter text' />
      <hr />
      <p style={{color: "red"}}>{text}</p>
    </>
  )
}

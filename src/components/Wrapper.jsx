import { Sender } from "./Sender";
import { MessageDisplay } from "./MessageDisplay";
import React from 'react'

export const Wrapper = ({message, setMessage}) => {
  return (
    <>
    <Sender setMessage={setMessage}/>
    <MessageDisplay message={message}/>
    </>
  )
}

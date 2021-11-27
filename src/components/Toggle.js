import React, { useState } from "react";

function Toggle() {

  const [isOn, setToggleOnOff] = useState(false)
  function handleClick(){
    setToggleOnOff((isOn) => !isOn)
  }
// make on for red , and off for white
// const color = isOn ? 'red': 'white'
// for style color 
// style={{background: color}}
  const color = isOn ? 'red' :'white'
  return <button style={{ background: color}} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;

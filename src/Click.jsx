import React from 'react';
import { useState } from "react";

const Click = () => {
  const [num, setNum] = useState(0)

    return (
        <div>
             <h1 className='h1'>{num }</h1>
      <button onClick={() => {
      if(num < 100) setNum(num + 5)
      }} className='btn'>+5</button>
      <button onClick={() => {
      if(num > 0) setNum(num - 5)
      }} className='btn'>-5</button>
      <button onClick={() => {
        setNum(0)
      }} className='btn btn2'>Reset</button>
        </div>
    );
}

export default Click;

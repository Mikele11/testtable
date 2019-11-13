import React, { useState, useEffect } from 'react'
import './headTableSmall.css';
import logo from '../../assets/Logo.png';

export const HeadTableSmall = () => {

  const [time, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date())
  }

  useEffect(() => {
    setInterval(() => {
      tick();
    }, 1000);
 });

  return (
    <section className="headTableSmall" >
      <div className="headLogoSmall">
        <img src={ logo } alt="Logo"/>
      </div>
      <div className="headTimeSmall">
        <p>
          {time.toLocaleTimeString()}
        </p>
      </div>
    </section>
  )
}

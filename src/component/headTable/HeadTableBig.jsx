import React, { useState, useEffect } from 'react'
import './headTableBig.css';
import logo from '../../assets/Logo.png';

const HeadTableBig = () => { 
  
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
    <section className="headTableBig" >
      <div className="headBigFirstLine">
        <div className="headLogoBig">
          <img src={ logo } alt="Logo"/>
        </div>
        <div className="headTimeBig">
          <p>
            { time }
          </p>
        </div>
      </div>
      <div className="headGroup">
        <p>Zpoždění</p>
        <p>Nástupiště</p>
        <p>Přes</p>
        <p>Odjezd</p>
        <p>Cílová stanice</p>
        <p>Číslo spoje</p>
      </div>
    </section>
  )
}

export { HeadTableBig }
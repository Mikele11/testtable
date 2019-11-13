import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

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

const Logo = styled.div`
  width: 394.43px;
  height: 60px;
  margin: 29px 1433.82px 29px 91.75px;
`;

  return (
    <section className="headTableSmall" >
      <Logo>
        <img src={ logo } alt="Logo"/>
      </Logo>
      <div className="headTimeSmall">
        <p>
          {time.toLocaleTimeString()}
        </p>
      </div>
    </section>
  )
}

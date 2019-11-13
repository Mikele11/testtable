import React from 'react'

import './row.css';
import trainIcon from '../../assets/Vector.png';

const Row = props => {  
  return (
    <section className="row" >
      <div className="rowItem">
        <img src={ trainIcon } alt="TrainLogo"/>
      </div>
      <div className="rowItem">
        {props.connectNumber}
      </div>
      <div className="rowItem">
        {props.destination}
      </div>
      <div className="rowItem">
        {props.departure}
      </div>
      <div className="rowItem">
        {props.through}
      </div>
      <div className="rowItem">
        {props.platform}
      </div>
      <div className="rowItem">
      </div>
    </section>
  )
}

export { Row }
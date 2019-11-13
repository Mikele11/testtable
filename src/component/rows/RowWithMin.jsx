import React from 'react'

import './row.css';
import trainIcon from '../../assets/Vector.png';
import { Label } from '../label/Label'

const RowWithMin = props => {  
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
      <Label
        style={props.minStyle}
        label={props.minLabel}
      />
      <Label
        style={props.placeStyle}
        label={props.placeLabel}
      />
    </section>
  )
}

export { RowWithMin }
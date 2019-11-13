import React from 'react'

import trainIcon from '../../assets/Vector.png';
import { Label } from '../label/Label';

const RowWithTime = props => {  
  return (
    <section className="rowWithTime" >
      <div className="firstRow">
        <p>
          {props.destination}
        </p>
        <p>
          {props.departure}
        </p>      
      </div>
      <div className="secondRow">
        <p>
          {props.through}
        </p>
      </div>
      <div className="threeRow">
        <div>
          <img src={ trainIcon } alt="TrainLogo"/>
        </div>
        <p>
          {props.connectNumber}
        </p>
        <Label/>
      </div>
    </section>
  );
}

export { RowWithTime }

import React from 'react'
import trainIcon from '../../assets/Vector.png';

const RowWithTime = props => {  
  return (
    <section className="liveLine" >
      <div>
        <img src={ trainIcon } alt="TrainLogo"/>
      </div>
      <div>
        {props.connectNumber}
      </div>
      <div>
        {props.destination}
      </div>
      <div>
        {props.departure}
      </div>
      <div>
        {props.through}
      </div>
      <div>
        {props.platform}
      </div>

    </section>
  )
}

export { RowWithTime }

import React from 'react'
import train from '../../assets/Vector.png';

const Row = props => {  
  return (
    <section className="liveLine" >
      <div>
        <img src={ train } alt="TrainLogo"/>
      </div>
      <div>
        {props.trainNumber}
      </div>
      <div>
        {props.town}
      </div>
      <div>
        {props.time}
      </div>
      <div>
        {props.toTown}
      </div>
      <div>
        {props.platforms}
      </div>
    </section>
  )
}

export { Row }
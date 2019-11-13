import React from 'react'



const Row = props => {  
  return (
    <section className="row" >
      <div className="rowItem">
        <img src={ train } alt="TrainLogo"/>
      </div>
      <div className="rowItem">
        {props.trainNumber}
      </div>
      <div className="rowItem">
        {props.town}
      </div>
      <div className="rowItem">
        {props.time}
      </div>
      <div className="rowItem">
        {props.toTown}
      </div>
      <div className="rowItem">
        {props.platforms}
      </div>
    </section>
  )
}

export { Row }
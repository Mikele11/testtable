import React from 'react'
import './liveLine.css';
import Ticker from 'react-ticker'

const LiveLine = props => {  
  return (
    <section className="liveLine" >
      
      <div style={{ marginLeft:"130px" }}>
        <Ticker
            direction="toRight"
            offset="50%"
            speed={5}
        >
          {() => (
            <p style={{ marginLeft:"130px" }} className="pliveLine"> { props.text } </p>   
          )}
        </Ticker>
      </div>
    </section>
  )
}

export { LiveLine }
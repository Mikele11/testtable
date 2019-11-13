import React from 'react'

import { HeadTableSmall } from '../component/headTable/HeadTableSmall'
import { RowWithTime } from '../component/rows/RowWithTime'

const rows = ['rows','rows','rows']

const TableSmallThree = props => {  
  return (
    <section className="tableSmall" >
      <HeadTableSmall/>
      {rows.map((item,index) =>{
        return <RowWithTime
                  key={index}
                />
      })}
    </section>
  )
}

export { TableSmallThree }
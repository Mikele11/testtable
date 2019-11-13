import React from 'react'

import { HeadTableSmall } from '../component/headTable/HeadTableSmall'
import { RowWithTime } from '../component/rows/RowWithTime'

const rows = ['rows','rows','rows']

const TableSmall = props => {  
  return (
    <section className="tableSmall" >
      <HeadTableSmall/>
      {rows.map((item,index) =>{
          <RowWithTime
          />
      })}
    </section>
  )
}

export { TableSmall }
import React from 'react'

import { HeadTableBig } from '../component/headTable/HeadTableBig'
import { RowWithMin } from '../component/rows/RowWithMin'
import { LiveLine } from '../component/liveLine/LiveLine'

const rows = ['rows','rows','rows']

const TableOutside = props => {  
  return (
    <section className="tableOutside" >
      <HeadTableBig/>
        {rows.map((item,index) =>{
          <RowWithMin
          />
        })}
      { props.liveLine ? <LiveLine/> : null}
    </section>
  )
}

export { TableOutside }
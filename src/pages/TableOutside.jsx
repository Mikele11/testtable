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
          return <RowWithMin
          connectNumber="js406"
          destination="z"
          departure="z"
          through="z"
          platform="z"
        />
        })}
    </section>
  )
}

export { TableOutside }
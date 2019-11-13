import React from 'react'

import { HeadTableBig } from '../component/headTable/HeadTableBig'
import { RowWithMin } from '../component/rows/RowWithMin'
import { LiveLine } from '../component/liveLine/LiveLine'


// useEffect(() => {
//   fetch(`https://swapi.co/api/people/?page=${this.state.activePage}`,{ mode: 'cors' })
//     .then(res => res.json())
//     .then(
//       (result) => {
//         this.setState({
//           people: result.results,
//           items: result.results
//         });
//         this.props.history.push('/');
//       })
//     .catch((error) => {
//       console.log('err',error)	  
//     });  
// });

const rows = ['rows','rows','rows']

const TableInside = props => {  
  return (
    <section className="tableBig" >
      <HeadTableBig/>
        {rows.map((item,index) =>{
          <RowWithMin
          />
        })}
      { props.liveLine ? <LiveLine/> : null}
    </section>
  )
}

export { TableInside }
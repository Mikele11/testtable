import React, { Component } from 'react';
import { HeadTableBig } from './headTable/HeadTableBig'
import { HeadTableSmall } from './headTable/HeadTableSmall'
import { LiveLine } from '../component/liveLine/LiveLine'
import { Row } from '../component/rows/Row'
import { Label } from '../component/label/Label'


class App extends Component {

  render() {
    return (
      <div>
        <HeadTableSmall/>
        {/* <Row
          trainNumber="ft109"
          town="Brno"
          time="13-00"
          toTown="Phaga"
          platforms="3/4"
        /> */}
        <Label/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { HeadTableBig } from './headTable/HeadTableBig'
import { HeadTableSmall } from './headTable/HeadTableSmall'
import { LiveLine } from '../component/liveLine/LiveLine'
import { Label } from '../component/label/Label'

class App extends Component {

  render() {
    return (
      <div>
        <HeadTableSmall/>
        <Label 
          label="0min"
        />
        <LiveLine text="АлисаАлисаАлисаАлисаАлисаАлисаАлисаАлиса"/>
      </div>
    );
  }
}

export default App;

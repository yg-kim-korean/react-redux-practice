import React, {Component} from "react";
import DisplayNumber from '../containers/DisplayNumber';

export default class DisplayNumberRoot extends Component{
    
    render(){
      return(
        <div>
          <h1>Displa Number Root</h1>
          {/* <DisplayNumber number={this.props.number} /> */}
          <DisplayNumber unit="kg"/>
        </div>
      )
    }
  }

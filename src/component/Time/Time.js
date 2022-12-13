import React from 'react';


 
class Time extends React.Component {
  state={
    curDT : new Date().toLocaleString(),
  }
  render(){
    return (
      <div>
        <p>{this.state.curDT}</p>
      </div>
    );
  }
}
 
export default Time;
import React, { PureComponent } from 'react';

class App extends PureComponent{

  constructor(){
    super();
    this.state={
      count:10
    }
  }

  render(){
    console.warn('render');
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pure Component State Count {this.state.count}</h1>

          <button onClick={()=>{this.setState({count:20})}}>Update Count</button>
        </header>
      </div>
    );
  }

}

export default App;
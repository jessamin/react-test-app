import React from 'react';

class Comp extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h3>Component</h3>
      </div>
    );
  }
}
class Content extends React.Component {
  render() {
    return (
      <div>
        <p>React.Component example</p>
      </div>
    );
  }
}
export default Comp;
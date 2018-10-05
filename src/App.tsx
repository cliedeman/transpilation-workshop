import React from 'react';
import ReactDOM from 'react-dom';

const Child = () => <div>child</div>;

class App extends React.Component {
  render() {
    return null;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

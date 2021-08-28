// feature
import React from 'react';
import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data
    };
  }
  render() {
  return (
    <div className="App">
        <div className="grid-container">
          <header>
            <a href="/">Lusama Shop</a>
          </header>
          <main>
          Product List
          </main>
          <footer>
          Alll rights reserved.
          </footer>
        </div>
    </div>
  );
  }
}

export default App;

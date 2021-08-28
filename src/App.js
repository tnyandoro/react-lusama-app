// feature
import React from "react";
import data from "./data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      size: "",
      sort: "",
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
            <div className="content">
              <div className="main">Products</div>
              <div className="sidebar">Cart Items</div>
            </div>
          </main>
          <footer>Alll rights reserved.</footer>
        </div>
      </div>
    );
  }
}

export default App;

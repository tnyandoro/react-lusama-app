// feature
import React from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

  sortProducts(sort) {
    let products = this.state.products;
    if (this.state.sort === "lowest") {
      products.sort((a, b) => a.price - b.price);
    } else if (this.state.sort === "highest") {
      products.sort((a, b) => b.price - a.price);
    }
    this.setState({ products });
  }

  filterProducts = (size, sort) => {

  };
  
  render() {
    return (
      <div className="App">
        <div className="grid-container">
          <header>
            <a href="/">Lusama Shop</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter
                  count={this.state.products.length}
                  size={this.state.size}
                  sort={this.state.sort}
                  filterProducts={this.filterProducts}
                  sortProducts={this.sortProducts}
                />
                <Products products={this.state.products} />
              </div>
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

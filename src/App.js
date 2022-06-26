// import "./App.css";
import ProductList from "./ProductList";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App(props) {
  return (
    <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12" id="bandeau_haut">
              <br/>
              <h3 className="text-center shadow p-2 mb-2 bg-body rounded">Ecommerce Software Solution</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ProductList />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;

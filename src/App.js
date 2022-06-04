import "./App.css";
import ProductList from "./ProductList";
import React, { useState } from "react";

function App(props) {
  return (
    <div className="App">
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12" id="bandeau_haut">
              <h3>Ecommerce Software Solution</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12" id="bloc_gauche">
              <table className="table tasktable table-striped table-responsive">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Description</th>
                    <th>Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  <ProductList />
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-12" id="bandeau_bas">
              <div className="row">
                <div className="col-12">
                  <p>Copyright cybernaboo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

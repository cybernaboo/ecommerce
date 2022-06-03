// import logo from './logo.svg';
import "./App.css";
import ProductList from "./ProductList";
import React, { useState } from "react";
import Produit from "./ProductPreview"

function buildList(products){

  return products.map(productData => (
    <Produit 
           name={productData.name} 
           description={productData.description}    
    />))
}

function ProductList(props) {
    let produits = props.productions.map(p =>
        {return (
            <div>
              <AddProduct onNewProduct={ newProductData => setProducts(  products.concat([newProductData]) )     } />
               {buildList(products)}
            </div>
          )
    //     {return <Produit key ={p.name} name={p.name} description={p.description} prix={p.prix} />});
    // return(
    // <div>{produits}</div>
    //   )
})};

function AddProduct(props){

  let [name, setName] = useState("")

    return (<form
  
      onSubmit={event => {        
        //récupération des données 
        let newProductData = {
          name:name,
        }

        console.log(newProductData)
        event.preventDefault()
        props.onNewProduct(newProductData)
      }}
  
  >
  
    <label for="nom">
      Nom
    </label>
  
    <input id="nom" name="nom"
      value={name}
      onChange={e => setName(e.target.value)}
    />
  

  {/* <label for="desc">
      Desc
    </label>
  
    <input id="desc" Desc="desc"
      value={desc}
      onChange={e => setDesc(e.target.value)}
    />
    <input 
      type="submit"  */}
     
    
    {/* /> */}
  </form>)
}

function Example() {
  // Déclare une nouvelle variable d'état, que l'on va appeler « count »
  const [count, setCount] = useState(90);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>Benjamin</button>
    </div>
  );
}

function App(props) {
  return (
    <div className="App">
      <AddProduct onNewProduct={ newProductData => setProducts(  products + [newProductData] )     } />
      <Example />
      <ProductList productions={props.productions} />
    </div>
  );
}

export default App;

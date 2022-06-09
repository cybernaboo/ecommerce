import { useEffect, useState } from "react";
import "./App.css";
// import AddUpdateProduct from "./AddUpdateProduct";

function reinitCreateInfos(event) {
  document.getElementById("produit").value = "";
  document.getElementById("description").value = "";
  document.getElementById("prix").value = "";
  document.getElementById("image").value = "";
}

function initUpdateInfos(event, props) {
  event.preventDefault();
  document.getElementById("upd-id").value = props.id;
  document.getElementById("upd-produit").value = props.name;
  document.getElementById("upd-description").value = props.description;
  document.getElementById("upd-prix").value = props.prix;
  document.getElementById("upd-image").value = props.image;
}

function reinitUpdateInfos(event) {
  // event.preventDefault();
  console.log("reinit ok");
  document.getElementById("upd-id").value = "";
  document.getElementById("upd-produit").value = "";
  document.getElementById("upd-description").value = "";
  document.getElementById("upd-prix").value = "";
  document.getElementById("upd-image").value = "";
}

function createSubmit(event, fonctionretour) {
  event.preventDefault();
  console.log("name :", document.getElementById("produit").value);
  let produit = {
    name: document.getElementById("produit").value,
    description: document.getElementById("description").value,
    prix: document.getElementById("prix").value,
    image: document.getElementById("image").value,
  };
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(produit),
  };
  fetch("http://localhost:3001/new-product", requestOptions)
    .then((res) => res.json())
    .then((res) => fonctionretour(res))
    .then(() => reinitCreateInfos());
}


function updateSubmit(event, fonctionretour) {
  event.preventDefault();
  
  let produit = {
    id: document.getElementById("upd-id").value,
    name: document.getElementById("upd-produit").value,
    description: document.getElementById("upd-description").value,
    prix: document.getElementById("upd-prix").value,
    image: document.getElementById("upd-image").value,
  };
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(produit),
  };
  fetch("http://localhost:3001/update-product", requestOptions)
    .then((res) => res.json())
    .then((res) => fonctionretour(res))
    .then(() => reinitUpdateInfos());

}

function AddUpdateProduct(props) {
  return (
    <div>
      <form
        id="formulaire"
        onSubmit={(event) => createSubmit(event, props.fonctionretour)}
      >
        <br />
        <label>
          Nom :
          <input type="text" id="produit" />
        </label>
        <br />
        <br />
        <label>
          Description :
          <input type="text" id="description" />
        </label>
        <br />
        <br />
        <label>
          Prix :
          <input type="text" id="prix" />
        </label>
        <br />
        <br />
        <label>
          URL Image :
          <input type="text" id="image" />
        </label>
        <br />
        <br />
        <input type="submit" value="Ajouter produit" />
      </form>

      <form
        id="formulaire"
        onSubmit={(event) => updateSubmit(event, props.fonctionretour)}
      >
        <br />
        <label>
          Référence :
          <input type="text" id="upd-id" readOnly/>
        </label>
        <br />
        <br />
        <label>
          Nom :
          <input type="text" id="upd-produit" />
        </label>
        <br />
        <br />
        <label>
          Description :
          <input type="text" id="upd-description" />
        </label>
        <br />
        <br />
        <label>
          Prix :
          <input type="text" id="upd-prix" />
        </label>
        <br />
        <br />
        <label>
          URL Image :
          <input type="text" id="upd-image" />
        </label>
        <br />
        <br />
        <input type="submit" value="Modifier produit" />
      </form>
    </div>
  );
}

function Produit(props) {
  return (
    <tr>
      <td className="align-middle">
        <label name="lbl1">{props.id}</label>
      </td>
      <td className="align-middle">
        <label>{props.name}</label>
      </td>
      <td className="align-middle">
        <label>{props.description}</label>
      </td>
      <td className="align-middle">
        <label>{props.prix}</label>
      </td>
      <td className="align-middle">
        <img src={props.image} width="125" height="100"></img>
      </td>
      <td className="align-middle">
        <a href="#">
          <img
            data-item={props.id}
            name="img1"
            src={require("./edit.png")}
            width="25"
            height="25"
            onClick={(event) => initUpdateInfos(event, props)}
          />
        </a>
      </td>
      <td className="align-middle">
        <a href="#">
          <img src={require("./trash.png")} width="25" height="25" />
        </a>
      </td>
    </tr>
  );
}

function ProductList() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/get_products", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((jsondata) => {
        setProducts(jsondata);
      });
  }, []);

  let produits = products.map((p) => {
    return (
      <Produit
        key={p.id}
        id={p.id}
        name={p.name}
        description={p.description}
        prix={p.prix}
        image={p.image}
      />
    );
  });
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Référence</th>
            <th>Produit</th>
            <th>Description</th>
            <th>Prix</th>
            <th>Visuel</th>
          </tr>
        </thead>
        <tbody>{produits}</tbody>
      </table>
      <AddUpdateProduct fonctionretour={setProducts} />
    </div>
  );
}

export default ProductList;

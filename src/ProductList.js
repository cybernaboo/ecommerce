import { useEffect, useState } from "react";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
  console.log("reinit ok");
  document.getElementById("upd-id").value = "";
  document.getElementById("upd-produit").value = "";
  document.getElementById("upd-description").value = "";
  document.getElementById("upd-prix").value = "";
  document.getElementById("upd-image").value = "";
}

function createSubmit(event, fonctionretour) {
  // event.preventDefault();
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

function deleteSubmit(event, props) {
  event.preventDefault();

  let produit = {
    id: props.id,
  };
  console.log("produit delete :", produit);
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(produit),
  };
  fetch("http://localhost:3001/delete-product", requestOptions)
    .then((res) => res.json())
    .then((res) => props.fonctionretour(res));
}

function AddUpdateProduct(props) {
  return (
    <div>
      <form
        id="formulaire"
        onSubmit={(event) => createSubmit(event, props.fonctionretour)}
        class = "card p-3 bg-light"
      >
        <div className="form-group">
          <label htmlFor="produit">Nom</label>
            <input
              className="form-control shadow p-2 mb-2 bg-body rounded"
              type="text"
              id="produit"
              placeholder="produit"
              
            />
        </div>
        <div className="form-group">
          <label htmlFor="description">
            Description
          </label>
            <input
              className="form-control shadow p-2 mb-2 bg-body rounded"
              type="text"
              id="description"
              placeholder="description"
            />
          </div>
        <div className="form-group">
          <label htmlFor="prix">
            Prix
          </label>
            <input
              className="form-control shadow p-2 mb-2 bg-body rounded"
              type="text"
              id="prix"
              placeholder="##.##"
              pattern="^\d*(\.\d{0,2})?$"
            />
        </div>
        <div className="form-group">
          <label htmlFor="image">
            Lien image
          </label>
            <input
              className="form-control shadow p-2 mb-2 bg-body rounded"
              type="text"
              id="image"
              placeholder="http://xxxxxxxxx"
            />
          </div>
          <br/>
        <button type="submit" className="btn btn-primary form-control">
          Ajouter produit
        </button>
      </form>

      <form
        id="formulaire"
        onSubmit={(event) => updateSubmit(event, props.fonctionretour)}
        class = "card p-3 bg-light"
      >
        <div className="form-group">
          <label htmlFor="upd-id">Référence</label>
            <input
              className="form-control shadow p-2 mb-2 bg-body rounded"
              type="text"
              id="upd-id"
              placeholder="Id"
              readonly
            />
        </div>
        <div className="form-group">
          <label htmlFor="upd-produit">Nom</label>
            <input
              className="form-control shadow p-2 mb-2 bg-body rounded"
              type="text"
              id="upd-produit"
              placeholder="produit"
            />
        </div>
        <div className="form-group">
          <label htmlFor="upd-description">
            Description
          </label>
            <input
              className="form-control shadow p-2 mb-2 bg-body rounded"
              type="text"
              id="upd-description"
              placeholder="description"
            />
          </div>
        <div className="form-group">
          <label htmlFor="upd-prix">
            Prix
          </label>
            <input
              className="form-control shadow p-2 mb-2 bg-body rounded"
              type="text"
              id="upd-prix"
              placeholder="##.##"
            />
        </div>
        <div className="form-group">
          <label htmlFor="upd-image">
            Lien image
          </label>
            <input
              className="form-control shadow p-2 mb-2 bg-body rounded"
              type="text"
              id="upd-image"
              placeholder="http://xxxxxxxxx"
            />
          </div>
        <br />
        <input type="submit" value="Modifier produit" className="btn btn-primary form-control"/>
      </form>
    </div>
  );
}

function Produit(props) {
  console.log("fonc fonctionretour : ", props.fonctionretour);
  console.log("props : ", props);

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
            src={require("./edit.png")}
            width="25"
            height="25"
            onClick={(event) => initUpdateInfos(event, props)}
          />
        </a>
      </td>
      <td className="align-middle">
        <a href="#">
          <img
            src={require("./trash.png")}
            width="25"
            height="25"
            onClick={(event) => deleteSubmit(event, props)}
          />
        </a>
      </td>
    </tr>
  );
}

function ProductList() {
  let [products, setProducts] = useState([]);
  console.log("fonc set : ", setProducts);

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
        fonctionretour={setProducts}
      />
    );
  });
  return (
    <div className="row">
      <div className="col-8">
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
      </div>
      <div className="col-4">
        <AddUpdateProduct fonctionretour={setProducts} />
      </div>
    </div>
  );
}

export default ProductList;

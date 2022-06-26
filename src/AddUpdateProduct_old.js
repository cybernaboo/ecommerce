import { useEffect, useState } from "react";
import "./App.css";

function reinitCreateInfos(event) {
    document.getElementById("produit").value="";
    document.getElementById("description").value="";
    document.getElementById("prix").value="";
    document.getElementById("image").value="";
};

function initUpdateInfos(event) {
  document.getElementById("id").value="";
  document.getElementById("produit").value="";
  document.getElementById("description").value="";
  document.getElementById("prix").value="";
  document.getElementById("image").value="";
};

function CreationSubmit(event, fonctionretour) {
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
    .then((()=> reinitCreateInfos()))
}

function UpdateSubmit(event, fonctionretour) {
  event.preventDefault();
  console.log("event.target.name:",event.target.name)
  console.log("event.target.value:",event.target.value)


  // console.log("name :", document.getElementById("produit").value);
  // let produit = {
  //   id: document.getElementById("upd-id").value,
  //   name: document.getElementById("upd-produit").value,
  //   description: document.getElementById("upd-description").value,
  //   prix: document.getElementById("upd-prix").value,
  //   image: document.getElementById("upd-image").value,
  // };
  // const requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(produit),
  // };
  // fetch("http://localhost:3001/update-product", requestOptions)
  //   .then((res) => res.json())
  //   .then((res) => fonctionretour(res));
}

function AddUpdateProduct(props) {
  return (
    <div>
      <form
        id="formulaire"
        onSubmit={(event) => CreationSubmit(event, props.fonctionretour)}
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
        onSubmit={(event) => UpdateSubmit(event, props.fonctionretour)}
      >
        <br />
        <label>
          Référence :
          <input type="text" id="upd-id" />
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

export default AddUpdateProduct;

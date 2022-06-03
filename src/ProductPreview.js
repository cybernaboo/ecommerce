import "./App.css";

function Produit(Props) {
  return (
    <div>
      <tr>
        <td>
          <label>{Props.name}</label>
        </td>
        <td>
          <label>{Props.description}</label>
        </td>
        <td>
          <label>{Props.prix}</label>
        </td>
        <td>
          <img src={Props.image}></img>
        </td>
      </tr>
    </div>
  );
}

export default Produit;

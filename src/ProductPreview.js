import "./App.css";

function Produit(Props) {
  return (
      <tr>
        <td className="align-middle">
          <label>{Props.id}</label>
        </td>
        <td className="align-middle">
          <label>{Props.name}</label>
        </td>
        <td className="align-middle">
          <label>{Props.description}</label>
        </td>
        <td className="align-middle">
          <label>{Props.prix}</label>
        </td>
        <td className="align-middle">
          <img src={Props.image} width="125" height="100"></img>
        </td>
        <td className="align-middle">
          <a href="#">
            <img src={require("./edit.png")} width="25" height="25" />
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

export default Produit;

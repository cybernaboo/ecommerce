import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Vérifier que les boutons et titres sont présents", () => {
  it("Présence titre principal", () => {
    render(<App />);
    const headerElement = screen.getByText(/Ecommerce/i);
    expect(headerElement).toBeInTheDocument();
  });
  test("Présence des boutons et labels", () => {
    render(<App />);
    const linkElement = screen.getByText(/ajouter/i);
    expect(linkElement).toBeInTheDocument();
    const linkElement2 = screen.getByText(/modifier/i);
    expect(linkElement2).toBeInTheDocument();
  });
});

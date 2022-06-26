// we will use supertest to test HTTP requests/responses
const request = require("supertest");
// we also need our app for the correct routes!
const app = require("./serveur");

describe("GET /get_products", () => {
    test("renvoie la liste des produits avec le premier item = Carottes", async () => {
      const response = await request(app).get("/get_products");
      console.log("response :",response.body);
      expect(response.statusCode).toBe(200);
      expect(response.body[0]["name"]).toBe("Carottes");
    });
  });
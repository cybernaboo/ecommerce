const express = require("express");
const router = express.Router();
const product_tools = require("./product_tools");
const cookieParser = require('cookie-parser')
var uuid = require('uuid');

const app = express();
const port = 3001;
const cors = require("cors")
app.use(express.static("css"));
app.use(express.static("src"));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())

app.use(express.static("src"));
app.use(express.urlencoded({ extended: true }));

//   app.use(express.json({
//     type: ['application/json', 'text/plain']
//   }))
///

client = product_tools.connectToSQL()
let userData = {};

app.get("/get_products", (req, res) => {
    product_tools.dbGetProducts(client, function (error, results, fields) {
        res.cookie('monpremiercookie', "trop la classe !", { maxAge: 900000, httpOnly: true });
        res.json(results.rows);
    })
});

app.post("/new-product", (req, res) => {
    let tab_val = [req.body.name, req.body.description, req.body.prix, req.body.image];
    product_tools.insertproduct(tab_val, client);
});

app.get("/welcome_page", (req, res) => {
    if (typeof (req.cookies.userid) === "undefined") {
        // userid = Math.floor(Math.random() * 10000);
        userid = uuid.v4();
        res.cookie('userid', userid, { maxAge: 900000, httpOnly: true });
        userData[userid]=[];
        console.log("nouveau userid : ", userid);
        console.log("panier users : ", userData);
    }
    console.log("page de bienvenue : ");
    res.json("<h1>Bienvenue sur notre site</h1>");
});

app.get("/ajouter-produit-panier/:productid", (req, res) => {
    userid = req.cookies.userid;
    productid = req.params.productid;
    userData[userid].push(productid);
    console.log("panier users alimenté : ", userData);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
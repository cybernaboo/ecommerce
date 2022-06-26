const express = require("express");
const router = express.Router();
const product_tools = require("./product_tools");
const cookieParser = require('cookie-parser')
var uuid = require('uuid');

const serveur = express();
const port = 3001;
const cors = require("cors")
serveur.use(express.static("css"));
serveur.use(express.static("src"));
serveur.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
serveur.use(cookieParser())
serveur.use(express.json())

serveur.use(express.static("src"));
serveur.use(express.urlencoded({ extended: true }));

let client = product_tools.connectToSQL()
let userData = {};

serveur.get("/get_products", (req, res) => {
    console.log("API : /get_products");
    product_tools.dbGetProducts(client, function (error, results, fields) {
        if (typeof (req.cookies.client) === "undefined") {
            // userid = Math.floor(Math.random() * 10000);
            let userid = uuid.v4();
            res.cookie('client', userid, { maxAge: 900000, httpOnly: true });
            userData[userid] = [];
            console.log("nouveau userid : ", userid);
            console.log("produits ajoutés du user : ", userData);
        }
        // res.cookie('monpremiercookie', "trop la classe !", { maxAge: 900000, httpOnly: true });
        res.json(results.rows);
    })
});

serveur.post("/new-product", (req, res) => {
    console.log("API : /new-product");
    if (req.body.prix === "") { console.log("Produit sans pris => mise à prix nul"); req.body.prix = "0" }
    let tab_val = [req.body.name, req.body.description, req.body.prix, req.body.image];
    product_tools.insertproduct(tab_val, client);
    userid = req.cookies.client;
    if (userData[userid] === undefined){
        userData[userid] = [];
    } ;
    productid = req.body.name;
    userData[userid].push(productid);
    console.log("produits users ajoutés : ", userData);
    product_tools.dbGetProducts(client, function (error, results, fields) {
        res.json(results.rows)
    });
});

serveur.put("/update-product", (req, res) => {
    console.log("API : /update-product");
    let tab_val = [req.body.id, req.body.name, req.body.description, req.body.prix, req.body.image];
    product_tools.updateproduct(tab_val, client);
    product_tools.dbGetProducts(client, function (error, results, fields) {
        res.cookie('monpremiercookie', "trop la classe !", { maxAge: 900000, httpOnly: true });
        res.json(results.rows)
    });
});

serveur.delete("/delete-product", (req, res) => {
    console.log("API : /delete-product");
    let tab_val = [req.body.id];
    product_tools.deleteproduct(tab_val, client);
    product_tools.dbGetProducts(client, function (error, results, fields) {
        res.cookie('monpremiercookie', "trop la classe !", { maxAge: 900000, httpOnly: true });
        res.json(results.rows)
    });
});

serveur.listen(port, () => {
    console.log(`serveur. listening on port ${port}`);
});

module.exports= serveur;
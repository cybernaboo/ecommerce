const { Client } = require("pg");

function connectToSQL() {
    const connection = new Client({
        user: "postgres",
        host: "localhost",
        database: "WEBJS",
        password: "Azerty.123",
        port: 5432,
    });
    connection.connect();
    return connection;
}

function insertproduct(tab_val, client) {
    let cmdsql = `insert into produits (name, description, prix, image) values($1,$2,$3,$4)`;
    client.query(cmdsql, tab_val, (err, res) => {
        console.log(err, res);
        console.log("Création produit ok");
    });
}

function updateproduct(tab_val, client) {
    let cmdsql = `update produits set name=$2, description=$3, prix=$4, image=$5 where id=$1`;
    client.query(cmdsql, tab_val, (err, res) => {
        console.log(err, res);
        console.log("Update produit ok");
    });
}


function closetask(id, client) {
    let cmdsql = `update taches set cloture=true where id=${id}`;
    client.query(cmdsql, (err, res) => {
        console.log(`Tâche ${id} clôturée`);
    });
}

function dbGetProducts(client, fonction_traitement_resultat_bdd) {
    let query =
        "SELECT id, name, description, prix, image FROM produits ORDER BY name";
    client.query(query, fonction_traitement_resultat_bdd);
}

module.exports = {
    connectToSQL: connectToSQL,
    dbGetProducts: dbGetProducts,
    insertproduct: insertproduct,
    updateproduct: updateproduct,
    closetask: closetask,
};
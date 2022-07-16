# Project ECOMMERCE
Gestion d'une liste de produits

![forthebadge](src/made-for-efrei-project.svg)  ![forthebadge](src/training-sg-reskilling---web-developer.svg)

Cette application fonctionne à partir d'un navigateur web, permet à l'utilisateur de gérer une base de produits avec les fonctions CRUD (visualisation/création/modification/suppression).

## Pour commencer

Elle utilise une base de données Postgres pour enregistrer les données de façon persistante.
L'application utilise la techno nodejs pour le backend (framework express) et du html/css/reactjs pour l'interface utilisateur.

### Pré-requis

Les pré-requis pour utiliser ce projet :

- Installer un navigateur internet sur le poste de travail
- Installer le sgbd postgresql (local ou serveur)
- Installer nodejs (local ou serveur)
- Installer les librairies node : express, pg, react

### Installation

* Créer une base de données dans votre sgbd postgres ``WEBJS`` (modifiable dans le source src/backend/product_tools.js)
* Executez le script sql ``create_tables.sql`` pour créer la table des tâches (script dispo dans dossier bdd)
* Initialiser la table ``produits`` depuis le script ``export_import.sql`` en utilisant le fichier de données ``produits.csv``
* Adaptez le code de la fonction "function connectToSQL()" dans le source ``src/backend/product_tools.js`` pour personnaliser : nom de la BDD, nom et le mot de passe utilisateur, le serveur et le port 

## Démarrage

Dans le répertoire racine du projet, ouvrez une fenêtre de commandes et lancez la commande "npm start" :
* Pour accéder à l'interface utilisateur, indiquez l'url http://localhost:3000 dans votre nabigateur web

## Fabriqué avec

* [Visual Studio Code](https://code.visualstudio.com/) - Environnement de développement
* [React](https://fr.reactjs.org/) - Librairie front end

## Versions
**Dernière version stable :** 1.0
**Dernière version :** 1.0

## Auteurs
* **Nabil AICI** _cybernaboo_ [@cybernaboo](https://github.com/cybernaboo)





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

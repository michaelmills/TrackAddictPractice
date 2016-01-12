# TrackAddictPractice
Practice repository for creating a **Universal Javascript** site using **ReactJS, Express, Webpack, and MongoDB (with Mongoose)**.

## Before you start!
Run `npm install`.
This will install all dependencies locally.

#### Production Build
1. Run `npm run build`. 
This will clean the **/dist** folder and build the client and server.


2. Start the server `npm start`
3. Navigate to **http://localhost:5050/**


#### Webpack Dev Server
1. Run `npm run dev`
2. Navigate to **http://localhost:5050/**


If you've already run `npm run build`, don't worry about cleaning the **/dist** folder. Wepack-dev-server has it's own build configuration and stores it in memory.

## TODO List
- [ ] Unable to find source *client.js*
- [ ] Unable to see */static/* folder
- [ ] Unable to require *.css* files
- [ ] Add MongoDB models and controllers
- [ ] Apply ESLint loader
- [ ] Change *.jsx* extension to *.js* (...maybe, it's a low priority)

### Dependencies
    "babel-cli": "^6.4.0",
    "babel-core": "^6.4.0",
    "babel-loader": "^6.2.1",
    "babel-preset-es2015": "^6.3.13",
    "babel-preset-react": "^6.3.13",
    "babel-register": "^6.3.13",
    "css-loader": "^0.23.1",
    "eslint": "^1.10.3",
    "eslint-loader": "^1.2.0",
    "eslint-plugin-react": "^3.14.0",
    "express": "^4.13.3",
    "file-loader": "^0.8.5",
    "json-loader": "^0.5.4",
    "mongoose": "^4.3.4",
    "react": "^0.14.6",
    "react-dom": "^0.14.6",
    "react-helmet": "^2.2.0",
    "react-hot-loader": "^1.3.0",
    "react-router": "^1.0.3",
    "react-transform-catch-errors": "^1.0.1",
    "react-transform-hmr": "^1.0.1",
    "style-loader": "^0.13.0",
    "url-loader": "^0.5.7",
    "webpack": "^1.12.10",
    "webpack-dev-middleware": "^1.4.0",
    "webpack-dev-server": "^1.14.0",
    "webpack-hot-middleware": "^2.6.0"

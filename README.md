# react-project-template
The following instructions demonstrate how to set up a project using

- **React**
- **TypeScript**
- **Redux**

## Inspiration
Inspiration and instruction for this project was taken from the following blog posts and documention.

#### Blog Posts and Documentation
- [https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel](https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel)
- [https://www.typescriptlang.org/docs/handbook/react-&-webpack.html](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)
  - Some parts out of date: [https://github.com/Microsoft/TypeScript/issues/13873](https://github.com/Microsoft/TypeScript/issues/13873)

#### Documentation
- [https://webpack.github.io/docs/webpack-dev-server.html](https://webpack.github.io/docs/webpack-dev-server.html)

## File Structure
This project uses the following file structure

```
.
|-- index.html
|-- client
    |-- index.js
    |-- components
|-- dist
    |-- bundle.js
|-- package.json
|-- node_modules
```

where the above directories and files correspond to the following:

- `index.html` - html page served up to the client
- `client/` - javascript source code
- `client/index.js` - entry point for the javascript code
- `dist/` - output folder for the compiled javascript code
- `dist/bundle.js` - transpiled javascript application

## Step 1 - set up [yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com/)
You can choose to manage dependencies using either yarn or npm. As of early 2017 it's not clear if yarn will become the defacto standard, but it seems to be gaining popularity. These instructions will use `yarn`, but you can also use `npm` with minimal tweaks to the following instructions.

You can find instructions for installing yarn [here](https://yarnpkg.com/lang/en/docs/install/)

Create a new directory, `cd` into it and initialize your project via:
```
yarn init
```

This will take ask your a series of questions, and will generate a `package.json` file based on how you answer them. You can always update the `package.json` file in the future, so don't feel like you have to configure everything correctly out of the box. 


## Step 2. [Webpack](https://webpack.js.org/)
We we are going to use webpack to manage our code. First, install webpack, webpack-dev-server via the following command.

```
yarn add webpack webpack-dev-server
yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev

yarn add react react-dom @types/react @types/react-dom

yarn add typescript awesome-typescript-loader source-map-loader --dev
```

Since this is the first dependency we have installed, it will create a `node_modules` directory, `yarn.lock` file, and update our `package.json` file to include `webpack`, `webpack-dev-server`, and the other dependencies that we installed above.

Next, create a `webpack.config.js` file, and update it to look something like this.

```
const path = require('path');
module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
```

Add a TypeScript configuration file `tsconfig.json` with the following contents:

```
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es5",
    "jsx": "react"
  },
  "include": [
    "./client/**/*"
  ]
}
```

The `webpack.config.js` file defines the entry point for our javascript code to live in `./client/index.js`, and specifies that the compiled javascript be placed in `./dist/bundle.js`.

## 

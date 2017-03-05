# react-project-template
The following instructions demonstrate how to set up a project using

- **React**
- **TypeScript**
- **Redux**

## Inspiration
Inspiration and instruction for this project was taken from the following blog posts and documention.

#### Blog Posts
- [https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel](https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel)

#### Documentation
- [https://webpack.github.io/docs/webpack-dev-server.html](https://webpack.github.io/docs/webpack-dev-server.html)

## Step 1 - set up [Yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com/)
You can choose to manage dependencies using either Yarn or npm. As of early 2017 it's not clear if Yarn will become the defacto standard, but it seems to be gaining popularity. These instructions will use `yarn`, but you can also use `npm` with minimal tweaks to the following instructions.

You can find instructions for installing `yarn` [here](https://yarnpkg.com/lang/en/docs/install/)

Create a new directory, `cd` into it and initialize your project via:
```
yarn init
```

This will take ask your a series of questions, and will generate a `package.json` file based on how you answer them. You can always update the `package.json` file in the future, so don't feel like you have to configure everything correctly out of the box. 


## Step 2. [Webpack](https://webpack.js.org/)
We we are going to use webpack to manage our front end code. Install webpack, and some other webpack-related tools via:

```
yarn add webpack webpack-dev-server
```

Since this is the first dependency we have installed, it will create a `node_modules` directory, `yarn.lock` file, and update our `package.json` file to include `webpack` and `webpack-dev-server`.

## 

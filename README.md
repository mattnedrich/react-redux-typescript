# Setup
This project was created to demonstrate how to set up a project using the following technologies:

- **React**
- **Redux**
- **TypeScript**

It also demonstrates how to set up **Jest** for unit testing.

## Inspiration
Inspiration and instruction for this project was taken from the following blog posts and documention.

- [https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel](https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel)
- [https://www.typescriptlang.org/docs/handbook/react-&-webpack.html](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)
  - Some parts out of date: [https://github.com/Microsoft/TypeScript/issues/13873](https://github.com/Microsoft/TypeScript/issues/13873)
- [https://webpack.github.io/docs/webpack-dev-server.html](https://webpack.github.io/docs/webpack-dev-server.html)
- [https://github.com/facebook/jest/tree/master/examples/typescript](https://github.com/facebook/jest/tree/master/examples/typescript)
- [https://spin.atomicobject.com/2016/09/27/typed-redux-reducers-typescript-2-0/](https://spin.atomicobject.com/2016/09/27/typed-redux-reducers-typescript-2-0/)

## File Structure
This project uses the following file structure

```
.
|-- index.html
|-- client/
    |-- index.tsx
    |-- components
|-- dist/
    |-- bundle.js
|-- webpack.config.js
|-- tsconfig.json
|-- package.json
|-- node_modules/
```

where the above directories and files correspond to the following:

- `index.html` - Html page served up to the client
- `client/` - Source code
- `client/index.tsx` - Entry point for the javascript code
- `client/components/` - Custom react components
- `dist/` - Output directory for transpiled code
- `dist/bundle.js` - Transpiled application
- `webpack.config.js` - Webpack configuration file
- `tsconfig.json` - TypeScript configuration file
- `package.json` - Project configuration file
- `node_modules/` - Where dependencies are installed to

## Step 1 - Set up [yarn](https://yarnpkg.com/en/) (or [npm](https://www.npmjs.com/))
You can choose to manage dependencies using either yarn or npm. As of early 2017 it's not clear if yarn will become the defacto standard, but it seems to be gaining popularity. These instructions will use `yarn`, but you can also use `npm` with minimal tweaks to the following instructions.

You can find instructions for installing yarn [here](https://yarnpkg.com/lang/en/docs/install/)

Create a new directory, `cd` into it and initialize your project via:
```
yarn init
```

This will take ask your a series of questions, and will generate a `package.json` file based on how you answer them. You can always update the `package.json` file in the future, so don't feel like you have to configure everything correctly out of the box. 


## Step 2. Install Dependencies
This sections describes how to install all of the required project dependencies using yarn.

### [Webpack](https://webpack.js.org/)
We will use webpack to manage the compilation of our TypeScript code. Install webpack, and webpack-dev-server by running:

```
yarn add webpack webpack-dev-server
```

### [React](https://facebook.github.io/react/)
Install React with type definitions by running:

```
yarn add react react-dom @types/react @types/react-dom
```

### [React](https://facebook.github.io/react/)
Install Redux for usage with react with type definitions by running:

```
yarn add redux react-redux @types/redux @types/react-redux
```

### [TypeScript](https://www.typescriptlang.org/)
Install TypeScript by running:

```
yarn add typescript awesome-typescript-loader --dev
```

We specified `awesome-typescript-loader` which we will use as our TypeScript loader. The [TypeScript docs](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html) seem to recommend using `awesome-typescript-loader`, but also also mention [`ts-loader`](https://github.com/TypeStrong/ts-loader) as an alternative. I have not used it, but it may be worth investigating.

### [Jest](https://facebook.github.io/jest/docs/tutorial-react.html)
We will use Jest as our test runner. Install it and some supporting libraries by running:

```
yarn add jest ts-jest react-addons-test-utils --dev
```

### Summary
After installing all of the above dependencies, you sould have a `node_modules` directory, `yarn.lock` file, and a `package.json` file that includes all of the dependencies. The  `package.json` file should look like this:

```json
{
  "name": "Your Project Name",
  "version": "1.0.0",
  "description": "Your Description",
  "main": "index.tsx",
  "author": "Your Name",
  "license": "Your License",
  "scripts": {
    ...
  },
  "dependencies": {
    ...
  },
  "devDependencies": {
    ...
  }
}

```

The `dependencies` and `devDependencies` sections should be filled in by the libraries we just installed.

## Step 3. Add Configuration Files
The next step is to add configuration files for Webpack, TypeScript, and Jest.

### Webpack Configuration
Create a `webpack.config.js` file, and update it to look something like this.

```javascript
const path = require('path');
module.exports = {
  entry: './client/index.tsx',
  output: {
    path: path.resolve('dist'),
    publicPath: "/dist/",
    filename: 'bundle.js'
  },
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"] 
  },
  module: {
    loaders: [
      { test: /\.tsx$/, loader: 'awesome-typescript-loader' },
    ],
  }
}
```

The `webpack.config.js` file defines the entry point for our javascript code to live in `./client/index.tsx`, and specifies that the compiled javascript be placed in `./dist/bundle.js`. The `loaders` section describes how to process different file types. We are informing webpack to use the `awesome-typescript-loader` when processing `.ts` and `.tsx` files.

### TypeScript Configuration
Create a TypeScript configuration file called `tsconfig.json` with the following contents:

```json
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

You can reference the [TypeScript docs](https://www.typescriptlang.org/docs/handbook/compiler-options.html) to understand the different `compilerOptions` and what they do. The above configuration should be enough to get us off the ground.

### Jest Configuration
Add the following to your `package.json` file, per the [`ts-jest` instructions](https://github.com/kulshekhar/ts-jest).

```json
"jest": {
  "transform": {
    ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ]
},
```
## Step 4. Add Some HTML Boilerplate
We need to define the base HTML file that our application will live in. I recommend using something simple like the following:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Sample React-Redux-TypeScript Project</title>
  </head>
  <body>
    <div id="app"> </div>
    <script src="./dist/bundle.js"> </script>
  </body>
</html>
```

Place the above HTML in an `index.html` file in the root of the project. This file includes a `div` where we will load our application, and the compiled `bundle.js` javascript file.

We can add the following script to our `package.json` file to allow us to start a `webpack-dev-server` pointing at the above HTML file. To do this, add the following to the `scripts` section the `package.json` file.

```json
"scripts": {
  "start": "webpack-dev-server --content-base ./"
}
```
# The Example App
This example app, like every other React/Redux example app contains a greeting message the that user can change, and a button that increments a counter:

<img src="https://cloud.githubusercontent.com/assets/4796480/23883359/d7c43d12-083c-11e7-8f51-82ce56624603.png" width="500px" />

The application state is modeled in the following way:

```typescript
export interface ApplicationState {
  greeting: string
  count: number;
};

const defaultState: ApplicationState = {
  greeting: 'React-TypeScript-Redux Example',
  count: 0
};

export default defaultState;
```
Notice how we can now define our state using types!

There are two main components - `Greeting` and `Increment`. Both are included in a wrapper component called `App`:

```javascript
class App extends React.Component<any, any> {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <Greeting />
        <Increment />
      </div>
    );
  }
}
```

## TypeScript and React/Redux
Thus far, I'm enjoying working with TypeScript. It feels like working in Java or C#, but with Javascript. You can choose to incorporate TypeScript as much as you'd like. You can just write vanilla JavaScript, however, once you declare a type for a variable, it can cause type requirements to ripple into other parts of your code. This seems to be especially evident if you install the type bindings for React and Redux.

The `Greeting` component runs into this on the React side of things. the `Greeting` component HTML looks like this:

```jsx
  <div>
    <h1> {this.props.greeting} </h1>
    <input ref="greetingInputRef" type="text"></input>
    <button onClick={this.updateGreetingAction}>Update Greeting</button>
  </div>
```

When the button is clicked, it calls `updateGreetingAction` which needs to go fetch the text out out the `input` element and dispatch an action to update our application state. The `updateGreetingAction` function looks like this:

```javascript
  updateGreetingAction() {
    this.props.updateGreeting(this.refs.greetingInputRef.value);
  }
```

Here, we just dispatch an action passing the `value` of the `input` element. When I first wrote this, the TypeScript compiler didn't know what `greetingInputRef` was, so it couldn't be sure that it had a `value` property. To work around this, I added some explicit type declaration via:

```javascript
  refs: {
    greetingInputRef: HTMLInputElement;
  }
```

You will run into these types of situations from time to time. It kind of makes you appreciate the weakly typed nature of JavaScript. It also makes you realize how fragile it is.

### Reducers with TypeScript
One area in particular that types can be handy in React/Redux applications is inside of Redux reducers. I came across [this article](https://spin.atomicobject.com/2016/09/27/typed-redux-reducers-typescript-2-0/) and wanted to try out a more strongly typed approach for writing reducers.

Using TypeScript we can define our actions in a type safe manner. The actions for the sample application are defined below, using  TypeScript `type` aliases:

```typescript
export type UpdateGreetingAction = {
  type: ActionTypes.UPDATE_GREETING,
  greeting: string
}

export type IncrementAction = {
  type: ActionTypes.INCREMENT
}
```

We can then create a union type in our reducer, combining all of our individual action types:

```typescript
type Action = Actions.UpdateGreetingAction | Actions.IncrementAction;
```

Then, when we switch on the action type, we are guarenteed type safety when updating our state:

```typescript
const updateState = (state: ApplicationState = defaultState, action: Action) => {
  switch(action.type) {
  case ActionTypes.UPDATE_GREETING:
    return {
      greeting: action.greeting,
      count: state.count
    }
  case ActionTypes.INCREMENT:
    return {
      greeting: state.greeting,
      count: state.count + 1
    }
  default:
    return state;
  }
};
```

If we were to update the `ActionTypes.INCREMENT` case to set `greeting` to `action.greeting` instead of  `state.greeting`, we would receive a compiler error stating that:

```
ERROR in [at-loader] client/reducers/index.ts:16:24
    TS2339: Property 'greeting' does not exist on type 'IncrementAction'.
```

## Project Scripts
To build the TypeScript code and produce an output `bundle.js` file run

```
webpack
```

To start `webpack-dev-server` running run

```
yarn start
```

To run the `jest` tests run

```
yarn test
```
## Debugging
The [Redux dev tools extension](https://github.com/zalmoxisus/redux-devtools-extension) is a nice way to visualize the redux state changes in your app, and debug issues that might arise. There are two steps required to install it:

1. **Install the browser extension** - this varies based on your browser, but there are instructions in the above link.
2. **Update how you instantiate your Redux store** - The second step requires you to insert a debug hook into your code when you instantiate your Redux store. There are several ways to do this depending on your application. The easiest way (explained in the above link) involves adding an extra parameter when you call `createStore`, and looks like this:

```typescript
const store = createStore(
  updateState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__  && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
```

If you also need to include other middleware when you create your store (e.g., for something like `redux-thunk` you can use the following:

```typescript
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const enhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()(createStore) : createStore;
const store = enhancer(updateState, applyMiddleware(thunk));
```

I found this solution in [this issue](https://github.com/zalmoxisus/redux-devtools-extension/issues/134) on the Redux dev tools extension project.

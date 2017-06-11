# React-Redux-TypeScript
This project was created to demonstrate how to set up and organize a project using:

- [**React**](https://facebook.github.io/react/)
- [**Redux**](http://redux.js.org/)
- [**TypeScript**](https://www.typescriptlang.org/)

It also demonstrates how to set up [**Jest**](https://facebook.github.io/jest/) for unit testing, and [**TSLint**](https://palantir.github.io/tslint/) for linting.


# Table of Contents
- [Inspiration](#inspiration)
- [File Structure](#file-structure)
- [Setup](#setup)
  - [Step 1. Create project](#step-1)
  - [Step 2. Install Dependencies](#step-2)
  - [Step 3. Project Configuration](#step-3)
  - [Step 4. HTML Boilerplate](#step-4)
- [Example App](#example-app)
  - [TypeScript with React/Redux](#example-app-typescript)
    - [Components and Containers](#example-app-typescript-component-container)
    - [Reducers](#example-app-typescript-reducers)
  - [Project Scripts](#example-app-project-scripts)
  - [Debugging](#example-app-debugging)

# <a name="inspiration"></a>Inspiration
Inspiration and instruction for this project was taken from the following blog posts and documention.

- [https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel](https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel)
- [https://www.typescriptlang.org/docs/handbook/react-&-webpack.html](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)
  - Some parts out of date: [https://github.com/Microsoft/TypeScript/issues/13873](https://github.com/Microsoft/TypeScript/issues/13873)
- [https://webpack.github.io/docs/webpack-dev-server.html](https://webpack.github.io/docs/webpack-dev-server.html)
- [https://github.com/facebook/jest/tree/master/examples/typescript](https://github.com/facebook/jest/tree/master/examples/typescript)
- [https://spin.atomicobject.com/2016/09/27/typed-redux-reducers-typescript-2-0/](https://spin.atomicobject.com/2016/09/27/typed-redux-reducers-typescript-2-0/)

# <a name="file-structure"></a>File Structure
This project uses the following organizational structure

```
.
|-- index.html
|-- client/
    |-- action-creators/
    |-- action-types/
    |-- components/
    |-- containers/
    |-- reducers/
    |-- application-state.ts
    |-- index.tsx
|-- dist/
    |-- bundle.js
|-- webpack.config.js
|-- tsconfig.json
|-- tslint.json
|-- package.json
|-- node_modules/
```

where the above directories and files correspond to the following:

- `index.html` - Html page served up to the client
- `client/` - Source code
  - `client/action-creators/` - Redux actions and creators
  - `client/action-types/` - Redux actions types
  - `client/components/` - React components
  - `client/containers/` - Redux containers for components
  - `client/reducers/` - Redux reducers
  - `client/application-state.ts` - Redux application state
  - `client/index.tsx` - Entry point for the javascript code
- `dist/` - Output directory for transpiled code
  - `dist/bundle.js` - Transpiled application
- `webpack.config.js` - Webpack configuration file
- `tsconfig.json` - TypeScript configuration file
- `tslint.json` - TSLint configuration
- `package.json` - Project configuration file
- `node_modules/` - Where dependencies are installed to

# <a name="setup"></a> Setup
## <a name="step-1"></a> Step 1. Create Project
You can choose to manage dependencies using either yarn or npm. As of early 2017 it's not clear if yarn will become the defacto standard, but it seems to be gaining popularity. These instructions will use `yarn`, but you can also use `npm` with minimal tweaks to the following instructions.

You can find instructions for installing yarn [here](https://yarnpkg.com/lang/en/docs/install/)

Create a new directory, `cd` into it and initialize your project via:
```
yarn init
```

This will take ask your a series of questions, and will generate a `package.json` file based on how you answer them. You can always update the `package.json` file in the future, so don't feel like you have to configure everything correctly out of the box. 


## <a name="step-2"></a> Step 2. Install Dependencies
This section describes how to install all of the required project dependencies using yarn. 

For every yarn/npm library, there are usually types defined for it in the [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) project. Those type can be added by installing `@types/[normal library name]`, where `[normal library name]` is the name of the library.

### <a name="step-2-webpack"></a> [Webpack](https://webpack.js.org/)
We will use webpack to manage the compilation of our TypeScript code. Install webpack, and webpack-dev-server by running:

```
yarn add webpack webpack-dev-server
```

### <a name="step-2-react"></a> [React](https://facebook.github.io/react/)
Install React with type definitions by running:

```
yarn add react react-dom @types/react @types/react-dom
```

### <a name="step-2-redux"></a> [Redux](https://facebook.github.io/react/)
Install Redux for usage with react with type definitions by running:

```
yarn add redux react-redux @types/redux @types/react-redux
```

### <a name="step-2-typescript"></a> [TypeScript](https://www.typescriptlang.org/)
Install TypeScript by running:

```
yarn add typescript awesome-typescript-loader --dev
```

This project uses `awesome-typescript-loader` for TypeScript compilation. The [TypeScript docs](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html) recommend using it. However, [`ts-loader`](https://github.com/TypeStrong/ts-loader) is also mentioned as an alternative. I have not used it, but it may be worth investigating.

### <a name="step-2-jest"></a> [Jest](https://facebook.github.io/jest/docs/tutorial-react.html)
This project uses Jest as its test runner. Install it and some supporting libraries by running:

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

The `dependencies` and `devDependencies` sections should be populated by the libraries we just installed.

## <a name="step-3"></a> Step 3. Add Configuration Files
The next step is to add configuration files for Webpack, TypeScript, and Jest.

### <a name="step-3-webpack"></a> Webpack Configuration
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

### <a name="step-3-typescript"></a> TypeScript Configuration
Create a TypeScript configuration file called `tsconfig.json` with the following contents:

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es5",
    "jsx": "react",
    "noUnusedLocals": true,
    "lib": [
      "es5",
      "es6",
      "dom"
    ]
  },
  "include": [
    "./client/**/*"
  ]
}
```

You can reference the [TypeScript docs](https://www.typescriptlang.org/docs/handbook/compiler-options.html) to understand the different `compilerOptions` and what they do. The above configuration should be enough to get off the ground.

### <a name="step-3-jest"></a> Jest Configuration
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

### <a name="step-3-tslint"></a> TSLint Configuration
Install [TSLint](https://palantir.github.io/tslint/) and run `tslint --init` to generate a base `tslint.json` file. I recommend using [tslint-eslint-rules](https://github.com/buzinas/tslint-eslint-rules) as a base rule set. I have written about TSLint [here](https://spin.atomicobject.com/2017/06/05/tslint-linting-setup/). The configuration used in this project looks like this:

```json
{
  "extends": [
    "tslint:recommended",
    "tslint-eslint-rules"
  ],
  "jsRules": {},
  "rules": {
    "quotemark": [true, "single"],
    "ter-indent": [true, 2],
    "interface-name": [true, "never-prefix"],
    "no-empty": false,
    "import-sources-order": "any",
    "ordered-imports": false
  },
  "rulesDirectory": []
}
```

## <a name="step-4"></a> Step 4. Add HTML Boilerplate
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
# <a name="example-app"></a> The Example App
This example app, like every other React/Redux example app contains a greeting message the that user can change, and a button that increments a counter:

<img src="https://cloud.githubusercontent.com/assets/4796480/23883359/d7c43d12-083c-11e7-8f51-82ce56624603.png" width="500px" />

The application state is modeled in the following way:

```typescript
export interface ApplicationState {
  greeting: string
  count: number;
};

export const defaultState: ApplicationState = {
  greeting: 'React-TypeScript-Redux Example',
  count: 0
};
```
Notice how we can now define our state using types!

There are two main components - `Greeting` and `Increment`. Both are included in a wrapper component called `App`:

```javascript
class App extends React.Component<{}, {}> {
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

## <a name="example-app-typescript"></a> TypeScript and React/Redux
The React type definitions specify two generic types for `React.Component<P, S>`. `P` is the type of the props for the component, and `S` is the type of the component state. If you are using Redux, you will most likely store all of your state in the redux store. If you do store any state local to a component, you can use `S` do define the shape of that state.

### <a name="example-app-typescript-component-container"></a> Component and Container Organization
To describe the component and container organization I will refer to an example - the `Greeting` component and container.

#### Container
The `Greeting` component is defined as:

```jsx
export interface Props {
  greeting: string;
  updateGreeting: (greeting: string) => void;
};

export default class Greeting extends React.Component<Props, {}> {
...
}
```

Here, the `Greeting`component is completely unaware of the container that connects it to Redux. It simply renders itself using the defined `Props`. This makes it super testable.

#### Container
As with standard Redux, the `Greeting` container connects the `Greeting` component to the Redux store. It uses the exported component `Props` and splits the props into two sets - `State` props and `Dispatch` props:

```javascript
import { Props as GreetingProps } from '../components/greeting';

type StateProps = Pick<GreetingProps, 'greeting'>;
type DispatchProps = Pick<GreetingProps, 'updateGreeting'>;
```

Using those two sets of props, it defines the standard Redux `mapStateToProps`, and `mapDispatchToProps` functions.

```javascript
function mapStateToProps(state: ApplicationState): StateProps {
  return { greeting: state.greeting };
};

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchProps {
  return {
    updateGreeting: (newGreeting: string) => {
      dispatch(Actions.updateGreeting(newGreeting));
    },
  };
};
```

These functions are provided to the Redux `connect` function and exported

```javascript
const ConnectedGreeting = connect(
  mapStateToProps,
  mapDispatchToProps,
)<{}>(GreetingComponent);

export default ConnectedGreeting;
```

The container can then be used elsewhere and will be connected to the Redux store to make and receive application state updates. Note the empty generic type `{}` between the connect call and the invocation to `GreetingComponent`. This is the external props type of the container. So, if you wish to define any props when using the container, you will need to define the shape of those props there.

### <a name="example-app-typescript-reducers"></a> Reducers with TypeScript
One area in particular that types can be handy in React/Redux applications is inside of Redux reducers. [This article](https://spin.atomicobject.com/2016/09/27/typed-redux-reducers-typescript-2-0/) describes a really nice approach for writing strongly typed reducers.

Using TypeScript we can define our actions in a type safe manner.

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

## <a name="example-app-project-scripts"></a> Project Scripts
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

To lint the project run

```
yarn lint
```

## <a name="example-app-debugging"></a> Debugging
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

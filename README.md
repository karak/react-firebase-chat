React Firebase Chat
===================

A tutorial course to learn to construct a practical application codebase using react-redux developing a serverless chat.

Prerequisite
------------

* TypeScript skill
* Node.js environment and npm or yarn(recommend)
* One Firebase project in your Google account.

Our Goal
--------

Create practical example app which consists of

* React-redux frontend
* Firebase backend

with

* Productive DevEnv of
  * TypeScript
  * Webpack
  * Storybook
* Complete and fast unit tests on
  * Jest
  * Enzyme

We also uses

* react-bootstrap -- for building UI
* normalizr -- for data management

Step by Step
------------

### 1. Initialize app

#### Create initial app

```bash
yarn global add create-react-app
```

```bash
create-react-app react-firebase-chat --scripts-version=react-scripts-ts
```

#### Configure linters

Add new tslint configuration.

```bash
yarn add tslint-config-airbnb -D
```

Replace tslint.json by

```json
{
    "extends": "tslint-config-airbnb",
    "rules": {
        "trailing-comma": false,
        "ter-arrow-parens": false
    },
    "jsRules": {
    }
}
```

#### Introduce Storybook

* storybook

```bash
yarn global add @storybook/cli
getstorybook -f
```

```bash
yarn add @storybook/react @types/storybook__react @types/storybook__addon-actions @types/storybook__addon-links -D
```

Modify "tsconfig.json"

```diff
-    "rootDir": "src",
+    "rootDirs": ["src", "stories"],
```

Modify "stories/index.js" to "stories/index.tsx" as

```typescript
import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
```

Added own webpack.config.js in .stories for storybook:

```javascript
const baseConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = function () {
  var newConfig = baseConfig.apply(this, arguments);

  newConfig.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    include: /stories/,
    loaders: ['tslint-loader', 'ts-loader']
  });

  newConfig.resolve.extensions.push('.ts', '.tsx');

  return newConfig;
};
```

##### Quickfix(Temporaly)

We must create a missing type declaration file of '@storybook/react/demo.'

```typescript
declare module '@storybook/react/demo' {
  export class Button extends React.Component<React.HTMLProps<Button>> {
  }

  export interface WelcomeProps {
    showApp: React.MouseEventHandler<Welcome>;
  }
  export class Welcome extends React.Component<WelcomeProps> {
  }
}
```

and refer this from "stories/index.tsx" like this:

```typescript
/// <reference path="./@storybook__react__demo.d.ts"/>
```

Now, we can launch our storybook.

```bash
yarn run storybook
```

#### Migrate to React v16 and Enzyme v3(Temporaly)

##### For app

Add following polyfills for `Map`, `Set`, and `window.requestAnimationFrame`.

```bash
yarn add core.js raf -S
```

Create "src/polyfill.ts"

```typescript
import 'core-js/es6/set';
import 'core-js/es6/map';
import 'raf/polyfill';
```

and import this from "src/index.tsx".

```diff
+import './polyfill.js';
 import * as React from 'react';
 import * as ReactDOM from 'react-dom';
```

#### For tests

Create "src/setupTests.ts" to include polyfill as well.

```bash
vi src/setupTests.ts
```

```typescript
import './polyfill';
```

Add `react-test-renderer` manually.

```bash
yarn add react-test-renderer @types/react-test-renderer -D
```

Then, we can run our tests

```bash
yarn run test
```

and type 'a' to run the all tests and see the results as following:

```text
PASS  src/App.test.tsx
  ✓ renders without crashing (23ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.74s
Ran all test suites.

✨  Done in 23.98s.
```

and then, type 'q' to quit.

#### Introduce Enzyme v3

Add `enzyme` and its adapter

```bash
yarn add enzyme enzyme-adapter-react-16 @types/enzyme @types/enzyme-adapter-react-16 -D
```

Add the following lines to "src/setupTests.ts"

```typescript
import * as Enzyme from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });
```

Add `jest-enzyme` to extend jest with new matchers

```bash
yarn add jest-enzyme -D
```

Insert the following line to "src/setupTests.ts"

```typescript
import 'jest-enzyme';
```

Insert `typeRoots` to `compilerOptions` in "tsconfig.json" so as to find the bundled declaration file.

```diff
   "compilerOptions": {
     "outDir": "build/dist",
     "module": "esnext",
     "target": "es5",
     "lib": ["es6", "dom"],
+    "typeRoots": ["node_modules/@types", "node_modules/jest-enzyme"],
     "sourceMap": true,
```

### 2. Build components

Build our component catalog on the Storybook environment.

(**Under Construction**)

#### Create presentation components

(**Under Construction**)

#### Unit testing

Test the component by using shallow renderer.

(**Under Construction**)

#### Snapshot testing

We can __shrinkwrap__ our components by [snapshot testing](https://facebook.github.io/jest/docs/ja/snapshot-testing.html) rather than deep/shallow rendering.

(**Under Construction**)

Don't forget to commit the snapshots to your VCS.

### 3. Application logic

(**Under Construction**)

### 4. API Mocking

(**Under Construction**)

### 5. Backend(with no security)

(**Under Construction**)

### 6. Authentication

(**Under Construction**)

### 7. Authorization

(**Under Construction**)

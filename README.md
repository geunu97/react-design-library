<div align="center">

# Geunwoo/React Design System

[![npm version](https://img.shields.io/npm/v/@geunwoo/react-design-system.svg?style=flat-square)](https://www.npmjs.com/package/@geunwoo/react-design-system)
[![npm downloads](https://img.shields.io/npm/dm/@geunwoo/react-design-system.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@geunwoo/react-design-system)

Geunwoo/React Design System is a library built with React, TypeScript and Rollup. <br />
It provides a customizable and accessible library of components <br />
that can be used to speed up React application development.

</div>

## Documentation

You can find the Examples and Documentation on the website.

- [Examples and Documentation](https://main--64945a5460facec38f6ccd6b.chromatic.com)
- [NPM Package](https://www.npmjs.com/package/@geunwoo/react-design-system)

## Installation

```bash
$ npm install @geunwoo/react-design-system
```

## Examples

We have several examples [on the website](https://main--64945a5460facec38f6ccd6b.chromatic.com).

#### Button

```jsx
import { GButton } from "@geunwoo/react-design-system";

function App() {
  return (
    <div>
      <GButton
        color="primary"
        weight="outlined"
        size="medium"
        shape="circle"
        label="Click me!"
        disabled={false}
        onClick={() => {}}
      />
    </div>
  );
}

export default App;
```

#### Alert

```jsx
import { GAlert } from "@geunwoo/react-design-system";

function App() {
  return (
    <div>
      <GAlert
        type="success"
        shape="squre"
        title="This is a sample title"
        content="This is a sample description"
        duration={5000}
        useAlertIcon={true}
        useCloseIcon={true}
      />
    </div>
  );
}

export default App;
```

#### Loading

```jsx
import { GLoading } from "@geunwoo/react-design-system";

function App() {
  return (
    <div>
      <GLoading
        position="center"
        color="success"
        size="medium"
        percentage={72}
      />
    </div>
  );
}

export default App;
```

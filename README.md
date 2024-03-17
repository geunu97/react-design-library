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

#### Toast

```jsx
/* main.tsx */
import { GProvider } from "@geunwoo/react-design-system";

ReactDOM.createRoot(document.getElementById('root')!).render(  
  <GProvider>
    <App />
  </GProvider>            
)

/* How to use */
import { showGToast } from '@geunwoo/react-design-system';

function Example() {
  const onClick = () => {
    showGToast({ 
      type: "success",
      shape: "squre",
      title: "This is a sample title",
      content:"This is a sample description",
      duration: 5000,
      showToastIcon: true,
      showCloseIcon: true
    })
  }

  return (          
    <button onClick={onClick}>Click me!</button>
  )
}
```

#### Alert

```jsx
/* main.tsx */
import { GProvider } from "@geunwoo/react-design-system";

ReactDOM.createRoot(document.getElementById('root')!).render(  
  <GProvider>
    <App />
  </GProvider>            
)

/* How to use */
import { showGAlert } from '@geunwoo/react-design-system';

function Example() {
  const onClick = () => {
    showGAlert({
      content: '정말 삭제하시겠습니까?',     
      type: "danger-dark",
      confirmButtonText: "확인",      
      onConfirm: () => {},
      showCancelButton: true,
      cancelButtonText: "취소",
      position: 'center-center',
    })
  }

  return (          
    <button onClick={onClick}>Click me!</button>    
  )
}
```

#### Pagination

```jsx
import { GPagination } from '@geunwoo/react-design-system';

function Example() {
  return (
    <div>
      <GPagination
        page={1}
        pageSize={10}
        total={100}
        onChangePage={(page: number) => {}}
        type="danger-dark"
        weight="inline"
        shape="circle"
        maxPageButtons={5}
        prevButtonText="Prev"
        nextButtonText="Next"
        showPrevButtonIcon={false}
        showNextButtonIcon={false}
        onShowContent={(page: number, pageSize: number) => {
          return `Page ${page} of ${pageSize}`;
        }}
      />
    </div>
  );
}
```

#### Loading

```jsx
import { GLoading } from "@geunwoo/react-design-system";

function Example() {
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

export default Example;
```

#### Label

```jsx
import { GLabel } from "@geunwoo/react-design-system";

function Example() {
  return (
    <div>
      <GLabel
        color="primary"
        weight="inline"
        size="smaller"
        shape="circle"
        value="Label"
      />
    </div>
  );
}

export default Example;
```

#### Button

```jsx
import { GButton } from "@geunwoo/react-design-system";

function Example() {
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

export default Example;
```

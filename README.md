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

To install the stable version, use the command below:

```
npm install @geunwoo/react-design-system
```

To install the development version, use the command below:

```
npm install @geunwoo/react-design-system@dev
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
      shape: "square",
      title: "This is a sample title",
      content:"This is a sample description",
      titleFontSize: '16px',
      contentFontSize: '14px',
      width: '350px',
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
      title: "경고",
      content: '정말 삭제하시겠습니까?',     
      type: "danger-dark",
      position: 'center-center',
      width: "300px",
      height: "200px",
      buttonHeight: '60px',
      titleSize: '20px',
      contentSize: '16px',
      buttonTextSize: '18px',
      titleAlignment: 'center',
      contentAlignment: 'center',
      titleVerticalAlignment: 'center',
      contentVerticalAlignment: 'center',
      confirmButtonText: "확인",      
      cancelButtonText: "취소",
      showCancelButton: true,
      onConfirm: () => {},
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
        iconType="danger-dark"
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
        type="success"
        iconSize="medium"
        percentageSize="16px"
        showPercentage={true}
        percentage={72}
      />
    </div>
  );
}

export default Example;
```

#### ProgressBar

```jsx
import { GProgressBar } from "@geunwoo/react-design-system";

function Example() {
  return (
    <div>
      <GProgressBar
        steps={60}
        type="success-dark"
        secondaryType="gray"
        shape="circle"
        width="100%"
        stroke="2px"        
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
        type="success"
        weight="inline"
        fontSize="16px"
        padding="14px 22px"
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
        types="danger-dark"
        weight="outlined"
        fontSize="14px"
        padding="11px 18px"
        shape="square"
        label="Button"
        disabled={false}
        onClick={() => {}}
      />
    </div>
  );
}

export default Example;
```

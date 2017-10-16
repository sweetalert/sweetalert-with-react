# SweetAlert for React

Easily render React components within your [SweetAlert](https://github.com/t4t5/sweetalert) modals.

## Why?

Many other framework-specific versions of SweetAlert shy away from its JavaScript-based API and abstract it into a template-based system. 
This one instead embraces it (because JavaScript is awesome!) and lets you pass in components as options!

This lets you continue to use features like Promises, but makes building advanced modal UIs much simpler.

## Install

```bash
npm install @sweetalert/react
```

## Usage

When passing JSX as the only parameter, it will replace SweetAlert's `content` option.

```javascript
import React from 'react';
import swal from '@sweetalert/react';

class App extends React.Component {
  componentDidMount() {
    swal(
      <div>
        <h1>Hello!</h1>        
        <p>I am a React component inside a SweetAlert modal.</p>
      </div>
    )
  }
}
```

You can also explicitly set the `content` option, if you want to set other [options](https://sweetalert.js.org/docs/#configuration) as well:

```javascript
swal({
  content: <div>Hello world!</div>,
  buttons: true,
});
```

Or use a combination of both:

```javascript
swal(<div>Hello world</div>, {
  buttons: true, 
});
```

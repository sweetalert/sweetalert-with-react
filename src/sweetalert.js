import React from 'react';
import ReactDOM from 'react-dom';

import transformer from '@sweetalert/transformer';
import swal from 'sweetalert';

/*
 * Convert <Element /> to pure DOM node using ReactDOM
 * (remember that ReactDOM.render() is async!)
 */
const getDOMNodeFromJSX = (Element) => {
  const wrapper = document.createElement('div');

  return new Promise((resolve) => {
    ReactDOM.render(Element, wrapper, () => {
      const el = wrapper.firstChild;

      return resolve(el);
    });
  });
}

export default async (...params) => {

  const newOptions = await transformer(params, {
    identifier: React.isValidElement,
    transformer: getDOMNodeFromJSX, 
  });

  return swal(newOptions);
}


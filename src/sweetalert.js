import React from 'react';
import ReactDOM from 'react-dom';

import transformer, { bindActions } from '@sweetalert/transformer';

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
};

const swal = (...params) => (
  transformer(params, {
    identifier: React.isValidElement,
    transformer: getDOMNodeFromJSX, 
  })
);

bindActions(swal);

export default swal;


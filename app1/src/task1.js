import React from 'react';

var reactElementUl = React.createElement(
  'ul', {
    className: 'myList'
  },
  React.createElement('li', {id: 'li1'},'Element one'),
  React.createElement('li', {id: 'li2'},'Element two'),
  React.createElement('li', {id: 'li3'},'Element three')
);

export default reactElementUl;
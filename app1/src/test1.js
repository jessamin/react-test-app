import React from 'react';

var reactElementUl = React.createElement(
  'ul', {
    className: 'myList'
  },
  React.createElement('li', {id: 'li1'},'one'),
  React.createElement('li', {id: 'li2'},'two'),
  React.createElement('li', {id: 'li3'},'three')
);

export default reactElementUl;
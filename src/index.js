import React from 'react';
import ReactDOM from 'react-dom';

const number = [1, 2, 3, 4, 5];
const listItem = number.map((current) => <li>{current}</li>);

ReactDOM.render(<ul>{listItem}</ul>, document.getElementById('root'));

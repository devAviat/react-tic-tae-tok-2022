import React from 'react';
import ReactDOM from 'react-dom';
function ListItem(props) {
    return <li>{props.value}</li>;
}
function NumberList(props) {
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map((number) => (
                <ListItem key={number.toString()} value={number} />
            ))}
        </ul>
    );
}
ReactDOM.render(<NumberList />, document.getElementById('root'));

import React from 'react';
function ListApp() {
    const items = ['Apple', 'Banana', 'Pear'];
    return (
        <ul>
            {items.map((item) => <li key={item}>{item}</li>)}
        </ul>
    );
}
export default ListApp;
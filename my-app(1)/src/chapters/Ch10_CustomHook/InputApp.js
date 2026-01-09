import React from 'react';
import useInput from './useInput';
function InputApp() {
    const [name, onChangeName] = useInput("");
    return (
        <div>
            <input value={name} onChange={onChangeName} />
            <h1>{name}</h1>
        </div>
    );
}
export default InputApp;
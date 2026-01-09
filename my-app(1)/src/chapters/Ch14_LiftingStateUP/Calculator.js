import React, { useState } from 'react';
function BoilingVerdict(props) {
    return props.celsius >= 100 ? <p>물이 끓습니다.</p> : <p>끓지 않습니다.</p>;
}
function Calculator() {
    const [temp, setTemp] = useState('');
    return (
        <fieldset>
            <input value={temp} onChange={(e) => setTemp(e.target.value)} />
            <BoilingVerdict celsius={parseFloat(temp)} />
        </fieldset>
    );
}
export default Calculator;
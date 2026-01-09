import React from 'react';
function EventApp() {
    const handleChange = (e) => console.log(e.target.value);
    return (
        <div>
            <input onChange={handleChange} />
            <button onClick={() => alert('클릭됨!')}>클릭</button>
        </div>
    );
}
export default EventApp;
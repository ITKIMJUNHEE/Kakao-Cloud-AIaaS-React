import React from 'react';
function FancyBorder(props) {
    return <div style={{border: '4px solid blue'}}>{props.children}</div>;
}
function WelcomeDialog() {
    return (
        <FancyBorder>
            <h1>어서오세요</h1>
            <p>우리 사이트 방문을 환영합니다!</p>
        </FancyBorder>
    );
}
export default WelcomeDialog;
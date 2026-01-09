import React, { useState } from 'react';

function Counter() {
    // PDF 예제 그대로: [변수명, 변수설정함수] = useState(초기값)
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
}

export default Counter;
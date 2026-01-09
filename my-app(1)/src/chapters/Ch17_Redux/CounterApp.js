import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// 실제 실습 시에는 Slice와 Store 설정이 별도로 필요합니다.
function CounterApp() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>카운트: {count}</h1>
            <button onClick={() => dispatch({type: 'counter/increment'})}>증가</button>
        </div>
    );
}
export default CounterApp;
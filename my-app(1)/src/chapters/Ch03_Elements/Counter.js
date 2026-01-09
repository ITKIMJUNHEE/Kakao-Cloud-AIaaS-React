import React from 'react';

function Counter() {
  let count = 0;

  function increment() {
    count += 1;
    console.log("현재 카운트:", count);
    // 상태(State)를 배우기 전이므로 화면은 변하지 않는 것이 정상입니다 (PDF 75p 내용)
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
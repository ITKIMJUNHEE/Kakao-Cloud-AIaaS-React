import React from 'react';
import ReactDOM from 'react-dom/client';

// Ch 01. Hello World
// import Practice from './chapters/Ch01_Intro/HelloWorld';

// Ch 02. JSX (Harry Potter)
// import Practice from './chapters/Ch02_JSX/JsxPractice';

// Ch 03. Element (Tick - 시간 출력)
// import Practice from './chapters/Ch03_Elements/Tick';

// Ch 04. Props (ProfileCard)
// import Practice from './chapters/Ch04_Props/ProfileCard';

// Ch 05. State (NameChanger)
// import Practice from './chapters/Ch05_State/NameChanger';

// Ch 06. Component (CommentList)
// import Practice from './chapters/Ch06_Component/CommentList';

// Ch 07. LifeCycle (NotificationList)
// import Practice from './chapters/Ch07_LifeCycle/NotificationList';

// --- Ch 08 ~ 17 학습 내용 (이어서 진행하세요) ---

// Ch 08. Hooks - useState
// import Practice from './chapters/Ch08_Hooks/Counter';

// Ch 08. Hooks - useEffect (현재 진행 중이던 코드)
//import Practice from './chapters/Ch08_Hooks/Info';

// Ch 09. Hooks Detail (useMemo, useCallback, useRef)
// import Practice from './chapters/Ch09_HooksDetail/Average';

// Ch 10. Custom Hook (로직 재사용)
// import Practice from './chapters/Ch10_CustomHook/InputApp';

// Ch 11. Event Handling (이벤트 처리)
// import Practice from './chapters/Ch11_Event/EventApp';

// Ch 12. List & Key (목록 출력)
// import Practice from './chapters/Ch12_ListKey/ListApp';

// Ch 13. React Form (제어 컴포넌트)
// import Practice from './chapters/Ch13_Form/SignUp';

// Ch 14. Lifting State Up (상태 끌어올리기)
// import Practice from './chapters/Ch14_LiftingStateUp/Calculator';

// Ch 15. Composition (합성)
// import Practice from './chapters/Ch15_Composition/WelcomeDialog';

// Ch 16. Styling (스타일 구성 - styled-components 설치 필요)
// import Practice from './chapters/Ch16_Styling/StyledApp';

// Ch 17. Redux (전역 상태 관리 - redux 라이브러리 설치 필요)
// import Practice from './chapters/Ch17_Redux/CounterApp';


// --- 실행 로직 (수정하지 마세요) ---
const domContainer = document.querySelector('#container');
const root = ReactDOM.createRoot(domContainer);

root.render(<Practice message="실습이 성공적으로 로드되었습니다!" />);
import React from 'react';

// 함수형 컴포넌트 (PDF 106p)
function Comment(props) {
  return (
    <div style={{ border: '1px solid black', margin: '5px' }}>
      <span>{props.name}: {props.content}</span>
    </div>
  );
}

// 클래스형 컴포넌트 (PDF 105p)
class CommentList extends React.Component {
  render() {
    return (
      <div>
        <Comment name="김철수" content="안녕하세요!" />
        <Comment name="이영희" content="리액트 재밌네요." />
      </div>
    );
  }
}

export default CommentList;
import React from 'react';

function JsxPractice() {
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: 'Harry',
    lastName: 'Potter'
  };

  return (
    <h1>Hello, {formatName(user)}!</h1>
  );
}

export default JsxPractice;
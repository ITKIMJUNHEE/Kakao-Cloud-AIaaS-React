import React from 'react';

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("componentDidMount() 호출됨");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate() 호출됨");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount() 호출됨");
  }

  render() {
    return (
      <div style={{ padding: '10px', backgroundColor: 'lightyellow' }}>
        <span>{this.props.message}</span>
      </div>
    );
  }
}

export default Notification;
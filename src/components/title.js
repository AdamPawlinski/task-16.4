import React from 'react';

class Title extends React.Component {
  render: function() {
    return (
      <h2>To Do list</h2>
      <span>There is {} tasks on your list</span>
    )
  }
}

export default Title;

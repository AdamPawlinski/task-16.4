import React from 'react';
import uuid from 'uuid';
import style from '../styles/app.css';
import Title from '../components/title';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    };
  }

  addTodo(val) {
    const todo = {
      text: val,
      id: uuid.v4(),
    };
    const data = [...this.state.data, todo];
    this.setState({data});
  }

  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !==id);
    this.setState({data: remainder});
  }

  let toDoData = this.state.data => {
    this.setState({
      data
    });
  }

  render() {
    return (
      <div className={style.todoApp}>
        <Title dataList={this.toDoData}/>
      </div>
    )
  }
}

export default App;

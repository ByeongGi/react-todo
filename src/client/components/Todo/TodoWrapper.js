import React, { Component, PropTypes } from 'react';
// import Component
import TodoRegister from './TodoRegister/TodoRegister';
import TodoList from './TodoList/TodoList';
import { connect } from 'react-redux';
import { onTodoAdd } from './TodoAction';
import { getTodos } from './TodoReducer';


class TodoWrapper extends Component {

    handleTodoAdd = (todo) => {
        // Dispach 호출 ????
        // 값을 받아서 API 와 스토어에 상태를 추가한다.
        // console.log('TEST : ' + todo);

        this.props.dispatch(onTodoAdd(todo));
    }

    render() {
        return (
            <div>
                <TodoRegister onTodoAdd={this.handleTodoAdd} />
                <TodoList todos={this.props.todos} /> 
            </div>
        );
    }
}

TodoWrapper.propTypes = {
    handleTodoAdd: PropTypes.func.isRequired
};


// Retrieve data from store as props
function mapStateToProps(state) {
    console.log("LOG NEXT STATE");
    console.log();
    
  return {
    todos: state.todo.data,
  };
}


export default connect(mapStateToProps)(TodoWrapper);
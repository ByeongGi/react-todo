import React, {Component, PropTypes} from 'react'
import TodoListItem from './TodoListItem';
class TodoList extends Component {

    constructor(props){
        super(props);
        console.log(this.props.todos);
    }



    render () {
         return (
                <div className="listView">
                {
                   this.props.todos.map( todo => 
                   
                   (


                   <TodoListItem content={todo}/>
                    
                    
                   )
                   
                                       )
                }
                </div>
            );
    }
}

TodoList.propTypes = {

}

export default TodoList;
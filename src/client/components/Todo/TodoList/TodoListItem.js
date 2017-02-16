import React, {Component, PropTypes} from 'react'

class TodoListItem extends Component {
    render () {
        return (
            <div>
                {this.props.content}
            </div>
        );
    }
}

TodoListItem.propTypes = {

};

export default TodoListItem;
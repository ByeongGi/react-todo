import React, { Component, PropTypes } from 'react';

class TodoRegister extends Component {

    onTodoAddEnterKey = (e) =>{
        if(e.type === 'keypress' && e.charCode === 13){
              const contentRef = this.refs.content;
            if (contentRef.value) {
                this.props.onTodoAdd(contentRef.value); // props 를 통해서 외부에서 함수(콜백함수)를 받음
                contentRef.value = '';
            }  
        }
    }

    onTodoAddButton = (e) => {
        const contentRef = this.refs.content;
        if (contentRef.value) {
            this.props.onTodoAdd(contentRef.value); // props 를 통해서 외부에서 함수(콜백함수)를 받음
            contentRef.value = '';
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" ref="content" onKeyPress={this.onTodoAddEnterKey} />
                    <input type="button" value="추가"  onClick={this.onTodoAddButton} />
                </div>
            </div>
        );
    }


}

TodoRegister.propTypes = {
    onTodoAdd: PropTypes.func.isRequired
};

export default TodoRegister;

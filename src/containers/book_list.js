import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {

    renderList(){
        return this.props.books.map((book) => {
            return (
                <li 
                    onClick={() => this.props.selectBook(book)} 
                    key={book.title} 
                    className="list-group-item">{book.title}</li>
            );
        });
    }
    render () {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>   
        );
    }    
}

function mapStateToProps(state){
    //what ever return show up as prop 
    //inside book list
    return {
        books : state.books
    };
}

//Anything retured from this fuction will end up as props on the BookList container
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called,the result should be passed 
    //to all of our reducers
    return bindActionCreators({selectBook: selectBook},dispatch);
}
//Promotr BookList from Component to Container - it need to know about this 
//dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

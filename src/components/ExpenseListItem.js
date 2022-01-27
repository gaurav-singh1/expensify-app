import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const ExpenseListItem =  (props) => {
    const id  = props.item.id;
    return (<div>
        <Link to={`/edit/${id}`}>
        <h3> {props.item.description} </h3>
        </Link>
            <p> {props.item.amount}  {props.item.createdAt}</p>
    </div>);
}

export default connect()(ExpenseListItem);
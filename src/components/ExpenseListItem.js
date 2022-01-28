import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem =  (props) => {
    const id  = props.item.id;
    return (<div>
        <Link to={`/edit/${id}`}>
        <h3> {props.item.description} </h3>
        </Link>
            <p> 
                {numeral(props.item.amount / 100).format('$0,0.00')} 
                -
                {moment(props.item.createdAt).format('MMMM Do, YYYY')}</p>
    </div>);
}

export default connect()(ExpenseListItem);
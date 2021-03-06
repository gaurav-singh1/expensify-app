import React from "react";
import {NavLink} from 'react-router-dom'; 

const Header = () => (
    <div>
        <h3>Expensify</h3>
        <NavLink to="/" activeClassName="is-active" exact={true}>Go home </NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense </NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </div>
)

export default Header;
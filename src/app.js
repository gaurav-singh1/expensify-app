import React from "react";
import ReactDOM from 'react-dom';
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { startAddExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import './firebase/firebase';

const store = configureStore();



// store.dispatch(addExpense({ description : "Water Bill", amount : 4500, createdAt : 2000}));
// store.dispatch(addExpense({ description : "Gas Bill", amount : 100, createdAt : 1500}));
// store.dispatch(addExpense({ description : "Rent", amount : 109000, createdAt : 0}));


// const state = store.getState();

// const visibleExpense = getVisibleExpenses(state.expenses, state.filter);
// console.log(visibleExpense);
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
);

ReactDOM.render(jsx, document.getElementById('app'));



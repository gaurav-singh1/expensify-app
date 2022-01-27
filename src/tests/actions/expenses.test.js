import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should test remove expense', () => {
    const action = removeExpense({ id: 'ac12' });
    expect(action).toEqual({
        id: 'ac12',
        type: 'REMOVE_EXPENSE'
    });
});
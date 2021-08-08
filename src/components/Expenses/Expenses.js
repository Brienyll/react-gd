import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2021');

  const saveYearDataHandler = (enteredYear) => {
    setFilteredYear(enteredYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onSaveYearData={saveYearDataHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;

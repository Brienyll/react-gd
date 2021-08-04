import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2021');

  const saveYearDataHandler = (enteredYear) => {
    setFilteredYear(enteredYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onSaveYearData={saveYearDataHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;

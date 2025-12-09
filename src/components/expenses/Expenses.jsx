import Card from '../ui/Card'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'
import { useState } from 'react'
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString () === filteredYear
  })

 
  return (
    <div className=''>
     {/* <div className='bg-[#0e0d0d] border m-20 p-10 rounded-xl'>  */}
      <Card className='p-[1rem] bg-[#1f1f1f] my-[2rem] mx-auto w-[50rem] max-w-[95%]'>
        <ExpenseFilter selected = {filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesChart expenses = {filteredExpenses}/>
        <ExpenseList items = {filteredExpenses} />
        
        {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
        <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
        <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
        <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/> */}
      </Card>
    </div>
  )
}

export default Expenses
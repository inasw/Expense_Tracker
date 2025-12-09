import Card from '../ui/Card';
import ExpenseDate from './ExpenseDate'
import {useState} from 'react'

const ExpenseItem = (props) => {

  const [title,setTitle] = useState(props.title)

  const handleClick = () =>{
    setTitle('updated')

  }

  return (
    <li>
        <div className="border flex flex-col md:flex-row justify-between items-center shadow shadow-white p-4 my-10 mx-2  rounded-[12px] bg-[#4b4b4b]">
          <ExpenseDate date ={props.date}/>
          <div className="expense-item-description flex flex-col md:flex-row items-center justify-start md:space-x-72">
            <h2 className="text-white text-2xl md:text-4xl mx-auto my-2 md:my-0 text-center ">
              {props.title}
            </h2>
            <div className="text-[1rem] md:text-4xl  text-white bg-[#40005d] border-[3px] border-white py-2 px-4 md:px-5 md:py-3 rounded-[12px]">
                ETB {props.amount}
            </div>
          </div>
          <button className='border text-xl px-3 py-2 bg-white rounded-[12px]' onClick={handleClick}>change title</button>
        </div>
    </li>
  );
};

export default ExpenseItem;

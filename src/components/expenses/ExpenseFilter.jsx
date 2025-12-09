
const ExpenseFilter = (props) => {
    const dropdownChangeHandler = (e)=>{
        props.onChangeFilter(e.target.value)
    }

  return (
    <div className=" py-0 px-[1rem]">
      <div className="flex w-full justify-between items-center my-[1rem] px-3">
        <label htmlFor="" className='font-bold text-2xl mb-[0.5rem] text-white'>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler} id="" className="py-[0.5rem] px-[3rem] text-lg font-bold border rounded-[6px]">
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
        </select>
      </div>
    </div>
  )
}

export default ExpenseFilter

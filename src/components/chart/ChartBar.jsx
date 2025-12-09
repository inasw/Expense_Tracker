
const ChartBar = (props) => {

  let barFillHeight = '0%'
  if(props.maxValue > 0){
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'
  }

  return (
    <div className="flex flex-col items-center h-full">
      <div className='flex flex-col justify-end bg-[#c3b4f3] overflow-hidden h-full w-full border border-[#313131] border-solid rounded-[12px] '>
        <div className="bg-[#4826b9] w-full transition-all ease-out duration-[0.3s]" style={{height: barFillHeight}}></div>
      </div>
      <div className="font-bold text-[0.5rem] text-center">{props.label}</div>
    </div>
  )
}

export default ChartBar

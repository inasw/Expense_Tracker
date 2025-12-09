import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPoints = props.dataPoints ?? props.datapoints ?? [];

  const dataPointValues = dataPoints.map((datapoint) => datapoint.value);
  const totalMaximum = dataPointValues.length > 0 ? Math.max(...dataPointValues) : 0;

  return (
    <div className="flex justify-around h-[14rem] p-[1rem] border rounded-[12px] bg-[#f8dfff] text-center mx-6">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

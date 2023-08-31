
import {
  LineChart,
  Line,
  BarChart,
  
  Bar,
  PieChart,
  Pie,
  Tooltip,
} from "recharts"; // Import necessary components
const Props = {
  color: "",
  chartType: "",
  icon: <icon />,
  user: "",
  amount: "",
  // percentage: "",
  stroke: "",
  data: [],
  chartDataKey: "",
  width: {},
  height: {},
//   ResponsiveContainerwidth: {},
//   ResponsiveContainerheight: {},
};
function ChartComponent(props = Props) {
  //   const { chartType, chartData, chartDataKey, stroke } = props;

  if (props.chartType === "line") {
    return (
      <LineChart width={props.width} height={props.height} data={props.data}>
        <Tooltip />
        <Line
          type="monotone"
          dataKey={props.chartDataKey}
          dot={false}
          stroke={props.stroke}
          strokeWidth={2}
        />
      </LineChart>
    );
  } else if (props.chartType === "pie") {
    return (
      <PieChart width={180} height={100}>
        <Pie
          data={props.data}
          dataKey={props.chartDataKey}
          cx="50%"
          cy="50%"
          outerRadius={40}
          fill={props.stroke}
        />
        <Tooltip />
      </PieChart>
    );
  } else if (props.chartType === "bar") {
    return (
    
        <BarChart width={props.width} height={props.height} data={props.data}>
        <Tooltip  contentStyle={{background: '#2a3447',borderRadius: ''}}/>
          <Bar dataKey={props.chartDataKey} fill={props.stroke} />
        </BarChart>
    
    );
  } else if (props.chartType === "area") {
    return (
    
<></>
    
    );
  }

  return null; // Default case or fallback
}

export default ChartComponent;

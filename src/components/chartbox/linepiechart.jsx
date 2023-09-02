import {
  LineChart,
  Line,
  BarChart,
  PieChart,
  Pie,
  Cell,
  Bar,
  Tooltip,
} from "recharts"; // Import necessary components
import { COLORS, datapie } from "./chartbox";
const Props = {
  color: "",
  chartType: "",
  icon: <icon />,
  user: "",
  amount: "",
  datapie: [],
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
      <div className=" Container   grid grid-row-2 top-0">
        <div className="text-2xl  row-span-1 center inline   font-bold ml-36 mt-3 ">
          Daily Visits
        </div>
        <PieChart
          width={200}
          height={500}
          className=" pb-20 bottom-32 top-10  row-span-1 ml-28  justify-content: center"
        >
          <Pie
            data={props.datapie}
            cx={90}
            cy={300}
            innerRadius={20}    
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            //   onMouseEnter={this.onPieEnter}
          >
            <Tooltip />
            {datapie.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    );
  } else if (props.chartType === "bar") {
    return (
      <BarChart width={props.width} height={props.height} data={props.data}>
        <Tooltip contentStyle={{ background: "#2a3447", borderRadius: "" }} />
        <Bar dataKey={props.chartDataKey} fill={props.stroke} />
      </BarChart>
    );
  } else if (props.chartType === "area") {
    return <></>;
  }

  return null; // Default case or fallback
}

export default ChartComponent;

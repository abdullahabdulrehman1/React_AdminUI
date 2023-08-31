// import { PropaneSharp } from "@mui/icons-material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import * as React from "react";
import { Link } from "react-router-dom";
// import { LineChart, Line, Tooltip } from "recharts";
import ChartComponent from "./linepiechart";
export const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
export const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
  { name: "D2", value: 50 },
  { name: "D2", value: 250 },
];
export const datapie = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
]
export const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
export const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 400,
    amt: 2400,
  },

  {
    name: "Page C",
    uv: 2000,
    pv: 1000,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 9908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const Props = {
  color: "",
  chartType: "",
  icon: <icon />,

  user: "",
  amount: "",
  percentage: "",
  stroke: "",
  data: [],
  chartDataKey: "",
  width: {},
  bar: "",
  height: {},
  // responsiveContainerwidth: {},
  // responsiveContainerhieght: {},
};
const classes ="block mt-2  pt-2  ";

export default function Chartbox(props = Props) {
  return (
    <div className="flex  gap-2  mt-4 ">
      <div className="ml-2 grid grid-row-2  ">
        <div className="row-span-1">
          <div className="ml-2 ">
            {props.icon ? props.icon : <PeopleAltOutlinedIcon />}
          </div>
          <div className="text-left text-sm ml-2">
            {" "}
            {props.user ? props.user : <>Total Users</>}
          </div>
          <div className="text-left  font-bold text-2xl ml-2">
            {props.amount ? props.amount : <>12000</>}{" "}
          </div>
        </div>
        <Link
          to={"/"}
          className="text-left grid-row-span-1 text-sm ml-4  pt-16"
        >
          View all
        </Link>
      </div>

      <div className={props.bar?props.bar:{classes}}>
        <ChartComponent
          color={props.color}
          chartDataKey={props.chartDataKey}
          icon={props.icon}
          data={props.data}
          stroke={props.stroke}
          chartType={props.chartType}
          height={props.height}
          width={props.width}
          // responsiveContainerwidth={props.responsiveContainerwidth}
          // responsiveContainerhieght={props.responsiveContainerhieght}
          // percentage={props.percentage}
        />
      
        <div className="ml-8  pt-8    ">
          <div className="text-left  text-md  text-green-500 font-bold ml-4">
            {props.percentage ? props.percentage : <>45% this month</>}
          </div>
        </div>
      </div>
    </div>
  );
}

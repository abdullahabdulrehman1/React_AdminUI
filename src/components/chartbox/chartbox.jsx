// import { BorderAll } from "@mui/icons-material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

// import { LineChart, Line, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];
// const Chartbox =() => {
//   return <div className="">

//   <div className="mt-3 ml-3 flex h-100 justify-between flex-col">
//   <PeopleAltOutlinedIcon/  >
//   <div className="flex-3"><div className="text-left  text-md ml-1" > Total Users</div>
//     <div className="text-left font-bold text-2xl ml-4">12000</div>
//     <div className="text-left  text-sm ml-4">View all</div>
//     <div className="text-left  text-sm ml-4">45% this month</div>
//   </div>
//   <div className="flex-1">
//   <ResponsiveContainer className={BorderAll}  width="100%" height="100%">
//   <LineChart width={300} height={100} data={data}>
//     <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
//   </LineChart>
// </ResponsiveContainer>
//   </div></div>

//   </div>;
// };
// export default Chartbox;

// import "./styles.css";
import * as React from "react";
import { Link } from "react-router-dom";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
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

export default function Chartbox() {
  return (
    <div className="flex gap-2 mt-4 ">
      <div className="ml-2   ">
        <div className="ml-2">
          <PeopleAltOutlinedIcon />
        </div>
        <div className="">
          <div className="text-left  text-sm ml-2"> Total Users</div>
          <div className="text-left font-bold text-2xl ml-2">12000</div>
        </div>
      </div>{" "}
      <div className="block ">
        <LineChart width={170} height={180} data={data}>
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={3} />
        </LineChart>
        <div className="ml-8 mb-2">
          <Link to={"/"} className="text-left  text-sm ml-4">
            View all
          </Link>
          <div className="text-left  text-md  text-green-500 font-bold ml-4">
            45% this month
          </div>
        </div>
      </div>
    </div>
  );
}

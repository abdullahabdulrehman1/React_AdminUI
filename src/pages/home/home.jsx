import Chartbox, {
  data,
  data01,
  data02,
  datapie,
} from "../../components/chartbox/chartbox";
import ChartComponent from "../../components/chartbox/linepiechart";
import Topbox from "../../components/topbox/topbox";
import "./home.scss";
import {
  Tooltip,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
let total = 0;

for (const item of data02) {
  total += item.value;
}
let total01 = 0;

for (const item of data01) {
  total01 += item.value;
}

const Home = () => {
  return (
    <div className="home   h-full ">
      <div class=" grid w-full      grid-cols-[repeat(4,1fr)]  grid-rows-[3,minmax(180px,auto)] gap-4 ">
        <div className="row-span-3 border  rounded col-span-1  ">
          <Topbox />
        </div>
        <div className=" border  rounded">
          <Chartbox
            chartDataKey="pv"
            data={data}
            stroke="#8884d8"
            height={100}
            width={180}
            chartType="line"
          />
        </div>
        <div className=" border  rounded">
          {/* <Chartbox /> */}{" "}
          <Chartbox
            chartDataKey="value"
            data={data02}
            height={100}
            width={180}
            stroke="#00D4BC"
            chartType="line"
            amount={total01}
          />
        </div>
        <div className=" border rounded row-span-3 relative">
          {/* <Chartbox /> */}{" "}
          <ChartComponent datapie={datapie} chartType="pie" />
        </div>
        <div className=" border rounded">
          {/* <Chartbox /> */}{" "}
          <Chartbox
            chartDataKey="value"
            data={data01}
            height={100}
            width={180}
            stroke="#E81111"
            chartType="line"
            amount={total01}
          />
        </div>
        <div className=" border">
          {/* <Chartbox /> */}{" "}
          <Chartbox
            chartDataKey="uv"
            data={data}
            height={100}
            width={180}
            stroke="#3CF20A"
            chartType="line"
            amount={total01}
          />
        </div>

        <div className=" border row-span-2 col-span-2   text-left font-bold text-2xl rounded  pl-3">
          Revenue Analytics
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="amt"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </div>
        <div className=" border row-span-2     text-left font-bold text-2xl rounded pl-3">
          Total Views
          <Chartbox
            chartDataKey="value"
            data={data02}
            height={100}
            width={300}
            stroke="#8884d8"
            chartType="bar"
            amount={total}
            bar="block mt-2  pt-2 pl-12  "
          />
        </div>
        <div className=" border row-span-2">
          <Chartbox
            chartDataKey="value"
            data={data02}
            height={100}
            width={280}
            stroke="#91FF00"
            chartType="bar"
            amount={total}
            bar="block mt-2  pt-2 pl-12  "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

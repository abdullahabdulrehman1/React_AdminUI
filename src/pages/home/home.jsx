import Chartbox from "../../components/chartbox/chartbox";
import Topbox from "../../components/topbox/topbox";
import "./home.scss";
const Home = () => {
  return (
    <div className="home   h-full ">
      <div class=" grid w-full      grid-cols-[repeat(4,1fr)]  grid-rows-[3,minmax(180px,auto)] gap-4 p-8">
        <div className="row-span-3 border  rounded col-span-1  ">
          <Topbox />
        </div>
        <div className=" border  rounded">
          <Chartbox />
        </div>
        <div className=" border rounded">
          <Chartbox />
        </div>
        <div className=" border rounded row-span-3">
          <Chartbox />
        </div>
        <div className=" border rounded">
          <Chartbox />
        </div>
        <div className=" border">
          <Chartbox />  
        </div>
        <div className=" border row-span-2 col-span-2">01</div>
        <div className=" border row-span-2">02</div>
        <div className=" borderrow-span-2">02</div>

        <div className="border ">09</div>
      </div>
    </div>
  );
};

export default Home;

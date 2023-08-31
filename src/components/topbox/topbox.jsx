const Topbox = () => {
  return (
    <div className="   rounded    ">
      <h1 className="text-center font-extrabold text-2xl mt-5">Top Users</h1>
      <ul className="mt-4 pt-3 ">
        <li className="mr-20 flex ">
          <div className="flex items-center p-4 mt-2 rounded relative">
            <img
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              src="https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className=""
            />

            <div className="ml-3 relative  left-0">
              <div className="mb-1 font-bold  text-xl">Abdullah</div>
              <div className="text-xs text-slate-300">
                abdullahabdurrehman72@gmail.com
              </div>
            </div>
            <div className="ml-20 relative right-0">$1232</div>
          </div>
        </li>
        <li className="mr-20 flex ">
          <div className="flex items-center p-4 mt-3 rounded relative">
            <img
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              src="https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className=""
            />
            <div className="ml-3 relative  left-0">
              <div className="mb-1 font-bold  text-xl">Abdullah</div>
              <div className="text-xs text-slate-300">
                abdullahabdurrehman72@gmail.com
              </div>
            </div>

            <div className="ml-20 relative right-0 ">$1232</div>
          </div>
        </li>
        <li className="mr-20 flex ">
          <div className="flex items-center p-4 mt-3 rounded relative">
            <img
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              src="https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className=""
            />
            <div className="ml-3 relative  left-0">
              <div className="mb-1 font-bold  text-xl">Abdullah</div>
              <div className="text-xs text-slate-300">
                abdullahabdurrehman72@gmail.com
              </div>
            </div>
            <div className="ml-20 relative right-0">$1232</div>
          </div>
        </li>
        <li className="mr-20 flex ">
          <div className="flex items-center p-4 mt-3  rounded relative">
            <img
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              src="https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className=""
            />
            <div className="ml-3 relative  left-0">
              <div className="mb-1 font-bold  text-xl">Abdullah</div>
              <div className="text-xs text-slate-300">
                abdullahabdurrehman72@gmail.com
              </div>
            </div>
            <div className="ml-20 relative right-0">$1232</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Topbox;

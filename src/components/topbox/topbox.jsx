const Topbox = () => {
  return (
    <div className="mt-5 position: relative">
      <h1 className="text-center font-extrabold text-2xl">Top deals</h1>
      <ul className="mx-2 my-5">
        <li>
          <div className="flex items-center p-4  rounded ">
            <img
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              src="https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="ml-3">
              <div className="mb-1">Abdullah</div>
              <div className="text-xs text-slate-300">abdullahabdurrehman72@gmail.com</div>
            </div>
            <div className="ml-auto">$1232</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Topbox;

import "./navbar.scss";
import PersonIcon from '@mui/icons-material/Person';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>I am Admin</span>
      </div>
      <img src="/search.svg" alt="" className="icon" />
      <img src="/app.svg" alt="" className="icon" />
      <img src="/expand.svg" alt="" className="icon" />
      <div className="icons">
        <div src="notification" alt="">
          <img src="/notification.svg" alt="" className="icon" />
          <span>Abdullah</span>
        </div>
        <div className="user" alt="">
          <img
            src="https://images.pexels.com/photos/16984980/pexels-photo-16984980/free-photo-of-cowboy-among-cactus-plants.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};
export default Navbar;

import "./navbar.scss";
// import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from "@mui/icons-material/Search";
import AppIcon from "@mui/icons-material/Apps";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';


// import "./../../../src/logo.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>I am Admin</span>
      </div>

      <div className="icons">
        <AppIcon fontSize="medium" />
        <SearchIcon fontSize="medium" />
        <AspectRatioIcon fontSize="medium" />
        

        <div src="notification" alt="">
        <Badge color="secondary" badgeContent={90}>
        <NotificationsIcon fontSize="medium" />
  
</Badge>    
     
        </div>
        <div className="user" alt="">
        <img
        src="https://images.pexels.com/photos/16984980/pexels-photo-16984980/free-photo-of-cowboy-among-cactus-plants.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        alt=""
        />
        
        </div>
        <span>Abdullah</span>
        <SettingsIcon fontSize="medium" />
      </div>
    </div>
  );
};
export default Navbar;

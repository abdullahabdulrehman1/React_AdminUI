import "./menu.scss";

import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
const Menu = () => {
  return (
    <aside className="   border-r-slate-500 border-r-2 sm:mr-15 sm:pr-14">
      <nav className="lg:space-y-8 md:space-y-0 text-sm sm:ml-3">
        <div className="lg:space-y-4 md:space-y-1  ">
          <div className="light: text-slate-300 lg:text-sm md:text-sm sm:text-xs py-2  lg:pl-5 md:pl-5 sm:font-thin sm:pl-0 tracki border-b border-slate-500 border-double ">
            menu
          </div>
          <div className="flex flex-col space-y-2 lg:ml-4 md:my-10 md:mx-0 sm:ml-0 ">
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700  md:text-xs sm:text-xs sm:m-0  lg:py-2 lg:px-2 sm:px-0 md:p-1 rounded light: text-white"
            >
              <HomeOutlinedIcon className="hover:bg-gray-700 hover:rounded" />{" "}
              <span>User</span>
            </Link>
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 md: text-xs lg:py-2 lg:px-2 md:p-1 rounded light: text-white"
            >
              <PeopleAltOutlinedIcon /> Profile
            </Link>
          </div>
        </div>
        <div className="lg:space-y-4 md:space-y-1  ">
          <div className="light: text-slate-300 lg:text-sm md:text-sm sm:text-xs py-2  lg:pl-5 md:pl-5 sm:font-thin sm:pl-0 tracki border-b border-slate-500 border-double ">
            lists
          </div>
          <div className="flex flex-col space-y-2 lg:ml-4 md:my-10 md:mx-0 sm:ml-0 ">
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700  md:text-xs sm:text-xs sm:m-0  lg:py-2 lg:px-2 sm:px-0 md:p-1 rounded light: text-white"
            >
              <PeopleAltOutlinedIcon /> Users
            </Link>
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 md: text-xs lg:py-2 lg:px-2 md:p-1 rounded light: text-white"
            >
              <LocalGroceryStoreOutlinedIcon /> Products
            </Link>
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 md: text-xs lg:py-2 lg:px-2 md:p-1 rounded light: text-white"
            >
              <ContentPasteOutlinedIcon /> Orders
            </Link>
            <Link to={"/"}>
              <ContentCopyOutlinedIcon /> Posts
            </Link>
          </div>
        </div>
        <div className="lg:space-y-4 md:space-y-1  ">
          <div className="light: text-slate-300 lg:text-sm md:text-sm sm:text-xs py-2  lg:pl-5 md:pl-5 sm:font-thin sm:pl-0 tracki border-b border-slate-500 border-double ">
            general
          </div>
          <div className="flex flex-col space-y-2 lg:ml-4 md:my-10 md:mx-0 sm:ml-0 ">
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 md: text-xs lg:py-2 lg:px-2 md:p-1 rounded light: text-white"
            >
              <GridViewOutlinedIcon /> Elements
            </Link>
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 md: text-xs lg:py-2 lg:px-2 md:p-1 rounded light: text-white"
            >
              <EditNoteOutlinedIcon /> Notes
            </Link>
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 md: text-xs lg:py-2 lg:px-2 md:p-1 rounded light: text-white"
            >
              <SubjectOutlinedIcon /> Forms
            </Link>
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 md: text-xs lg:py-2 lg:px-2 md:p-1 rounded light: text-white"
            >
              <CalendarMonthOutlinedIcon /> Forms
            </Link>
          </div>
        </div>
        <div className="lg:space-y-4 md:space-y-1  ">
          <div className="light: text-slate-300 lg:text-sm md:text-sm sm:text-xs py-2  lg:pl-5 md:pl-5 sm:font-thin sm:pl-0 tracki border-b border-slate-500 border-double ">
            maintenence
          </div>
          <div className="flex flex-col space-y-2 lg:ml-4 md:my-10 md:mx-0 sm:ml-0 ">
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 md: text-xs lg:py-2 lg:px-2 md:p-1 rounded light: text-white"
            >
              <SettingsSuggestOutlinedIcon /> Settings
            </Link>
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 md: text-xs lg:py-2 lg:px-2 md:p-1 rounded light: text-white"
            >
              <BackupOutlinedIcon /> Backups
            </Link>
          </div>
        </div>{" "}
        <div className="lg:space-y-4 md:space-y-1  ">
          <div className="light: text-slate-300 lg:text-sm md:text-sm sm:text-xs py-2  lg:pl-5 md:pl-5 sm:font-thin sm:pl-0 tracki border-b border-slate-500 border-double ">
            analytics
          </div>
          <div className="flex flex-col space-y-2 lg:ml-4 md:my-10 md:mx-0 sm:ml-0 ">
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 md: text-xs lg:py-2 lg:px-2 md:p-1 rounded light: text-white"
            >
              <BarChartOutlinedIcon /> Charts
            </Link>
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 md: text-xs lg:py-2 lg:px-2 md:p-1 rounded light: text-white"
            >
              <StickyNote2OutlinedIcon /> Logs
            </Link>
          </div>
        </div>
      </nav>
    </aside>
  );
};
export default Menu;

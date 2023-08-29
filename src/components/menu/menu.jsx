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
    <aside className="   border-r-slate-500 border-r-2 ">
      <nav className="space-y-8 text-sm ">
        <div className="space-y-4 ">
          <h2 className="light: text-slate-300 text-sm  py-2  pl-5 tracki border-b border-slate-500 border-double ">
            menu
          </h2>
          <div className="flex flex-col space-y-2 ml-4">
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 py-2 px-2 rounded light: text-white"
            >
              <HomeOutlinedIcon /> User
            </Link>
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 py-2 px-2 rounded light: text-white"
            >
              <PeopleAltOutlinedIcon /> Profile
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="light: text-slate-300 text-sm   py-2  tracki pl-5 border-b border-slate-500 border-double ">
            lists
          </h2>
          <div className="flex flex-col space-y-2  ml-4 ">
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 py-2 px-2 rounded light: text-white"
            >
              <PeopleAltOutlinedIcon /> Users
            </Link>
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 py-2 px-2 rounded light: text-white"
            >
              <LocalGroceryStoreOutlinedIcon /> Products
            </Link>
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 py-2 px-2 rounded light: text-white"
            >
              <ContentPasteOutlinedIcon /> Orders
            </Link>
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 py-2 px-2 rounded light: text-white"
            >
              <ContentCopyOutlinedIcon /> Posts
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className=" light: text-slate-300 text-sm pl-5  py-2  tracki border-b border-slate-500 border-double ">
            general
          </h2>
          <div className="flex flex-col space-y-2 ml-4">
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 py-2 px-2 rounded light: text-white"
            >
              <GridViewOutlinedIcon /> Elements
            </Link>
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 py-2 px-2 rounded light: text-white"
            >
              <EditNoteOutlinedIcon /> Notes
            </Link>
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 py-2 px-2 rounded light: text-white"
            >
              <SubjectOutlinedIcon /> Forms
            </Link>
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 py-2 px-2 rounded light: text-white"
            >
              <CalendarMonthOutlinedIcon /> Forms
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className=" light: text-slate-300 text-sm  pl-5 py-2 tracki border-b border-slate-500  border-double">
            maintenence
          </h2>
          <div className="flex flex-col space-y-2 ml-4">
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 py-2 px-2 rounded light: text-white"
            >
              <SettingsSuggestOutlinedIcon /> Settings
            </Link>
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 py-2 px-2 rounded light: text-white"
            >
              <BackupOutlinedIcon /> Backups
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className=" light: text-slate-300 text-sm  pl-5 py-2 tracki border-b border-slate-500  border-double">
            analytics
          </h2>
          <div className="flex flex-col space-y-2 ml-4">
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 py-2 px-2 rounded light: text-white"
            >
              <BarChartOutlinedIcon /> Charts
            </Link>
            <Link
              to={"/"}
              className="icon-container hover:bg-gray-700 m-0 py-2 px-2 rounded light: text-white"
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

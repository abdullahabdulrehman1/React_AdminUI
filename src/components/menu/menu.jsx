import "./menu.scss";

import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const Menu = () => {
  return (
  <aside className="w-full p-5 sm:w-60">
  <nav className="space-y-8 text-sm">
      
      <div className="space-y-4">
          <h2 className="text-sm font-semibold tracki  uppercase dark:text-gray-400">Menu</h2>
          <div className="flex flex-col space-y-1 ">
              <Link to={'/'} className="icon-container hover:bg-gray-700 mr-10 rounded "><HomeOutlinedIcon/> Header</Link>
              <Link to={'/'} className="icon-container hover:bg-gray-700 mr-10 rounded "><HomeOutlinedIcon/> Header</Link>
             

          </div>
      </div>
      <div className="space-y-4">
          <h2 className="text-sm font-semibold tracki  uppercase dark:text-gray-400">Menu</h2>
          <div className="flex flex-col space-y-1 ">
              <Link to={'/'} className="icon-container hover:bg-gray-700 mr-10 rounded "><HomeOutlinedIcon/> Header</Link>
              <Link to={'/'} className="icon-container hover:bg-gray-700 mr-10 rounded "><HomeOutlinedIcon/> Header</Link>
             

          </div>
      </div>
      
     
      
  </nav>
</aside>
  
  
  );
};
export default Menu;

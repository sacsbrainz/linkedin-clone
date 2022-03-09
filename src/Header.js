import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './Firebase';

function Header() {
  const dispatch = useDispatch();
  

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className='header'>

      <div className="header_left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
        <div className="header_search">
          <SearchIcon />
          <input placeholder='Search' type="text" />
        </div>

      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={MessageIcon} title='Messaging'/>
        <HeaderOption Icon={NotificationsActiveIcon} title='Notifications'/>
        <HeaderOption avatar={true} title='Me' onClick={logoutOfApp}/>


      </div>
        
    </div>
  )
}

export default Header
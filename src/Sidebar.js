import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    
    </div>
  )


  return (
    <div className='sidebar'>
      <div className="sidebar_top">
        <img
          src="data:image/jpeg;base64,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"
          alt="" 
        />
        <Avatar src={user.photoUrl} className='sidebar_avatar'>
          {user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats"> 
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">3,342</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2,635</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem('design')}
        {recentItem('reactjs')}
        {recentItem('dev_OPS')}
        {recentItem('hiring')}
        {recentItem('learning')}

      </div>

    </div>
  )
}

export default Sidebar;
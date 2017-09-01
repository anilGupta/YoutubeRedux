import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import Config from '../constants/Config'

const SideNav = () => {
  return <div className="sideNav">
    <ul>
      {Config.channelList.map(({name, id}) => <li key={id}><NavLink to={`/channel/${id}`} >{name}</NavLink></li>)}
    </ul>
  </div>
};

export default SideNav;
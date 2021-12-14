import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideButton } from './SidebarElements';
import "./sidebar.css";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <div className="row">
          <SidebarLink to='/login'>Login</SidebarLink>
          <p>or</p>
          <SidebarLink to='/register'>Sign up</SidebarLink>
        </div>
        <SidebarLink to='/products'>Donuts</SidebarLink>
        <SidebarLink to='/'>Favorites</SidebarLink>
        {/* <SidebarLink to='/'>Location</SidebarLink> */}
      </SidebarMenu>
      <SideButton>
        <SidebarRoute to='/checkout'>Order now</SidebarRoute>
      </SideButton>
    </SidebarContainer>
  );
};

export default Sidebar;
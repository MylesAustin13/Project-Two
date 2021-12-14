import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideButton } from './SidebarElements';
import "./sidebar.css";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = ({ isOpen, toggle }) => {

  const dispatch = useDispatch();
  const amILoggedIn = useSelector(state => state.loggedIn);


  const logoutHandler = () => {
    dispatch({
      type: "LogOut"
    })
  }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <div className="row">

          {
            amILoggedIn ?
              <>
              <SidebarMenu>
                <SidebarLink to="/" onClick={logoutHandler}> Logout </SidebarLink>
                <SidebarLink to='/products'>Donuts</SidebarLink>
                <SidebarLink to='/'>Favorites</SidebarLink>
                <SidebarLink to="/myorders">My Orders</SidebarLink>
                <SidebarLink to="/myfavorites">My Favorites</SidebarLink>
                <SideButton>
                  <SidebarRoute to='/checkout'>Order now</SidebarRoute>
                </SideButton>
                </SidebarMenu>
              </>
              :
              <>
                <SidebarLink to='/register'>Sign up</SidebarLink>
                <p>or</p>
                <SidebarLink to='/login'>Login</SidebarLink>
              </>
          }
        </div>

      </SidebarMenu>

    </SidebarContainer>
  );
};

export default Sidebar;
import React, { useState } from "react";
import { AccessTime, HelpOutline, Search } from "@material-ui/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { auth } from "../../firebase.js";

import {
  HeaderContainer,
  HeaderAvatar,
  HeaderLeft,
  HeaderRight,
  HeaderSearch,
} from "./Header.styles.jsx";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [user] = useAuthState(auth);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          src={user?.photoURL}
          alt={user?.displayName}
          onClick={handleClick}
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => auth.signOut()}>Logout</MenuItem>
        </Menu>
        <AccessTime />
      </HeaderLeft>

      <HeaderSearch>
        <Search />
        <input placeholder="Search Slack" />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

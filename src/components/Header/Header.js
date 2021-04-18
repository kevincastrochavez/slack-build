import React from "react";
import { AccessTime, HelpOutline, Search } from "@material-ui/icons";

import {
  HeaderContainer,
  HeaderAvatar,
  HeaderLeft,
  HeaderRight,
  HeaderSearch,
} from "./Header.styles.jsx";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar />
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

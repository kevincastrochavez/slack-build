import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import React from "react";

import {
  ChatContainer,
  ChatMessages,
  Header,
  HeaderLeft,
  HeaderRight,
} from "./Chat.styles";

function Chat() {
  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <h4>
            <strong>#Room name</strong>
          </h4>
          <StarBorderOutlined />
        </HeaderLeft>

        <HeaderRight>
          <p>
            <InfoOutlined /> Details
          </p>
        </HeaderRight>
      </Header>

      <ChatMessages></ChatMessages>
    </ChatContainer>
  );
}

export default Chat;

import React from "react";
import { useSelector } from "react-redux";
import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";

import ChatInput from "./ChatInput";
import { selectRoomId } from "../../features/appSlice";

import {
  ChatContainer,
  ChatMessages,
  Header,
  HeaderLeft,
  HeaderRight,
} from "./Chat.styles";

function Chat() {
  const roomId = useSelector(selectRoomId);

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

      <ChatInput />
    </ChatContainer>
  );
}

export default Chat;

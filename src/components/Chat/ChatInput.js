import React from "react";

import { Button } from "@material-ui/core";

import { ChatInputContainer } from "./ChatInput.styles";

function ChatInput({ channelName, channelId }) {
  const sendMessage = (e) => {
    e.preventDefault();
  };

  return (
    <ChatInputContainer>
      <form>
        <input placeholder={`Message #Room`} />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

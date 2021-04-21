import React, { useState } from "react";
import firebase from "firebase";

import { Button } from "@material-ui/core";
import { firestore } from "../../firebase";

import { ChatInputContainer } from "./ChatInput.styles";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  console.log(channelId);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    firestore.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Kevin Castro",
      userImage: "",
    });

    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #Room`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

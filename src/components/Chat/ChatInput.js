import React, { useState } from "react";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { Button } from "@material-ui/core";
import { auth, firestore } from "../../firebase";

import { ChatInputContainer } from "./ChatInput.styles";

function ChatInput({ channelName, channelId, chatRef }) {
  const [user] = useAuthState(auth);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    firestore.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user?.displayName,
      userImage: user?.photoURL,
    });

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

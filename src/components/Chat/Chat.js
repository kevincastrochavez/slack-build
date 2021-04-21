import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";

import ChatInput from "./ChatInput";
import Message from "../Message/Message";
import { firestore } from "../../firebase";
import { selectRoomId } from "../../features/appSlice";

import {
  ChatBottom,
  ChatContainer,
  ChatMessages,
  Header,
  HeaderLeft,
  HeaderRight,
} from "./Chat.styles";

function Chat() {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && firestore.collection("rooms").doc(roomId)
  );
  const [roomMessages, loading] = useCollection(
    roomId &&
      firestore
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
              </h4>
              <StarBorderOutlined />
            </HeaderLeft>

            <HeaderRight>
              <p>
                <InfoOutlined /> Details
              </p>
            </HeaderRight>
          </Header>

          <ChatMessages>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();

              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}

            <ChatBottom ref={chatRef} />
          </ChatMessages>

          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
      )}
    </ChatContainer>
  );
}

export default Chat;

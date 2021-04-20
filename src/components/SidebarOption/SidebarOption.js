import React from "react";
import { useDispatch } from "react-redux";

import { firestore } from "../../firebase";
import { enterRoom } from "../../features/appSlice";

import {
  SidebarOptionContainer,
  SidebarOptionChannel,
} from "./SidebarOption.styles";

function SidebarOption({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();

  const addChannel = () => {
    const channelNme = prompt("Please enter the channel name");

    if (channelNme) {
      firestore.collection("rooms").add({
        name: channelNme,
      });
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

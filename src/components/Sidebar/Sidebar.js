import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";

import { SidebarContainer, SidebarHeader, SidebarInfo } from "./Sidebar.styles";
import SidebarOption from "../SidebarOption/SidebarOption";
import { firestore } from "../../firebase";

function Sidebar() {
  const [channels, loading, error] = useCollection(
    firestore.collection("rooms")
  );

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>HQ Channel</h2>
          <h3>
            <FiberManualRecord />
            Kevin Castro
          </h3>
        </SidebarInfo>

        <Create />
      </SidebarHeader>

      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOption Icon={PeopleAlt} title="People & user groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File brower" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <SidebarOption Icon={Add} addChannelOption title="Add Channel" />
      <hr />

      {channels?.docs.map((doc) => (
        <SidebarOption key={doc.id} title={doc.data().name} id={doc.id} />
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;

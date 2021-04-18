import styled from "styled-components";

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
    cursor: pointer;
  }
`;

const SidebarOptionChannel = styled.div``;

export { SidebarOptionContainer, SidebarOptionChannel };

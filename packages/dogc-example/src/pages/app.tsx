import React from "react";
import styled from "styled-components";
import { WangComponent } from "../components/WangComponent";

const CustomStyle = styled(WangComponent)`
  .top {
    line-height: 100px;
    background: blue;
  }
`;
export const App: React.FC = () => {
  return (
    <div>
      <CustomStyle />
    </div>
  );
};

import React from "react";
import styled from "styled-components";

type IWangComponent = {
  className?: string;
};

type IWangComponentStyle = {
  name: string;
};

const WangComponentStyle = styled.div<IWangComponentStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.name};
  .top {
    width: 100px;
    height: 100px;
    background: red;
    text-align: center;
  }
  .middle {
    width: 100px;
    height: 100px;
    background: yellow;
    text-align: center;
  }
  .bottom {
    width: 100px;
    height: 100px;
    background: green;
    text-align: center;
  }
`;

export const WangComponent: React.FC<IWangComponent> = ({ className }) => {
  return (
    <WangComponentStyle className={className} name="12px">
      <div className="top">top</div>
      <div className="middle">top</div>
      <div className="bottom">bottom</div>
    </WangComponentStyle>
  );
};

/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-09-17 18:09:53
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-27 16:35:52
 */
import React from "react";
import { DogCProvider, WangComponent } from "@bufang/dogc";
// import styled from "styled-components";
// import { WangComponent } from "../components/WangComponent";

// const CustomStyle = styled(WangComponent)`
//   .top {
//     line-height: 100px;
//     background: blue;
//   }
// `;
export const App: React.FC = () => {
  const dogcConfig = { projectName: "dogc移动端组件库" };
  const dogcTheme = { primaryColor: "red" };
  return (
    <DogCProvider dogcConfig={dogcConfig} dogcTheme={dogcTheme}>
      <WangComponent name="汪组件"></WangComponent>
    </DogCProvider>
  );
};

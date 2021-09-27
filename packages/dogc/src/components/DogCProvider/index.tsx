/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-09-27 14:21:15
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-27 16:37:44
 */
import React from "react";
import { ThemeProvider } from "styled-components";
import DogCContext, { DogCContextProp } from "../DogCContext";

type ExtDogCConextProp = {
  children?: React.ReactElement;
};
export type DogCProviderProp = DogCContextProp & ExtDogCConextProp;

export const DogCProvider: React.FC<DogCProviderProp> = (
  props: DogCProviderProp,
) => {
  return (
    <DogCContext.Provider value={{ ...props }}>
      <ThemeProvider theme={props.dogcTheme}>{props.children}</ThemeProvider>
    </DogCContext.Provider>
  );
};

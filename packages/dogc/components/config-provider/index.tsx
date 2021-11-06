/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-09-27 14:21:15
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-11-06 11:41:29
 */
import React from "react";
import DogCContext, { DogCContextProp } from "./config";
import { useDogC } from "./useDogC";

type ExtDogCConextProp = {
  children?: React.ReactElement;
};
export type DogCProviderProp = DogCContextProp & ExtDogCConextProp;

const DogCProvider: React.FC<DogCProviderProp> & {
  useDogC: typeof useDogC;
} = (props: DogCProviderProp) => {
  return <DogCContext.Provider value={{ ...props }}></DogCContext.Provider>;
};

DogCProvider.useDogC = useDogC;

export default DogCProvider;

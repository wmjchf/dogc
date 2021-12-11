/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-09-27 14:21:15
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-11 11:14:58
 */
import React from "react";
import DogCContext, { DogCCommonProp, _prefix } from "./config";
import { useDogC } from "./useDogC";

type ExtDogCConextProp = {
  children?: React.ReactElement;
};
export type DogCProviderProp = DogCCommonProp & ExtDogCConextProp;

const DogCProvider: React.FC<DogCProviderProp> & {
  useDogC: typeof useDogC;
} = (props: DogCProviderProp) => {
  const getPrefix = (type: string, prefix?: string) => {
    const { prefix: contextPrefix = _prefix } = useDogC();
    return `${prefix || contextPrefix || _prefix}-${type}`;
  };
  return (
    <DogCContext.Provider value={{ ...props, getPrefix }}>
      {props.children}
    </DogCContext.Provider>
  );
};

DogCProvider.useDogC = useDogC;

export default DogCProvider;

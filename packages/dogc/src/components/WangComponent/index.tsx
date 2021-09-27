/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-09-15 19:41:28
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-27 15:49:24
 */
import React, { useContext } from "react";
import DogCContext from "../DogCContext";

export type IWangComponentProp = {
  name: string;
};
export const WangComponent: React.FC<IWangComponentProp> = (
  props: IWangComponentProp,
) => {
  const { dogcConfig, dogcTheme } = useContext(DogCContext);
  return (
    <div>
      <span>{props.name}</span>
      <span>{dogcConfig?.projectName}</span>
      <span>{dogcTheme?.primaryColor}</span>
    </div>
  );
};

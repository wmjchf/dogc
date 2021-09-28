/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-09-15 19:41:28
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-28 13:04:27
 */
import React from "react";
import { useDogC } from "@hooks/useDogC";

export type IWangComponentProp = {
  name: string;
};
export const WangComponent: React.FC<IWangComponentProp> = (
  props: IWangComponentProp,
) => {
  const { dogcConfig, dogcTheme } = useDogC();
  return (
    <div>
      <span>{props.name}</span>
      <span>{dogcConfig?.projectName}</span>
      <span>{dogcTheme?.primaryColor}</span>
    </div>
  );
};

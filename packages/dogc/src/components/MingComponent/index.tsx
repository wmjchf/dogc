/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-09-16 17:12:38
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-22 00:46:13
 */

import React from "react";

export type IMingComponentProp = {
  name: string;
};
export const MingComponent: React.FC<IMingComponentProp> = (
  props: IMingComponentProp,
) => {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
};

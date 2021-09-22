import React from "react";

export type IWangComponentProp = {
  name: string;
};
export const WangComponent: React.FC<IWangComponentProp> = (
  props: IWangComponentProp,
) => {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
};

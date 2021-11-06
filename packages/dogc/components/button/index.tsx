/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-11-06 12:05:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-11-06 13:41:03
 */
import React from "react";
import classnames from "classnames";
import "./style/index.less";

export type IButtonProps = {
  type: string;
};
const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  const { type } = props;
  const classes = classnames("bufang-button", {
    [`bufang-${type}-button`]: true,
  });
  return <div className={classes}>按钮</div>;
};

export default Button;

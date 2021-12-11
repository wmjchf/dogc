/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-12-11 16:24:45
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-11 16:57:44
 */
import React from "react";
import classnames from "classnames";
import ConfigProvider from "../config-provider";
// 填充类型
type FillType = "fill" | "contain" | "cover" | "scaleDown";

export type IImageProps = {
  fill?: FillType;
  src: string;
  alt: string;
  prefix?: string;
};

const Image: React.FC<IImageProps> = props => {
  const { fill = "none", src, prefix, alt } = props;
  const { getPrefix } = ConfigProvider.useDogC();
  const prefixCls = getPrefix("img", prefix);
  const classes = classnames(prefixCls, [`${prefixCls}-${fill}`]);
  return <img src={src} alt={alt} className={classes} />;
};

export default Image;

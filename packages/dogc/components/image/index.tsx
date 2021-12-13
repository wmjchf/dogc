/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-12-11 16:24:45
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-14 00:14:53
 */
import React, { useState } from "react";
import classnames from "classnames";
import { PhotoSlider } from "react-photo-view";
import "react-photo-view/dist/index.css";
import ConfigProvider from "../config-provider";
// 填充类型
type FillType = "fill" | "contain" | "cover" | "scaleDown";

export type IImageProps = {
  fill?: FillType;
  src: string;
  alt: string;
  prefix?: string;
  isPreview?: boolean;
  onTouchStart?: () => void;
};

const Image: React.FC<IImageProps> = props => {
  const { fill = "none", src, prefix, alt, isPreview = false } = props;
  const [previewVisible, setPreviewVisible] = useState(false);
  const { getPrefix } = ConfigProvider.useDogC();
  const prefixCls = getPrefix("img", prefix);
  const classes = classnames(prefixCls, [`${prefixCls}-${fill}`]);
  const onTouchStart = () => {
    if (isPreview) setPreviewVisible(true);
    props.onTouchStart && props.onTouchStart();
  };
  return (
    <div className={classes}>
      <img src={src} alt={alt} onTouchStart={onTouchStart} />
      <PhotoSlider
        bannerVisible={false}
        images={[{ src }]}
        visible={previewVisible}
        onClose={() => setPreviewVisible(false)}
        index={0}
      />
    </div>
  );
};

export default Image;

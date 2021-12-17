/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-12-11 16:24:45
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-14 23:36:27
 */
import React, { useState } from "react";
import classnames from "classnames";
import { PhotoSlider } from "react-photo-view";
import "react-photo-view/dist/index.css";
import ConfigProvider from "../config-provider";
import Icon from "../icon";
// 填充类型
type FillType = "fill" | "contain" | "cover" | "scaleDown";

export type IImageProps = {
  fill?: FillType;
  src: string;
  alt: string;
  prefix?: string;
  isPreview?: boolean;
  showLoading?: boolean;
  showError?: boolean;
  onTouchStart?: () => void;
};

const Image: React.FC<IImageProps> = props => {
  const {
    fill = "none",
    src,
    prefix,
    alt,
    isPreview = false,
    showError = false,
    showLoading = false,
  } = props;
  const [previewVisible, setPreviewVisible] = useState(false);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const { getPrefix } = ConfigProvider.useDogC();
  const prefixCls = getPrefix("img", prefix);
  const classes = classnames(prefixCls, [`${prefixCls}-${fill}`]);
  // 点击事件
  const onTouchStart = () => {
    if (isPreview) setPreviewVisible(true);
    props.onTouchStart && props.onTouchStart();
  };

  const renderIcon = () => {
    if (isLoading && showLoading) return <Icon type="loading" size={30} />;
    if (isError && showError) return <Icon type="camera" size={30} />;
  };

  return (
    <div className={classes}>
      {renderIcon()}
      <img
        src={src}
        alt={alt}
        onTouchStart={onTouchStart}
        onError={() => setError(true)}
        onLoad={() => setLoading(false)}
      />
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

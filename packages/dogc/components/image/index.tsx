/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-12-11 16:24:45
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-18 18:02:06
 */
import React, { useState } from "react";
import classnames from "classnames";

import { PhotoSlider } from "react-photo-view";
import "react-photo-view/dist/index.css";
import LazyLoad from "react-lazyload";
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
  className?: string;
  tipBg?: string;
  loadingSize?: number;
  loadingColor?: string;
  errorSize?: number;
  errorColor?: string;

  onTouchStart?: () => void;
};

const Image: React.FC<IImageProps> = props => {
  const {
    fill = "cover",
    src,
    prefix,
    alt,
    className,
    isPreview = false,
    showLoading = false,
    showError = false,
    loadingSize = 30,
    loadingColor = "rgba(28, 31, 35,0.35)",
    errorColor = "rgba(28, 31, 35,0.35)",
    errorSize = 30,
    tipBg = "rgba(234,245,255,1)",
  } = props;
  const [previewVisible, setPreviewVisible] = useState(false);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const { getPrefix } = ConfigProvider.useDogC();
  const prefixCls = getPrefix("img", prefix);
  const classes = classnames(
    prefixCls,
    [`${prefixCls}-${fill}`],
    className?.split(" "),
  );
  // 点击事件
  const onTouchStart = () => {
    if (isPreview) setPreviewVisible(true);
    props.onTouchStart && props.onTouchStart();
  };

  const renderIcon = () => {
    if (showError || showLoading)
      return (
        <>
          {showError && isError ? (
            <div
              className={`${prefixCls}-placeholder`}
              style={{ backgroundColor: tipBg }}>
              <Icon type="imgError" size={errorSize} fill={errorColor} />
              <span>
                加载失败<i></i>
              </span>
            </div>
          ) : showLoading && isLoading ? (
            <div
              className={`${prefixCls}-placeholder`}
              style={{ backgroundColor: tipBg }}>
              <Icon type="imgLoading" size={loadingSize} fill={loadingColor} />
              <span>
                正在加载中<i></i>
              </span>
            </div>
          ) : (
            ""
          )}
        </>
      );
  };

  return (
    <div className={classes}>
      {renderIcon()}
      <LazyLoad>
        <img
          src={src}
          alt={alt}
          onTouchStart={onTouchStart}
          onError={() => setError(true)}
          onLoad={() => setLoading(false)}
        />
      </LazyLoad>

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

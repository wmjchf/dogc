/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-11-06 12:05:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-17 22:04:28
 */
import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";
import Icon from "../icon";
import DogCProvider from "../config-provider";
import "./style/index.less";

type ButtonType = "info" | "primary" | "success" | "warning" | "danger";

type ButtonShape = "square" | "circle";

type ButtonSize = "middle" | "small" | "large";

export type IButtonProps = {
  type?: ButtonType;
  icon?: React.ReactElement;
  plain?: boolean;
  disabled?: boolean;
  shape?: ButtonShape;
  loading?: boolean;
  loadingFill?: string;
  size?: ButtonSize;
  prefix?: string;
  className?: string;

  onTouchStart?: () => void;
  onTouchMove?: () => void;
  onTouchEnd?: () => void;
};

const Button: React.FC<IButtonProps> = props => {
  const {
    type,
    plain,
    disabled,
    icon,
    shape,
    loading,
    loadingFill = "red",
    size = "middle",
    prefix,
  } = props;
  const [isTouch, setIsTouch] = useState(false);
  const [style, setStyle] = useState<React.CSSProperties>();
  const buttonRef = useRef<HTMLDivElement>(null);
  const { getPrefix } = DogCProvider.useDogC();
  const prefixCls = getPrefix("button", prefix);
  const classes = classnames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: true,
      [`${prefixCls}-${type}-hover`]: isTouch,
      [`${prefixCls}-${type}-plain`]: plain,
      [`${prefixCls}-${type}-disabled`]: disabled,
      [`${prefixCls}-icon`]: icon,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-${size}`]: true,
    },
    props.className?.split(" "),
  );

  // 获取dom节点
  useEffect(() => {
    if (shape !== "circle") return;
    setStyle({
      borderRadius:
        (buttonRef.current?.clientHeight as number) >
        (buttonRef.current?.clientWidth as number)
          ? `${buttonRef.current?.clientWidth}px`
          : `${buttonRef.current?.clientHeight}px`,
    });
  }, []);

  // 交互事件
  const onTouchStart = () => {
    if (disabled) return;
    setIsTouch(true);
    props.onTouchStart && props.onTouchStart();
  };
  const onTouchMove = () => {
    if (disabled) return;
    props.onTouchMove && props.onTouchMove();
  };
  const onTouchEnd = () => {
    if (disabled) return;
    setIsTouch(false);
    props.onTouchEnd && props.onTouchEnd();
  };
  return (
    <div
      className={classes}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={style}
      ref={buttonRef}>
      {icon && (() => icon)()}
      {!icon && loading && <Icon type="loading" size={20} fill={loadingFill} />}
      <span>{props.children}</span>
    </div>
  );
};

export default Button;

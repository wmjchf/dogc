/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-11-06 12:05:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-08 22:47:31
 */
import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";
import Icon from "../icon";
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
  size?: ButtonSize;

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
    size = "middle",
  } = props;
  const [isTouch, setIsTouch] = useState(false);
  const [style, setStyle] = useState<React.CSSProperties>();
  const buttonRef = useRef<HTMLDivElement>(null);
  const classes = classnames("dogc-button", {
    [`dogc-${type}-button`]: true,
    [`dogc-${type}-button-hover`]: isTouch,
    [`dogc-${type}-button-plain`]: plain,
    [`dogc-${type}-button-disabled`]: disabled,
    [`dogc-button-icon`]: icon,
    [`dogc-button-loading`]: loading,
    [`dogc-${size}-button`]: true,
  });

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
    props.onTouchStart && props.onTouchStart();
  };
  const onTouchEnd = () => {
    if (disabled) return;
    setIsTouch(false);
    props.onTouchStart && props.onTouchStart();
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
      {!icon && loading && <Icon type="loading" />}
      <span>{props.children}</span>
    </div>
  );
};

export default Button;

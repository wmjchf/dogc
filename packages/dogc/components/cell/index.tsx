/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-12-08 21:47:33
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-17 22:10:06
 */
import React, { useState } from "react";
import classnames from "classnames";
import Icon from "../icon";
import DogCProvider from "../config-provider";

export type ICellProps = {
  icon?: React.ReactElement;
  title?: string;
  description?: string;
  isArrow?: boolean;
  disabled?: boolean;
  prefix?: string;
  className?: string;
  onTouchStart?: () => void;
  onTouchMove?: () => void;
  onTouchEnd?: () => void;
};
const Cell: React.FC<ICellProps> = props => {
  const {
    icon,
    title,
    description,
    disabled = false,
    prefix,
    className,
  } = props;
  const [isTouch, setIsTouch] = useState(false);

  const { getPrefix } = DogCProvider.useDogC();
  const prefixCls = getPrefix("cell", prefix);
  const classes = classnames(
    prefixCls,
    {
      [`${prefixCls}-hover`]: isTouch,
    },
    className?.split(" "),
  );

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
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
      onTouchStart={onTouchStart}>
      <div className={`${prefixCls}-container`}>
        <div className={`${prefixCls}-container-content`}>
          {icon && (
            <div className={`${prefixCls}-container-content-icon`}>
              {(() => icon)()}
            </div>
          )}
          <div className={`${prefixCls}-container-content-text`}>
            {title && <span>{title}</span>}
            {description && <span>{description}</span>}
          </div>
        </div>

        <div className={`${prefixCls}-container-arrow`}>
          <Icon type="right-arrow" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Cell;

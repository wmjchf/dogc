/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-12-08 21:47:33
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-10 23:21:38
 */
import React, { useState } from "react";
import classnames from "classnames";
import Icon from "../icon";

export type ICellProps = {
  icon?: React.ReactElement;
  title?: string;
  description?: string;
  isArrow?: boolean;
  disabled?: boolean;
  onTouchStart?: () => void;
  onTouchMove?: () => void;
  onTouchEnd?: () => void;
};
const Cell: React.FC<ICellProps> = props => {
  const { icon, title, description, disabled = false } = props;
  const [isTouch, setIsTouch] = useState(false);
  const prefix = "dogc-cell";
  const classes = classnames(prefix, {
    [`dogc-cell-hover`]: isTouch,
  });

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
      <div className={`${prefix}-container`}>
        <div className={`${prefix}-container-content`}>
          {icon && (
            <div className={`${prefix}-container-content-icon`}>
              {(() => icon)()}
            </div>
          )}
          <div className={`${prefix}-container-content-text`}>
            {title && <span>{title}</span>}
            {description && <span>{description}</span>}
          </div>
        </div>

        <div className={`${prefix}-container-arrow`}>
          <Icon type="right-arrow" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Cell;

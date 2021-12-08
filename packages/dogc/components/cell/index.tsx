/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-12-08 21:47:33
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-08 22:20:25
 */
import React from "react";
import classnames from "classnames";

export type ICellProps = {
  icon?: React.ReactElement;
  title?: string;
  description?: string;
  isArrow?: boolean;
};
const Cell: React.FC<ICellProps> = props => {
  const { icon, title, description } = props;
  const classes = classnames("dogc-cell");
  return (
    <div className={classes}>
      <div className={`${classes}-content`}>
        {icon && <div className={`${classes}-icon`}>{(() => icon)()}</div>}
        <div className={`${classes}-text`}>
          {title && <span>{title}</span>}
          {description && <span>{description}</span>}
        </div>
      </div>

      <div className={`${classes}-arrow`}></div>
    </div>
  );
};

export default Cell;

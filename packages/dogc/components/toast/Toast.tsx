/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2022-02-03 17:09:57
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-02-03 22:34:48
 */
import React from "react";
import classnames from "classnames";
import Icon from "../icon";
import ConfigProvider from "../config-provider";

type ToastType = "info" | "success" | "error" | "warning";
export type IToastProps = {
  duration?: number;
  prefix?: string;
  className?: string;
  type?: ToastType;
  title: string;
  onClose?: () => void;
};
const renderIcon = (type: string): React.ReactNode => {
  if (type == "info") return <Icon type="infoCircle" size={15} />;
  if (type == "success") return <Icon type="checkCircle" size={15} />;
  if (type == "error") return <Icon type="closeCircle" size={15} />;
  if (type == "warning") return <Icon type="exclamationCircle" size={15} />;
};
const Toast: React.FC<IToastProps> = props => {
  const {
    prefix,
    duration = 1,
    className,
    type = "info",
    title,
    onClose,
  } = props;
  const { getPrefix } = ConfigProvider.useDogC();
  const prefixCls = getPrefix("toast", prefix);
  const classes = classnames(
    prefixCls,
    [`${prefixCls}-${type}`],
    className?.split(" "),
  );

  setTimeout(() => {
    onClose && onClose();
  }, duration * 1000);

  return (
    <div className={classes}>
      <span>{renderIcon(type)}</span>
      <span>{title}</span>
    </div>
  );
};

export default Toast;

/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-11-06 11:09:05
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-11 11:13:36
 */
import { createContext } from "react";

export type DogCCommonProp = {
  prefix?: string;
};

export type DogCPrivateProps = {
  getPrefix: GetPrefix;
};

type GetPrefix = (type: string, prefix?: string) => string;

export const _prefix = "dogc";

const getPrefix: GetPrefix = (type: string, prefix?: string) => {
  return `${prefix || _prefix}-${type}`;
};

const DogCContext = createContext<DogCCommonProp & DogCPrivateProps>({
  getPrefix,
  prefix: _prefix,
});

export default DogCContext;

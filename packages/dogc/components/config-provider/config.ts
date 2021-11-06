/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-11-06 11:09:05
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-11-06 11:09:06
 */
import { createContext } from "react";

// dogc全局配置
export type DogCConfig = {
  projectName?: string;
};

// dogc主题
export type DogCTheme = {
  primaryColor?: string;
};

export type DogCContextProp = {
  dogcConfig?: DogCConfig;
  dogcTheme?: DogCTheme;
};

const DogCContext = createContext<DogCContextProp>({});

export default DogCContext;

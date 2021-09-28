/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-09-27 14:58:17
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-28 13:35:45
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

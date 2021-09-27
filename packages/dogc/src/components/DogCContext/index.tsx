/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-09-27 14:58:17
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-27 15:49:33
 */
import { createContext } from "react";

export type DogCConfig = {
  projectName?: string;
};

export type DogCTheme = {
  primaryColor?: string;
};

export type DogCContextProp = {
  dogcConfig?: DogCConfig;
  dogcTheme?: DogCTheme;
};

const DogCContext = createContext<DogCContextProp>({});

export default DogCContext;

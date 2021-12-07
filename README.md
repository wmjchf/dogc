<!--
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-09-16 17:57:29
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-05 12:30:45
-->

# wangUI

![wangUI](https://user-images.githubusercontent.com/36124772/133591976-a6c927ef-ef45-44c1-b5e0-ce6f73c08bf4.jpg)

致力打造一款 react 移动端 ui 组建库

# 功能清单

- [x] eslint + prettier + husky + lint-stage 规范代码。
- [x] 支持 typescirpt。
- [x] 支持 Tree Shaking
- [x] 支持 以组件维度进行 split code
- [x] 支持 esm、cjs 模块导出
- [x] 支持 styled-components
- [x] 支持 travis 自动化打包发布
- [x] monorepo 管理组件库

# 组件清单

- [x] 全局配置 DogCProvider

```
<DogCProvider dogcConfig={dogcConfig} dogcTheme={dogcTheme}></DogCProvider>
```

# 待做清单

- [x] 按钮 Button
<img width="373" alt="截屏2021-12-07 下午11 27 47" src="https://user-images.githubusercontent.com/36124772/145058025-21996814-787c-460c-9652-ad118db6c522.png">

# hooks

- [x] useDogC

```
{dogcConfig, dogcTheme} = useDogC();
```

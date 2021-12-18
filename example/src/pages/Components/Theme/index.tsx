/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-12-17 22:29:40
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-17 23:40:25
 */
import React from "react";
import "./style/index.less";

const ThemePage: React.FC = () => {
  return (
    <div className="theme_demo">
      <div className="theme_demo_item primary">
        <span>primary</span>
        <div className="theme_demo_item_container">
          <div className="theme_demo_item_color">
            <span>default</span>
            <span>主要颜色。仅在需要非常强调的情况下使用。</span>
          </div>
          <div className="theme_demo_item_color">
            <span>hover</span>
            <span>主要颜色悬浮态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>active</span>
            <span>主要颜色激活态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>disabled</span>
            <span>主要颜色禁用态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>default</span>
            <span>浅版主要颜色（多用于背景)</span>
          </div>
          <div className="theme_demo_item_color">
            <span>hover</span>
            <span>浅版主要颜色悬浮态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>active</span>
            <span>浅版主要颜色激活态</span>
          </div>
        </div>
      </div>
      <div className="theme_demo_item secondary">
        <span>secondary</span>
        <div className="theme_demo_item_container">
          <div className="theme_demo_item_color">
            <span>default</span>
            <span>次要颜色。仅在需要非常强调的情况下使用。</span>
          </div>
          <div className="theme_demo_item_color">
            <span>hover</span>
            <span>次要颜色悬浮态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>active</span>
            <span>次要颜色激活态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>disabled</span>
            <span>次要颜色禁用态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>default</span>
            <span>浅版次要颜色（多用于背景)</span>
          </div>
          <div className="theme_demo_item_color">
            <span>hover</span>
            <span>浅版次要颜色悬浮态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>active</span>
            <span>浅版次要颜色激活态</span>
          </div>
        </div>
      </div>
      <div className="theme_demo_item tertiary">
        <span>tertiary</span>
        <div className="theme_demo_item_container">
          <div className="theme_demo_item_color">
            <span>default</span>
            <span>第三颜色。仅在需要非常强调的情况下使用。</span>
          </div>
          <div className="theme_demo_item_color">
            <span>hover</span>
            <span>第三颜色悬浮态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>active</span>
            <span>第三颜色激活态</span>
          </div>

          <div className="theme_demo_item_color">
            <span>default</span>
            <span>浅版第三颜色（多用于背景)</span>
          </div>
          <div className="theme_demo_item_color">
            <span>hover</span>
            <span>浅版第三颜色悬浮态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>active</span>
            <span>浅版第三颜色激活态</span>
          </div>
        </div>
      </div>
      <div className="theme_demo_item info">
        <span>info</span>
        <div className="theme_demo_item_container">
          <div className="theme_demo_item_color">
            <span>default</span>
            <span>信息色, 通常用于表达客观、中立信息</span>
          </div>
          <div className="theme_demo_item_color">
            <span>hover</span>
            <span>信息色悬浮态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>active</span>
            <span>信息色激活态</span>
          </div>

          <div className="theme_demo_item_color">
            <span>disabled</span>
            <span>信息色禁用态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>default</span>
            <span>浅版信息色（多用于背景）</span>
          </div>
          <div className="theme_demo_item_color">
            <span>hover</span>
            <span>浅版信息色悬浮态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>active</span>
            <span>浅版信息色激活态</span>
          </div>
        </div>
      </div>
      <div className="theme_demo_item success">
        <span>success</span>
        <div className="theme_demo_item_container">
          <div className="theme_demo_item_color">
            <span>default</span>
            <span>成功色，表示安全、成功、开启的状态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>hover</span>
            <span>成功色悬浮态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>active</span>
            <span>成功色激活态</span>
          </div>

          <div className="theme_demo_item_color">
            <span>disabled</span>
            <span>成功色禁用态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>default</span>
            <span>浅版成功色（多用于背景）</span>
          </div>
          <div className="theme_demo_item_color">
            <span>hover</span>
            <span>浅版成功色悬浮态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>active</span>
            <span>浅版成功色激活态</span>
          </div>
        </div>
      </div>
      <div className="theme_demo_item danger">
        <span>danger</span>
        <div className="theme_demo_item_container">
          <div className="theme_demo_item_color">
            <span>default</span>
            <span>危险色，表示危险的操作、或需要特别注意的危险信息</span>
          </div>
          <div className="theme_demo_item_color">
            <span>hover</span>
            <span>危险色悬浮态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>active</span>
            <span>危险色激活态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>default</span>
            <span>浅版危险色（多用于背景）</span>
          </div>
          <div className="theme_demo_item_color">
            <span>hover</span>
            <span>浅版危险色悬浮态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>active</span>
            <span>浅版危险色激活态</span>
          </div>
        </div>
      </div>
      <div className="theme_demo_item warning">
        <span>warning</span>
        <div className="theme_demo_item_container">
          <div className="theme_demo_item_color">
            <span>default</span>
            <span>警示色，表示警告、不安全的状态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>hover</span>
            <span>警示色悬浮态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>active</span>
            <span>警示色激活态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>default</span>
            <span>浅版警示色（多用于背景）</span>
          </div>
          <div className="theme_demo_item_color">
            <span>hover</span>
            <span>浅版警示色悬浮态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>active</span>
            <span>浅版警示色激活态</span>
          </div>
        </div>
      </div>
      <div className="theme_demo_item focusBorder">
        <span>focusBorder</span>
        <div className="theme_demo_item_container">
          <div className="theme_demo_item_color">
            <span>focus border</span>
            <span>多用于边框激活态颜色</span>
          </div>
        </div>
      </div>
      <div className="theme_demo_item disabled">
        <span>disabled</span>
        <div className="theme_demo_item_container">
          <div className="theme_demo_item_color">
            <span>禁用态 - 文字</span>
          </div>
          <div className="theme_demo_item_color">
            <span>禁用态 - 描边</span>
          </div>
          <div className="theme_demo_item_color">
            <span> 禁用态 - 背景</span>
          </div>

          <div className="theme_demo_item_color">
            <span>禁用态 - 填充)</span>
          </div>
        </div>
      </div>
      <div className="theme_demo_item shadowBorder">
        <span>focusBorder</span>
        <div className="theme_demo_item_container">
          <div className="theme_demo_item_color">
            <span>shadow border</span>
            <span>用于模拟描边的阴影颜色</span>
          </div>
        </div>
      </div>
      <div className="theme_demo_item link">
        <span>link</span>
        <div className="theme_demo_item_container">
          <div className="theme_demo_item_color">
            <span>链接颜色</span>
          </div>
          <div className="theme_demo_item_color">
            <span>链接颜色 - 悬浮态</span>
          </div>
          <div className="theme_demo_item_color">
            <span> 链接颜色 - 激活态</span>
          </div>

          <div className="theme_demo_item_color">
            <span>链接颜色 - 已访问</span>
          </div>
        </div>
      </div>
      <div className="theme_demo_item other">
        <span>other</span>
        <div className="theme_demo_item_container">
          <div className="theme_demo_item_color">
            <span>默认描边颜色</span>
          </div>
          <div className="theme_demo_item_color">
            <span>导航背景色</span>
          </div>
          <div className="theme_demo_item_color">
            <span> 蒙层背景色</span>
          </div>

          <div className="theme_demo_item_color">
            <span>填充色 - 默认态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>填充色 - 悬浮态</span>
          </div>
          <div className="theme_demo_item_color">
            <span>填充色 - 激活态</span>
          </div>
          <div className="theme_demo_item_color">
            <span> 背景色 - 最下层（底部页面）</span>
          </div>

          <div className="theme_demo_item_color">
            <span>背景色 - 次下层（页面中需要提升的内容）</span>
          </div>
          <div className="theme_demo_item_color">
            <span>背景色 - 中间层（模态等容器）</span>
          </div>
          <div className="theme_demo_item_color">
            <span>背景色 - 次上层（通知，Toast等）</span>
          </div>
          <div className="theme_demo_item_color">
            <span> 背景色 - 最上层（特殊）</span>
          </div>

          <div className="theme_demo_item_color">
            <span>文本/图标颜色 - 最主要</span>
          </div>
          <div className="theme_demo_item_color">
            <span>文本/图标颜色 - 稍次要</span>
          </div>
          <div className="theme_demo_item_color">
            <span>文本/图标颜色 - 次要</span>
          </div>
          <div className="theme_demo_item_color">
            <span> 文本/图标颜色 - 最次要</span>
          </div>

          <div className="theme_demo_item_color">
            <span>用于toast, modal, popover等需要提升层级的界面元素</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemePage;

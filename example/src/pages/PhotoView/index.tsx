/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-12-13 23:20:13
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-13 23:54:53
 */
import React, { useState } from "react";
import { PhotoProvider, PhotoConsumer, PhotoSlider } from "react-photo-view";
import "react-photo-view/dist/index.css";
import { Button } from "@bufang/dogc";
import View01 from "./images/view01.png";
import View02 from "./images/view02.png";
import View03 from "./images/view03.png";
import View04 from "./images/view04.png";
import View05 from "./images/view05.png";
import "./index.less";

const PhotoView: React.FC = () => {
  const photoImages = [View01, View02, View03, View04, View05];
  const [visible, setVisible] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  return (
    <div className="photo_view">
      <div className="photo_view_btn">
        <Button
          type="primary"
          size="small"
          onTouchStart={() => {
            console.log("dddd");
            setVisible(true);
          }}>
          预览
        </Button>
      </div>
      {/* <PhotoProvider>
        {photoImages.map((item, index) => (
          <PhotoConsumer key={index} src={item} intro={item}>
            <img src={item} alt="" className="photo_view_image" />
          </PhotoConsumer>
        ))}
      </PhotoProvider> */}
      <PhotoSlider
        bannerVisible={false}
        images={photoImages.map(item => ({ src: item }))}
        visible={visible}
        onClose={() => setVisible(false)}
        index={photoIndex}
        onIndexChange={setPhotoIndex}
      />
    </div>
  );
};

export default PhotoView;

import React from 'react'
import { SliderData } from "../const/Images";
import MyLayout from "../components/layout";

import ImageSlider from '../components/imageSlider'


const slideShow = () => {
   
    return (
      <MyLayout>
        <div>
          <ImageSlider slides={SliderData} />
          
        </div>
      </MyLayout>
    );
}

export default slideShow

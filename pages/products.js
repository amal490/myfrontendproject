import Product from "../components/product/productCard";
import { Row } from "antd";
import { productsList } from "../const/products";
import MyLayout from "../components/layout";
import React from "react";
import { SliderData } from "../const/Images";
import ImageSlider from "../components/imageSlider";


export default function products() {
   
  const products = productsList.map((prod,idx) =>{
   
    return (
      <Product
        id={prod.key}
        image={prod.image}
        name={prod.name}
        price={prod.price}
        rate={prod.rate}
      />
    );
  });
  return (
    <MyLayout>
      I<ImageSlider slides={SliderData} />
      <Row gutter={[16, 16]} type="flex">
        {products}
      </Row>
    </MyLayout>
  );

}
// <ImageSlider slides={SliderData} />
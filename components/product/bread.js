import { Breadcrumb } from "antd";


const Bread=({productName})=> (
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Products</Breadcrumb.Item>
          <Breadcrumb.Item>product_details</Breadcrumb.Item>
          <Breadcrumb.Item> <b>{productName} </b></Breadcrumb.Item>
        </Breadcrumb>
      
    );
  

export default Bread;


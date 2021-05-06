import React from 'react'
import { Breadcrumb } from "antd";

        const breadCrumb=({dashName})=> (
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>
             <b>{dashName} </b>
          </Breadcrumb.Item>
        </Breadcrumb>
        );
        

export default breadCrumb

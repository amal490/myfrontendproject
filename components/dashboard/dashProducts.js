import React from "react";
import { Table } from "antd";
import { dataSource } from "../../const/dashProducts";
import { ColumnProd } from "../../const/columnProd";
 import { productsList } from "../../const/products"; 

const dashProducts = () => {
  return (
    <>
      <div className="titledash">
        <b>list of products</b>
      </div>
      <div className="tabEdit">
        <Table
          className="tableDash"
          columns={ColumnProd}
          dataSource={productsList}
        />
      </div>
    </>
  );
};

export default dashProducts;

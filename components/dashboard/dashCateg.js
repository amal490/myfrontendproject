import React from 'react'
import { Table } from "antd";
import   {dataCateg}  from "../../const/category";
import { columnCategory } from "../../const/columnCateg";

const dashCateg = () => {
    return (
      <>
        <div className="">
          <b>list of Category</b>
        </div>
        <div className="tabEdit">
          <Table
            className="tableDash"
            columns={columnCategory}
            dataSource={dataCateg}
          />
        </div>
      </>
    );
}

export default dashCateg

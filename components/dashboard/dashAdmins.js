import React from "react";
import { Table } from "antd";
import { dataSource } from "../../const/dashClt";
import { columns } from "../../const/columns";

const DashAdmin= () => {
  return (
    <>
      <div className="titledash">
        <b>list of Admins</b>
      </div>
      <div className="tabEdit">
        <Table
          className="tableDash"
          columns={columns}
          dataSource={dataSource}
        />
      </div>
    </>
  );
};

export default DashAdmin;

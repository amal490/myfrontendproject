import React from "react";
import { Table } from "antd";
import { dataSource } from "../../const/dashClt";
import { columns } from "../../const/columns";

const dashClients = () => {
  return (
    <>
      <div className="">
        <b>list of Clients</b>
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

export default dashClients;

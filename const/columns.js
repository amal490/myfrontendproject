import { Space } from 'antd';
import {EyeOutlined,UserDeleteOutlined } from "@ant-design/icons";


export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
   
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
   
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>{<UserDeleteOutlined className="delete" />}</a>
        <a href="../prod_details/[id]">{<EyeOutlined className="eye" />}</a>
      </Space>
    ),
  },
];
//{<DeleteOutlined />}
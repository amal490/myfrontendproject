import { Space } from "antd";
import {
  DeleteOutlined,
  EyeOutlined,
 FormOutlined,
} from "@ant-design/icons";


export const ColumnProd = [
  {
    title: "ProductID",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },

  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>{<DeleteOutlined className="delete" />}</a>
        <a href="../prod_details/[id]">{<EyeOutlined className="eye" />}</a>
        <a href="../editTest">{<FormOutlined />}</a>
        
      </Space>
    ),
  },
];
 /*{
    title: "Image",
    dataIndex:"image",
    key: "image",
  },*/ 
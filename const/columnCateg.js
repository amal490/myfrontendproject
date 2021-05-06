import { Space } from "antd";
import { EyeOutlined, UserDeleteOutlined,FormOutlined} from "@ant-design/icons";

export const columnCategory = [
  { title: "catgoryID", dataIndex: "key", key: "key" },

  { title: "Name", dataIndex: "name", key: "name" },

  {
    title: "Action",
    key: "action",

    render: () => (
      <Space size="middle">
        <a>{<UserDeleteOutlined className="delete" />}</a>
        <a href="../prod_details/[id]">{<EyeOutlined className="eye" />}</a>
        <a href="../editTest">{<FormOutlined />}</a>
      </Space>
    ),
  },
];

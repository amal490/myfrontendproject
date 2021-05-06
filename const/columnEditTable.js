import {Popconfirm} from "antd" ; 
import { useState } from "react";

 const cancel = () => {
   setEditingKey("");
 };
 const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.key === editingKey;
 const [data, setData] = useState(productsDetails);
export const columnEditTable= [
  {
    title: "ProductID",
    dataIndex: "key",
    key: "key",
    editable: true,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Rate",
    dataIndex: "rate",
    key: "rate",
    editable: true,
  },
 {
    title: "Price",
    dataIndex: "price",
    key: "price",
    editable: true,
  },
{
    title: "Couleur",
    dataIndex: "couleur",
    key: "couleur",
    editable: true,
  },
 {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
            const editable = isEditing(record);
        return editable ? (
      
          <span>
            <a href="javascript:;" onClick={() => save(record.key)} 
            style={{ marginRight: 8 }}>
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
      ) : (
          <Typography.Link disabled={editingKey !== ''}
           onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      
    }}
      ];
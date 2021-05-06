import React from 'react'
//import React, { useState } from "react";

//import { Table, Input, InputNumber, Popconfirm, Form, Typography } from "antd";
import {productsDetails} from "../../const/productsDetails"; 
import { columnEditTable } from '../../const/columnEditTable';
import { Table } from "antd";


const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(productsDetails);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

}
const save = async (key) => {
  try {
    const row = await form.validateFields();
    const newData = [...data];
    const index = newData.findIndex((item) => key === item.key);

    if (index > -1) {
      const item = newData[index];
      newData.splice(index, 1, { ...item, ...row });
      setData(newData);
      setEditingKey("");
    } else {
      newData.push(row);
      setData(newData);
      setEditingKey("");
    }
  } catch (errInfo) {
    console.log("Validate Failed:", errInfo);
  }
};



const editTable = () => {
    return (
      <div>
        <Table
          className="tableDash"
          columns={columnEditTable}
          dataSource={productsDetails}
        />
      </div>
    );
} 

export default editTable ; 

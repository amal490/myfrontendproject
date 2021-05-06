import React, { useState } from "react";
//import "./index.css";
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from "antd";
import { productsDetails } from "../const/productsDetails"; 
import NavbarDash from "../components/dashboard/navbarDash"
const { Content } = Layout;
import { Layout,Button} from "antd";


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
  const inputNode = inputType === "number" ? <InputNumber /> : <Input.TextArea />;
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
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      
      name: "",
      age: "",
      address: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

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

  const columns = [
    {
      title: "ProductID",
      dataIndex: "key",
      key: "key",
      width: "10%",
      editable: false,
    },
    {
      title: "Code_prod",
      dataIndex: "code_prod",
      key: "code_prod",
      /*width: "10%",*/
      editable: true,
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
      /*width: "25%",*/
      editable: true,
    },
    {
      title: "Rate",
      dataIndex: "rate",
      key: "rate",
      /*  width: "15%",*/
      editable: true,
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
      /* width: "15%",*/
      editable: true,
    },
    {
      title: "Disponibilite",
      dataIndex: "Disponibilite",
      key: "Disponibilite",
      /*width: "10%",*/
      editable: true,
    },

    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              <Button className="btnSaveEditProduct">Save</Button>
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>
                <Button className="btnCancelEditProduct">Cancel</Button>
              </a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            className="table"
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            <Button className="btnEditProduct">Edit</Button>
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (

    <Form form={form} component={false} className="table">
      <Table
        components={{
          body: {
           
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        ClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

//ReactDOM.render(<EditableTable />, document.getElementById("container"));
const editProduct = () => {
  return (
    <>
      <div className="containerTableEdit">
        <NavbarDash />
        <Content>
          <div className="tabEdit">
            <div className="tableDash">
              <EditableTable />
            </div>
          </div>
        </Content>
      </div>
    </>
  );
};

export default editProduct;

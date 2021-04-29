import React from 'react'
import { Form, Input, Button, Select } from "antd";
import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;
const props = {
  action: "//jsonplaceholder.typicode.com/posts/",
  listType: "picture",
  previewFile(file) {
    console.log("Your upload file:", file);
    // Your process logic. Here we just mock to the same file
    return fetch("https://next.json-generator.com/api/json/get/4ytyBoLK8", {
      method: "POST",
      body: file,
    })
      .then((res) => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};


 

const addProdAdmin = () => {
    return (
      <>
        <Form>
          <div className="globalContainer">
            <div className="container">
              <h1 className="title"> Add Product </h1>
              <Form.Item
                name="Product name"
                label="Product name"
                rules={[{ required: true }]}
              >
                <Input.TextArea className="inputU" />
              </Form.Item>
              <Form.Item
                name="Catégorie"
                label="Category"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="Selectioner la categorie"
                  //onChange={onGenderChange}
                  allowClear
                >
                  <Option value="Sport">Sport</Option>
                  <Option value="Accesoires ">Accesoires</Option>
                  <Option value="Marques">Marques</Option>
                  <Option value="Nutrition Sportive">Nutrition Sportive</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="Sub Category"
                label=" Sub Category"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="Selectioner la sous categorie"
                  //onChange={onGenderChange}
                  allowClear
                >
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="Decription"
                label="Description"
                rules={[{ required: true }]}
              >
                <Input.TextArea className="inputU" />
              </Form.Item>
              <Form.Item
                name="Quantite disponible"
                label="Quantity available"
                rules={[{ required: true }]}
              >
                <Input.TextArea className="inputU" />
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Upload Image </Button>
                </Upload>
              </Form.Item>
              <Button className="signbtn" size="large" htmlType="submit">
                Add Product
              </Button>
            </div>
          </div>
        </Form>
      </>
    );
}

export default addProdAdmin


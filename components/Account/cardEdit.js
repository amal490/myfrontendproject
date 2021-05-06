import React from 'react'
//import React, { useState } from "react";
import { Form, Input, Button, Upload, Popover } from "antd"; 
import { UploadOutlined ,ExclamationCircleOutlined,MailOutlined,PhoneOutlined,UserOutlined,ToolOutlined} from "@ant-design/icons";
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

const content = (
  <div className="contentPop">
    {<ExclamationCircleOutlined className="Exclamation" />}
    <Button className="btnCancel">
    Cancel
    </Button>
    <Button className="btnOK">
   Ok
    </Button>
  </div>
)

const cardEdit = () => {
    return (
      <>
        <div className="containerCardEdit">
          <div className="cardEditAccount">
            <Form className="formAccount">
              <Form.Item label={<UserOutlined className="iconEditAcc" />}>
                <Input.TextArea className="inputEditAccount" />
              </Form.Item>
              <Form.Item label={<MailOutlined className="iconEditAcc" />}>
                <Input.TextArea className="inputEditAccount" />
              </Form.Item>
              <Form.Item label={<PhoneOutlined className="iconEditAcc" />}>
                <Input.TextArea className="inputEditAccount" />
              </Form.Item>
              <Form.Item label={<ToolOutlined className="iconEditAcc" />}>
                <Input.TextArea className="inputEditAccount" />
              </Form.Item>

              <Upload {...props}>
                <Button className="btnUpload" icon={<UploadOutlined />}>
                  Upload Image
                </Button>
              </Upload>

              <Button className="btnUpdate">Update</Button>
              <a href="#">
                <Popover
                  className="Popover"
                  size="middle"
                  title="SURE TO CANCEL ?"
                  content={content}
                >
                  <Button className="btnUpdate">Cancel</Button>
                </Popover>
              </a>
            </Form>
          </div>
        </div>
      </>
    );
}

export default cardEdit

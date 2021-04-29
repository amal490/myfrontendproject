

















import React from 'react'; 
import DetSignIn from "../components/sign/detSignIn";

const SignIn = () => {
  return (
    <>
      <DetSignIn />
    </>
  );
}

export default SignIn



























/*import { Form, Select, Input, Switch, Slider, Button, Checkbox } from "antd";

import { SmileFilled } from "@ant-design/icons";

import Link from "next/link";

const FormItem = Form.Item;
const Option = Select.Option;

const content = {
  marginTop: "100px",
};

export default function login() {
  return (
    <div style={content}>
      <div className="text-center mb-5">
        <Link href="#">
          <a className="logo mr-0">
            <SmileFilled size={48} strokeWidth={1} />
          </a>
        </Link>

        <h1 className="mb-0 mt-3 text-disabled"> Login !</h1>
      </div>
      <div>
        <Form>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <FormItem
            style={{ marginTop: 48 }}
            wrapperCol={{ span: 8, offset: 8 }}
          >
            <Button 
             size="large"  style={{ marginLeft: 8 }}>
              Cancel
            </Button>
          
          </FormItem>
          <FormItem></FormItem>
        </Form>
      </div>
    </div>
  );
}
*/
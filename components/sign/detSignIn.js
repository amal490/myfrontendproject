import React from 'react'
import { Form, Select, Input,Button, Checkbox } from "antd";
const FormItem = Form.Item;
const Option = Select.Option;


const DetSignIn = () => {
    return (
      <div className="globalContainer">
        <div className="container">
          <Form>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input.TextArea className="inputU" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password className="inputP" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Button className="signbtn" size="large" htmlType="submit">
              Sign In
            </Button>
            <div className="containerb">
              <FormItem
                style={{ marginTop: 48 }}
                wrapperCol={{ span: 8, offset: 8 }}
              >
                <Button
                  className="cancelbtn"
                  size="large"
                  style={{ marginLeft: 8 }}
                >
                  Cancel
                </Button>
                <div className="psw">
                  Forgot <a href="#">password?</a>
                </div>
              </FormItem>
            </div>
          </Form>
        </div>
      </div>
    );}
export default DetSignIn

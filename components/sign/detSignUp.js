import React from 'react'
import { Form, Select, Input, Switch, Slider, Button, Checkbox } from "antd";
const FormItem = Form.Item
const Option = Select.Option

const DetSignUp = () => {
    return (
      <div className="globalContainer">
        <div className="container">
          <h1 className="title"> Sign Up </h1>
          <div>
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
                label="@E-mail     "
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your adresse mail!",
                  },
                ]}
              >
                <Input.TextArea className="inputU" />
              </Form.Item>
              <Form.Item
                label=" Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password className="inputP" />
              </Form.Item>

              <Form.Item
                label=" Repeat Pass"
                name="Rpassword"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password className="inputP" />
              </Form.Item>

              <div className="containerb">
                <div class="clearfix">
                  <FormItem
                    style={{ marginTop: 48 }}
                    wrapperCol={{ span: 8, offset: 8 }}
                  >
                    <Button
                      className="signbtn"
                      size="large"
                      type="primary"
                      htmlType="submit"
                    >
                      Sign up
                    </Button>
                    <Button
                      className="cancelbtn "
                      size="large"
                      style={{ marginLeft: 8 }}
                    >
                      Cancel
                    </Button>
                  </FormItem>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
}

export default DetSignUp

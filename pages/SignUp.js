import DetSignUp from "../components/sign/detSignUp";



import React from 'react'

const SignUp = () => {
  return (
    <>
    <div>
      <DetSignUp />
      </div>
    </>
  );
}

export default SignUp


/*import { Form, Select, Input, Switch, Slider, Button,Checkbox  } from 'antd'

// Custom DatePicker that uses Day.js instead of Moment.js
import DatePicker from '../components/DatePicker'

import { SmileFilled } from '@ant-design/icons'

import Link from 'next/link'

const FormItem = Form.Item
const Option = Select.Option

const content = {
  marginTop: '100px',
}


export default function Signup() {
  return (
    <div style={content}>
      <div className="text-center mb-5">
        <Link href="#">
          <a className="logo mr-0">
            <SmileFilled size={48} strokeWidth={1} />
          </a>
        </Link>

        <h1 className="mb-0 mt-3 text-disabled"> Sign up !</h1>
      </div>
      <div> 
        <Form>
        <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        label="E-mail"
        name="email"
        rules={[{ required: true, message: 'Please input your adresse mail!' }]}
      >
        <Input />
      </Form.Item>

      
    




      <Form.Item
        label=" Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
     
      <Form.Item
        label=" Repeat Pass"
        name="Rpassword"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

     
    
          <FormItem
            style={{ marginTop: 48 }}
            wrapperCol={{ span: 8, offset: 8 }}
          >
            <Button size="large" type="primary" htmlType="submit">
              Sign up
            </Button>
            <Button size="large" style={{ marginLeft: 8 }}>
              Cancel
            </Button>
          </FormItem>
          <FormItem>

</FormItem>

        </Form>







      </div>
    </div>
  )
}
*/

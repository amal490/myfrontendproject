import React from 'react'
import { Space, Popover,Button,Col,Row} from "antd"; 
import {UserOutlined, 
  HomeOutlined,
  DashboardOutlined,
  QuestionCircleOutlined,
  EyeOutlined,
  LockOutlined} from "@ant-design/icons"

const content = (
  <div className="contentPop">
    {<QuestionCircleOutlined className="Question" />}
    <a href="../../Account">
      <Button className="btnprofile">
        {<EyeOutlined />}
        SEE MY ACCOUNT
      </Button>
    </a>
    <Button className="btnSignout">
      {<LockOutlined />}
      LOG OUT
    </Button>
  </div>
); ;
const navBarDash = () => {
    return (
      <>
        <div className="navbarDash">
          <Row>
            <Col offset={2} span={4}>
              <a className="titleSite" href="#">
                <b className="baseTitle" >
                    Sport Store
                </b>
              </a>
            </Col>

            <Col offset={30} span={18}>
              <div>
                <a href="#">
                  <Popover
                    className="Popover"
                    size="middle"
                    title="YOU WANT .."
                    content={content}
                  >
                    <Space>
                      {<UserOutlined />}
                      Profile
                    </Space>
                  </Popover>
                </a>

                <a href="../../products">
                  <Space>
                    {<HomeOutlined />}
                    Home
                  </Space>
                </a>
                <a className="active" href="../../dashboard">
                  <Space>
                    {<DashboardOutlined />}
                    Dashboard
                  </Space>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
}

export default navBarDash; 
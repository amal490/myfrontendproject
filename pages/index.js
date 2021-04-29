/*import { Form, Select, Input, Switch, Slider, Button, Checkbox } from "antd";
import { Layout, Menu, Breadcrumb } from "antd";
import { Card, Col, Row } from "antd";
import { Row, Col, Divider } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
// Custom DatePicker that uses Day.js instead of Moment.js
import DatePicker from "../components/DatePicker";

import { SmileFilled } from "@ant-design/icons";

import Link from "next/link";
import Navbar from "../components/layout/navbar";
import SideBar from "../components/layout/sideBar";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const FormItem = Form.Item;
const Option = Select.Option;

const content = {
  marginTop: "100px",
};
const menuItem = [
  {
    key: "1",
    name: "home",
  },
  {
    key: "2",
    name: "producs",
  },
  {
    key: "3",
    name: "profile",
  },
  {
    key: "4",
    name: "logout",
  },
];

const categoriesList = [
  {
    key: "1",
    name: "Vetement pour Femme",
    subcateg: [
      {
        key: "1",
        name: "chaussure",
      },
      {
        key: "2",
        name: "accessoire",
      },
    ],
  },
  {
    key: "2",
    name: "Vetement pour Homme",
    subcateg: [
      {
        key: "1",
        name: "chaussure",
      },
      {
        key: "2",
        name: "pull",
      },
    ],
  },
  {
    key: "3",
    name: "categ3",
    subcateg: [
      {
        key: "1",
        name: "subcateg1",
      },
      {
        key: "2",
        name: "subcateg1",
      },
      {
        key: "3",
        name: "subcateg1",
      },
    ],
  },
  {
    key: "4",
    name: "categ4",
    subcateg: [
      {
        key: "1",
        name: "subcateg1",
      },
      {
        key: "2",
        name: "subcateg1",
      },
      {
        key: "3",
        name: "subcateg1",
      },
      {
        key: "4",
        name: "subcateg1",
      },
      {
        key: "35",
        name: "subcateg1",
      },
    ],
  },
];

export default function index () {
  return (
    <Layout>
      <Navbar selectedItem="2" items={menuItem}></Navbar>
      <Layout>
        <SideBar categories={categoriesList} />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Divider orientation="left">Horizontal</Divider>
             <Row gutter={16}>
             <Col className="gutter-row" span={6}> 
              <div style={style}>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://th.bing.com/th/id/Ra3ae8b3658c5d257563c71bb3d784357?rik=HPRWMrA%2flVtCTA&riu=http%3a%2f%2fwww.centreequestre-lugere.fr%2flugere%2ffille%2fadidas-vetement-de-sport---3.jpg&ehk=4j69UiTMc%2bjQK0ve2aLyGMj0lFaq3YdFgeKX88c0TNg%3d&risl=&pid=ImgRaw"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              
            </Card> </div> 
          
            <col>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://th.bing.com/th/id/R3facb81036680f2d2b128d2a24553ee7?rik=uvrSekGFGPrsyQ&riu=http%3a%2f%2fwww.craft-sports.fr%2fFiles%2f122897%2fImg%2f14%2f1905338_999985_ACTIVE_INTENSITY_Sous-vetement_Maillot_Fx800.jpg&ehk=9UqRIo2zhMfkUFK0LqZ7BMdJyjhXEFzag0x8MgMReOk%3d&risl=&pid=ImgRaw"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                /* avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }            title="Maillot"
                description=""
              />
            </Card>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );*/

import Navbar from "./navbar";
import SideBar from "./sideBar";
import {  Row, Col, Layout } from "antd";

import { MenuItem } from "../../const/menuItem";
import { CategoriesList } from "../../const/categoriesList";



export default function MyLayout({ children }) {
  return (
    <Layout>
      <Navbar selectedItem="2" items={MenuItem}></Navbar>
      <Layout>
        <SideBar categories={CategoriesList} />
        <Row gutter={[16, 16]} type="flex">
          <Col>{children}</Col>
        </Row>
      </Layout>
    </Layout>
  );
}

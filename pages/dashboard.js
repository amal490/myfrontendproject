import React from 'react'
import DashClt from "../components/dashboard/dashClients";
import Breadcrumb from "../components/dashboard/breadCrumb";
import DashAdmin from "../components/dashboard/dashAdmins";
import DashProducts from "../components/dashboard/dashproducts";
import {Layout,Row,Col} from "antd";
import  SideBarDash from "../components/dashboard/sidbarDash";
import ProfileAdmin from "../components/dashboard/profileAdmin";
import NavBarDash from "../components/dashboard/navbarDash";
import Calendar from "../components/dashboard/calendar";
import DashCateg from "../components/dashboard/dashCateg";

const { Content } = Layout;
const dashboard = () => {
    return (
      <>
        <div className="containerDashboard">
          <NavBarDash />
          <SideBarDash />

          <Content>
            <Row>
              <Col offset={5}>
                <Breadcrumb />
              </Col>
            </Row>
            <Row>
              <Col offset={5}>
                <DashClt />
              </Col>
            </Row>
            <Row>
              <Col offset={5}>
                <DashAdmin />
              </Col>
            </Row>
            <Row>
              <Col offset={5}>
                <DashProducts />
              </Col>
            </Row>
            <Row>
              <Col offset={5}>
                <DashCateg />
              </Col>
            </Row>
          </Content>
        </div>
      </>
    );
}

export default dashboard
//<NavBarDash/>
/*
              <Col offset={10}> 
               <Calendar/>
              </Col>*/ 
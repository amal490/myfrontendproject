import React from 'react'
import { Layout, Menu } from "antd"; 
import { categDash } from "../../const/categories";
import ProfileAdmin from "./profileAdmin"; 
import Link from "next/link";

const { SubMenu } = Menu;
const { Sider } = Layout;



const SideBarDash = () => {
 
  return (
    <>
      <Sider width={200} className="sidBD">
        <Menu>
          <ProfileAdmin />
          {categDash.map((val) => {
            return (
              <SubMenu
                className="subBD"
                key={val.id}
                //icon={ <UserOutlined/>}
                title={val.name}
              />
            );
          })}
        </Menu>
      </Sider>
    </>
  );} 
  
  export default SideBarDash;


  




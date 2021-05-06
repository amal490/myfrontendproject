import React from 'react'
import CardAccount from "../components/Account/cardAcc"
import CardEdit from "../components/Account/cardEdit";
import NavbarAccount from "../components/Account/navbarAccount"
import { Layout } from "antd";

const { Content } = Layout;

const Account = () => {
    return (
      <>
        <NavbarAccount />

        <Content>
          <div className="Account">
            <div className="appAcc">
              <CardAccount />
              <CardEdit />
            </div>
          </div>
        </Content>
      </>
    );
}

export default Account




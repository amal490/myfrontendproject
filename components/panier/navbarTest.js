import React from 'react'
import { Steps } from "antd";

const { Step } = Steps;
import {
  ShoppingOutlined,
  SolutionOutlined,
  LoadingOutlined,
  CheckCircleTwoTone,
} from "@ant-design/icons";


const NavbarTest = () => {
    return (
      <>
        <header>
          <div className="left">
            <Steps>
              <Step
                status="process"
                title="Panier"
                icon={<ShoppingOutlined />}
              />
              <Step
                status="finish"
                title="Connexion"
                icon={<SolutionOutlined />}
              />
              <Step
                status="Livraison"
                title="Livraison"
                icon={<LoadingOutlined />}
              />
              <Step
                status="wait"
                title="Paiement"
                icon={<CheckCircleTwoTone />}
              />
            </Steps>
          </div>
        </header>
      </>
    );
}

export default NavbarTest

//<header>
 //</header>
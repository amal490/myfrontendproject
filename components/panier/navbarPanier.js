import React from 'react'
import { Steps} from "antd";
import {
  ShoppingOutlined,
  SolutionOutlined,
  LoadingOutlined,
  CheckCircleTwoTone,
} from "@ant-design/icons";

 
const { Step } = Steps;


const Navbar= () => {
    return (
      <div>
        <header>
          <div className="left">
         
              <Steps>
                <Step
                  status= "process"
                     title= "Panier"
                      icon = {<ShoppingOutlined />}
                   />
                    <Step status= "finish"
    
                     title= "Connexion"
                     icon={<SolutionOutlined />}
  
                         />
            
              </Steps>;
         
          </div>
        </header>
      </div>
    );
}

export default Navbar;

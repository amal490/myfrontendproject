import React from 'react'
import AvatarImg from "../components/sign/avatar";
import DetSignIn from "../components/sign/detSignIn";
import DetSignUp from "../components/sign/detSignUp";
import { Card,Row,Col } from "antd";
import BtnSignUp from "../components/sign/btnSignUp";
import FooterPanier from "../components/panier/footerPanier";
import Footer from "../components/panier/footer";

const AllSign = () => {
    return (
      <>
        <div>
          <Row>
            <Col>
              <Card>
                <AvatarImg />
                <DetSignIn />
              </Card>
            </Col>

            <Col xs={{ span: 6, offset: 1 }} lg={{ span: 5, offset: 1 }}>
              <div className="ContainerS">
                <Card>
                  <b>New Client ? </b>

                  <BtnSignUp />
                </Card>
              </div>
            </Col>
          </Row>
          <FooterPanier />

          <Footer />
        </div>
      </>
    );
}

export default AllSign
/* <Col>
              <DetSignUp />
            </Col>*/ 
            //className="globalContainer"
            //xs={{ span: 15, offset: 1 }} lg={{ span: 15, offset: 1 }}
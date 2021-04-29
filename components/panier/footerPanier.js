import React from "react";
import { BackTop, Button } from "antd";
import { Row, Col } from "antd";

import Link from "next/link";
import { FooterDetails } from "../../const/footerDetails";

const Footer= () => {
 
  return (
    <>
      <div className="footerPanier">
        <div className="container">
          <Row>
            {FooterDetails.map((val, key) => {
              return (
                <div className="Footer" key={key}>
                  <Col offset={20} span={12}>
                    {val.icon}

                    {
                      <Link
                        href={{
                          pathname: "/panier/[footer]",
                          query: { footer: val.key },
                        }}
                      >
                      
                        <a>
                          {val.name}
                          
                        </a>
                      </Link>
                    }
                  </Col>
                </div>
              );
            })}
          </Row>
         
         
        </div>
      </div>
    </>

   
  );
};

export default Footer;

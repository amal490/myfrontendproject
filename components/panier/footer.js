import React from 'react'
import {Col,Row} from "antd"
import SearchFooter from "./searchFooter";
import { FooterDet} from "../../const/footerDet";
import Link from "next/link";
 import {
   FacebookOutlined,
   InstagramOutlined,
   TwitterOutlined,
 } from "@ant-design/icons";
const Footer = () => {
    return (
      <>
        <div className="footer">
          <div className="logo"></div>
          <div className="socials">
            <Row>
              <Col offset={2} span={4}>
                <a href="https://www.facebook.com/">
                  <FacebookOutlined />
                </a>
              </Col>
              <Col offset={2} span={4}>
                <a href="https://www.instagram.com/?hl=fr">
                  <InstagramOutlined />
                </a>
              </Col>
              <Col offset={2} span={4}>
                <a href="https://www.instagram.com/?hl=fr">
                  <TwitterOutlined />
                </a>
              </Col>
            </Row>
            <hr className="hr" />
            <Row>
              <Col className="footerDet">
                Get to know us
                <ul>
                  <li>
                    <a href="">sport-shop</a>
                  </li>
                  <li>
                    <a href="">About us </a>
                  </li>
                  <li>
                    <a href="">why us </a>
                  </li>
                </ul>
              </Col>
              <Col className="footerDet">
                <ul>
                  let us help you
                  <li>
                    <a href=""> about delivery </a>
                  </li>
                  <li>
                    <a href="">about payment</a>
                  </li>
                  <li>
                    <a href="">return conditions</a>
                  </li>
                </ul>
              </Col>
              <Col className="footerDet">
                <ul>
                  contact us
                  <li>
                    <a href="">facebook</a>
                  </li>
                  <li>
                    <a href="">Instagram</a>
                  </li>
                  <li>
                    <a href="">twitter</a>
                  </li>
                </ul>
              </Col>
            </Row>

            <div className="conditions">
              <ul>
                <li>
                  <a href="https://www.facebook.com/">Conditions of Use</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/">Privacy Notice</a>
                </li>
              </ul>
            </div>
            <div className="date">
              <p>&copy;{new Date().getFullYear()} Sport-shop</p>
            </div>
          </div>
        </div>
      </>
    );
}

export default Footer
// <SearchFooter/>
/*
 <img
              className="imgLogo"
              src="https://www.insignis.at/wp-content/uploads/2019/06/Man-Silhouette-1-500x500.jpg"
            />
            <a href="/index"> Sport-shop</a>


*/ 
/*
 {FooterDet.map((val, key) => {
                return (
                  <div className="footerDet" key={key}>
                    <Col offset={2} span={20}>
                      <ul>
                        {val.title}
                        <br />
                        {
                          <Link
                            href={{
                              pathname: "/panier/[footer]",
                              query: { footer: val.key },
                            }}
                          >
                            <li>
                              <a>{val.name}</a>
                            </li>
                          </Link>
                        }
                      </ul>
                    </Col>
                  </div>
                );
              })}







*/ 
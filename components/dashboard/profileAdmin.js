import React from 'react';
import {Row,Col,Space} from "antd";
const ProfileAdmin = () => {
    return (
      <>
        <div className="containerprofileAdmin">
          <Row>
            <div className="containerImgAdmin">
              <Col>
                <img
                  className="imgProfileAdmin"
                  src="https://scontent.ftun12-1.fna.fbcdn.net/v/t1.15752-9/158121687_344441243535047_569494720681753246_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_ohc=Ce6u01A5iBwAX-_-3a4&_nc_ht=scontent.ftun12-1.fna&oh=3775cfcac5a343e6f880d475c1dbd30d&oe=60B3C8B6"
                ></img>
              </Col>
            </div>
          </Row>
          <Row>
            <Col className="NameAdmin">
              <a> Amal Abdellaoui </a>
            </Col>
          </Row>
        </div>
      </>
    );
}

export default ProfileAdmin

import React from 'react'
import { Card,Button,Space} from "antd";
import {MailOutlined,PhoneOutlined} from "@ant-design/icons"

const cardAccount = () => {
    return (
      <>
        <div className="cardAccount">
          <div className="upper-container">
            <div className="imgAccContainer">
              <img
                src="https://scontent.ftun12-1.fna.fbcdn.net/v/t1.15752-9/158121687_344441243535047_569494720681753246_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_ohc=Ce6u01A5iBwAX-_-3a4&_nc_ht=scontent.ftun12-1.fna&oh=3775cfcac5a343e6f880d475c1dbd30d&oe=60B3C8B6"
                alt=""
                height="100px"
                width="100px"
              />
            </div>
          </div>

          <div className="lower-container">
            <h3>Amal Abdellaoui</h3>
            <h4>Admin</h4>

            <h5> <MailOutlined /> amalabdellaoui@gmail.com</h5>

            <h5>
                <PhoneOutlined/>
              <b>50540776 </b>
            </h5>
            <Button className="btnEdit">Edit Profile</Button>
          </div>
        </div>
      </>
    );

}

export default cardAccount

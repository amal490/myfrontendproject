import { Rate, Descriptions, Row} from "antd";
import Buttonpanier from "./btnPanier";


const  Details =({product})=> (
  
        <Row gutter={12}>
          <div className="container">
            <h1 className="title">
              <b> {product.name}</b>
            </h1>
            <div className="cardA">
              <Descriptions title="Details:" layout="vertical">
                <Descriptions.Item label="Marque">
                  <h4> {product.Marque}</h4>
                </Descriptions.Item>

                <Descriptions.Item label="Price">
                  <h4> {product.price}$</h4>
                </Descriptions.Item>

                <Descriptions.Item label="Couleur">
                  <h4>{product.couleur}</h4>
                </Descriptions.Item>

                <Descriptions.Item label="Code-Prod">
                  {product.code_prod}
                </Descriptions.Item>
                <Descriptions.Item label="Disponibilite">
                  {product.Disponibilite}
                </Descriptions.Item>
                <Descriptions.Item label="Taille">
                  {product.taille}
                </Descriptions.Item>

                <Descriptions.Item label="Rate">
                  <Rate allowHalf defaultValue={product.rate} />
                </Descriptions.Item>
              </Descriptions>
              <Buttonpanier />
            </div>
          </div>
        </Row>

      
    );


export default Details ;
 
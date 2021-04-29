import { Card,Col, Rate } from "antd";
import Link from "next/link";

const { Meta } = Card;
import {
 LikeOutlined ,
 StarOutlined ,
ShoppingCartOutlined ,
} from "@ant-design/icons";

class Product extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Col span={6}>
        <Card
          style={{ width: 300, height: 300 }}
          cover={
            <img
              alt={this.props.name}
              style={{ height: 300 }}
              src={this.props.image}
            />
          }
          actions={[
            <LikeOutlined  key="like"/>,
            <StarOutlined key="favori"/>,
            <ShoppingCartOutlined  key="shopping"/>,
          ]}
        >
          <Meta
            title={
              <Link
               
                href={{
                  pathname: "/prod_details/[product]",
                  query: { product: this.props.id },
                 
                }}

                
              >
                <a>{this.props.name}</a>
              </Link>
            }
            description={this.props.price + "TND"}
          />
          <span>
            <Rate tooltips="Rate this product" value={this.props.rate} />
          </span>
        </Card>
      </Col>
    );
  } 
}
export default Product;



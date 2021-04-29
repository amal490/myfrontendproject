
import { Layout,Col, Row } from "antd";
import Img from "../../components/product/img";
import Details from "../../components/product/details";
import Bread from "../../components/product/bread";
import { productsDetails } from "../../const/productsDetails";
import MyLayout from "../../components/layout";

const { Content } = Layout;

const content = {
  marginTop: "100px",
};
class prod_details extends React.Component {
  static getInitialProps({ query }) {
    return { query };
  }

  getProductByKey = (key) => {
    return productsDetails.filter(function (data) {
      return data.key == key;
    })[0];
  };

  render() {
    console.log("pros", this.props);
    const { query } = this.props;
     let currentProduct = this.getProductByKey(query.id);

    return (
      
    <MyLayout>
        <>
          <Bread productName={currentProduct.name} />
          <Content>
            <Row>
              <Col>
                <Img productImgs={currentProduct.img} />
              </Col>
              <Col  offset={6} span={8} >
                <Details product={currentProduct} />
              </Col>
            </Row>
          </Content>
        </>
      </MyLayout>
    );
  }
}
export default prod_details;

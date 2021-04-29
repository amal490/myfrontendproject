import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
class Buttonpanier extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Button type="primary" icon={<ShoppingCartOutlined />} size={"large"}>
          Ajouter au panier
        </Button>
      </>
    );
  }
}

export default Buttonpanier;

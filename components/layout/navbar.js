import { Layout, Menu } from "antd";
import Search from "../../components/search";
const navbar = (props) => {
  const { selectedItem, items } = props;

  console.log(selectedItem);
  return (
    <>
      <Layout.Header className="headerG">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[selectedItem]}
        >
          {items.map((itm, idx) => {
            return (
              <Menu.Item key={itm.key}>
                {itm.icon}
                {itm.name}
                {itm.image}
              </Menu.Item>
            );
          })}
        </Menu>
      </Layout.Header>
    </>
  );
};
export default navbar ; 

  /*<Button type="ghost" icon={<ShoppingCartOutlined />} size={"small"}>
    Panier
  </Button>;*/

import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  DownSquareOutlined 
} from "@ant-design/icons";
const { SubMenu } = Menu;
const { Sider } = Layout;

const SideBar = (props) => {
  const { categories } = props;
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        {categories.map((categ) => {
          return (
            <SubMenu
              key={categ.id}
              //icon={ <UserOutlined/>}
              title={categ.name}
            > 
              {categ.subcateg.map((scateg) => {
                return <Menu.Item key={scateg.key}>{scateg.name}</Menu.Item>;
              })}
            </SubMenu>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default SideBar;

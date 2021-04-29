  import {
    HomeOutlined ,
    UserOutlined ,
    SkinOutlined ,
    UnlockOutlined,
    SearchOutlined,
    ShoppingCartOutlined, 
    EnvironmentOutlined ,
  } from "@ant-design/icons";
  import Link from "next/link";
  import Search from "../components/search";
  export const MenuItem = [
    /* {
      key: "1",
      name: "home",
      icon: <HomeOutlined />,
    },
    {
      key: "2",
      name: "Products",
      icon: <SkinOutlined />,
    },
    {
      key: "3",
      name: "profile",
      icon: <UserOutlined />,
    },
    {
      key: "4",
      name: "logout",
      icon: <UnlockOutlined />,
    },*/

    {
      key: "1",
      name: "Sport-Shop",
      icon: <HomeOutlined />,
      //func: <Search/>
    },
    {
      key: "2",
      name: " TUNISIA",
     //image : "https://cdn.countryflags.com/thumbs/tunisia/flag-waving-250.png",
      icon: <EnvironmentOutlined />,
      //func: <Search/>
    },

    {
      key: "3",
      //name: "Search",
      icon: <Search />,
      //func: <Search/>
    },
    {
      key: "4",
     
     name: "profile",
      icon: <UserOutlined />,
    },
    {
      key: "5",
      name: "Cart",
      icon: <ShoppingCartOutlined />,
    },
  ];
  //<SearchOutlined   />


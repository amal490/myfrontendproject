import {
  ShoppingOutlined,
  SolutionOutlined,
  LoadingOutlined,
  CheckCircleTwoTone,
} from "@ant-design/icons";

export const NavbarPanier = [
  {
    key: "1",
    title: "Panier",
    icon: <ShoppingOutlined />,
    status: "process",
  },
  {
    key: "2",
    title: "Connexion",
    icon: <SolutionOutlined />,
    status: "finish",
  },

  { key: "3", 
  title: "Livraison",
   icon: <LoadingOutlined />,
    status: "Livraison" },

  { key: "4",
  title: "Paiement", 
  icon: <CheckCircleTwoTone />, 
  status: "wait" },

  
];

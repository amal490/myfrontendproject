import React from 'react'
import NavbarTest  from "../components/panier/navbarTest";
import FooterPanier from "../components/panier/footerPanier";
import Footer from "../components/panier/footer";

 import {Layout,BackTop} from 'antd'
 const {  Content } = Layout;



const panier = () => {
    return (
      <>
        <div className="pageContainer">
          <NavbarTest />
          <Content></Content>
          <FooterPanier />
         
          <Footer />

        </div>
      </>
    );
}

export default panier
/*/
/*  <Footer/>*/ 
import React from 'react'
import FooterPanier from '../../components/panier/footerPanier';
import { FooterDetails } from "../../const/footerDetails";
import Bread from "../../components/product/bread";

class panier extends React.Component {
  static getInitialProps({ query }) {
    return { query };
  }

  getFooterByKey = (key) => {
    return FooterDetails.filter(function (data) {
      return data.key == key;
    })[0];
  };

  render() {
    //console.log("pros", this.props);
    const { query } = this.props;
  //  let currentFooter= this.getFooterByKey(query.id);
    return (
      <>
        <Bread productName={FooterDetails.name} />
        <p>hello</p>
      </>
    );
  }
}

export default panier ; 


  /*{
    currentContent.name;
  }
  {
    currentContent.icon;
  }
*/
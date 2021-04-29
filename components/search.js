import { productsDetails } from "../const/productsDetails";
import Product from "../components/product/productCard";
import { useState } from "react";

function Search() {
  const [searchProduct, setSearchProduct] = useState("product");
  return (
    <>
      <input
        type="text"
        placeholder="Search...."
        onChange={(event) => {
          setSearchProduct(event.target.value);
        }}
      />

      {productsDetails
        .filter((val) => {
          if (
            val.name.toLowerCase().includes(searchProduct.toLowerCase())
          ) {
            return val;
          }
        })
        .map((val, key) => {
          return (
            <div className="user" key={key}>
              <p>
                <Product
                  id={val.key}
                  image={val.img[0]}
                  name={val.name}
                  price={val.price}
                  rate={val.rate}
                />
              </p>
            </div>
          );
        })}
    </>
  );
}
export default Search;

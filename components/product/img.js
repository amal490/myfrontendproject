import { Row,Col } from "antd";
import  {useState} from "react"
const Img = ({ productImgs }) => {
  
const [currentImg,setCurrentImg]= useState(productImgs[0])

  function clickInThumbnail(id){
     setCurrentImg(productImgs[id]);
   }
  
  return (
    <Row gutter={12}>
      <div className="grid">
       
        {productImgs.map((product, index) => (
           <Col>
          <div className="card" onClick={() => clickInThumbnail(index)}>
            <img width="90" alt="Exemple1" src={productImgs[index]} />
          </div>
          </Col>
        ))}
      </div>
      <div className="grid">
        <div className="card">
          <div className="containerI">
            <img width="400" src={currentImg} />
          </div>
        </div>
      </div>
    </Row>
  );};






export default Img;



   { /*<style jsx>{`
          img {
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 5px;
          }
          img:hover {
            box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
          }

          .grid {
            margin: 25px;
          }
        `}</style> */}
//export default Img;

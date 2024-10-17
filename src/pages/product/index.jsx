import { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function ProductPage() {
  let [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
      });
  }, []);

  const delProd = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <>
      <div className="cards container">
        {product.map((data) => (
          <div className="product">
            <h1>{data.title}</h1>
            <Link to={`/product/${data.id}`}>VIEW</Link>
            <br /> <br />
            <button onClick={() => delProd(data.id)}>DELETE</button>
          </div>
        ))}
      </div>
    </>
  );
}

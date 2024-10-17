import { useParams } from "react-router-dom";
import "./style.css";
import { useState, useEffect } from "react";

export default function SinglePage() {
  let { id } = useParams();
  let [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
      });
  }, [id]);

  return (
    <div className="container">
      <h1>{product?.id} product</h1>
      <h2>{product.title}</h2>
      <p>{product.body}</p>
    </div>
  );
}

import "./style.css";

export default function Card({ img, h1, p }) {
  return (
    <div className="card">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="text">
        <h1>{h1}</h1>
        <p>{p}</p>
      </div>
    </div>
  );
}

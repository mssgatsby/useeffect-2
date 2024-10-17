import { Link } from "react-router-dom";
import "./style.css";

export default function Nav() {
  return (
    <div className="nav container">
      <img
        src="https://s3-alpha-sig.figma.com/img/1c78/6961/d42a2271e4121cd9bb8436cb4aa1c6d1?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qMdM4wAGHTDDuSqg1LrAZqgP285TaBQVByfQ-j6Jhp30VWh3qBeSDTIwFdInqJXpnmJDfqBTKUmoHVdfD9y8fn2yFunScDW6vAK3OaR1cej9~D-F14DbPgF8HR8TygdI59X1jxdw3xQ~JGP0i5UtuBVPQyppgHk~QUcQL8KFCa8F~pHr-J~PLwwQLj8ffxoO8Op~fFFUlVQRpdRJY2sTGtVIfZCKEztQY0AdUO9WHcqKGxyCwbz3Ef4eADMXxXD-67Vy95Ko2bYC0x7V37Qd0WizBFVnrn-B-l2Gq2kXDTBPIKUVAW-Pdxw3~2rAUAzVfT-CXmwGZklSsrzqF4hbdg__"
        alt=""
      />
      <ul>
        <li>
          <Link to={"/"}>ART & DESIGN</Link>
        </li>
        <li>
          <Link to={"/product"}>NOUVELLES</Link>
        </li>
        {/* <li><Link to={"product/single/:id"}>À PROPOS</Link></li> */}
        <li>
          <Link to={"/create"}>CONTACT</Link>
        </li>
      </ul>
    </div>
  );
}

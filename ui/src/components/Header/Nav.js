import { SUl, SLi } from "./Header.style";
import nav from "./NavConfig";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <SUl>
      {nav.map((item) =>
        item.id !== "store" ? (
          <Link
            style={{ textDecoration: "none" }}
            key={item.id}
            to={item.route}
          >
            <SLi>{item.name}</SLi>
          </Link>
        ) : (
          <a
            key={item.id}
            target="_blank"
            href={item.route}
            style={{ textDecoration: "none" }}
            rel="noreferrer"
          >
            <SLi>{item.name}</SLi>
          </a>
        )
      )}
    </SUl>
  );
};

export default Nav;

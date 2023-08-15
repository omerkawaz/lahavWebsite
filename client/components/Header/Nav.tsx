import { SUl, SLi } from "./Header.style";
import nav from "./NavConfig";
import Link from "next/link";

{
  /* <Link href={{ pathname: '/about', query: { name: 'Sajad' }</Link> }}> */
}

const Nav = () => {
  return (
    <SUl>
      {nav.map((item) =>
        item.id !== "store" ? (
          <Link
            key={item.id}
            href={{ pathname: `/${item.route}`, query: { name: item.route } }}
            as={item.route}
            passHref
          >
            <a>
              <SLi>{item.name}</SLi>
            </a>
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

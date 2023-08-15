import React from "react";
import { SMobileNav, MobileUl, MobileLi } from "./Header.style";
import nav from "./NavConfig";
import Link from "next/link";

const NavMobile = ({ setBurgerMenu }: any) => {
  return (
    <SMobileNav>
      <MobileUl>
        {nav.map((item) =>
          item.id !== "store" ? (
            <Link
              key={item.id}
              href={{ pathname: `/${item.route}`, query: { name: item.route } }}
              as={item.route}
              passHref
            >
              <a
                onClick={() => setBurgerMenu(false)}
                style={{
                  height: "30%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#505050",
                }}
              >
                <MobileLi>{item.name}</MobileLi>
              </a>
            </Link>
          ) : (
            <a
              key={item.id}
              target="_blank"
              href={item.route}
             
              style={{
                height: "30%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#505050",
              }}

              rel="noreferrer"
            >
              <MobileLi>{item.name}</MobileLi>
            </a>
          )
        )}
      </MobileUl>
    </SMobileNav>
  );
};

export default NavMobile;

import React from "react"
import { Link } from "gatsby"
import { MenuWrapper, Nav, OverrideGlobalStyle } from "./MobileMenu.styles"
import { linkResolver } from "gatsby-source-prismic-graphql"

const MobileMenu = ({ menuOpen, items }) => (
  <>
    <OverrideGlobalStyle menuOpen={menuOpen} />
    <MenuWrapper menuOpen={menuOpen}>
      <Nav>
        {items.map(menu => (
          <li key={menu.link_name}>
            <Link to={linkResolver(menu.link._meta)}>
              {menu.link_name}
            </Link>
          </li>
        ))
        }
      </Nav>
    </MenuWrapper>
  </>
)

export default MobileMenu

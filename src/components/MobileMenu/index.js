import React from "react"
import { Link } from "gatsby"
import { MenuWrapper, Nav, OverrideGlobalStyle } from "./MobileMenu.styles"

const MobileMenu = ({ menuOpen, items }) => (
  <>
    <OverrideGlobalStyle menuOpen={menuOpen} />
    <MenuWrapper menuOpen={menuOpen}>
      <Nav>
        {items.map(menu => (
          <li key={menu.link_name}>
            <Link to={`/${menu.link._meta.uid}`} activeClassName="active">
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

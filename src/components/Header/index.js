import React, { useState } from "react"
import { Link } from "gatsby"

import { HeaderWrapper, Branding } from "./Header.styles"
import Menu from "../Menu"
import Hamburger from "../Hamburger"
import MobileMenu from "../MobileMenu"
import { useNavigationQuery } from "../../hooks/useNavigationQuery"

const Header = ({ siteTitle = '' }) => {
  const menu = useNavigationQuery();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrapper>

      <Branding>
        <Link to={"/"}>
          { siteTitle }
        </Link>
      </Branding>

      <Menu items={menu} />
      <MobileMenu menuOpen={menuOpen} items={menu}/>
      <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

    </HeaderWrapper>
  )
}

export default Header

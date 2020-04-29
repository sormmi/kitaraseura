import React from "react"
import { Link } from "gatsby"
import { Nav } from "./Menu.styles"
import { linkResolver } from "gatsby-source-prismic-graphql"

const Menu = ({ items }) => (
    <Nav>
      {items.map(menu =>  {

        return (
            <li key={menu.link_name}>
              <Link to={linkResolver(menu.link._meta)}>
                {menu.link_name}
              </Link>
            </li>
          )
        }
      )}
    </Nav>
  )

export default Menu

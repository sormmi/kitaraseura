import React from "react";

import { StaticQuery, graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import { FooterDiv, FooterLinks } from "./Footer.styles"
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa/";

const Footer = ({ lang }) => {
  return (
    <div>
      <StaticQuery
        query={`${footerQuery}`}
        render={data => {
          const edges = data.prismic.allFooters.edges;
          return (
            <FooterDiv>

              {edges.map((node, index) => {
                if (node.node._meta.lang !== lang) return null;

                return (
                  <div key={index}>
                    <RichText render={node.node.footer_title} />
                    <RichText render={node.node.footer_description} />
                    <p>{node.node.footer_content}</p>
                  </div>
                );
              })}

              <FooterLinks>
                {data.prismic.allFooters.edges[0].node.footer_links.map(
                  footer_link => {
                    return (
                      <a
                        href={footer_link.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={footer_link.link.url}
                      >
                        {footer_link.link_label[0].text === "Facebook" && (
                          <FaFacebook size={30} />
                        )}
                        {footer_link.link_label[0].text === "Instagram" && (
                          <FaInstagram size={30} />
                        )}
                        {footer_link.link_label[0].text === "LinkedIn" && (
                          <FaLinkedin size={30} />
                        )}
                        {footer_link.link_label[0].text === "Twitter" && (
                          <FaTwitter size={30} />
                        )}
                      </a>
                    );
                  }
                )}
              </FooterLinks>

             <p>&copy; kotkan kitaraseura</p>
              <small>@sormmi {new Date().getFullYear()}</small>
            </FooterDiv>
          );
        }}
      />
    </div>
  );
};

const footerQuery = graphql`
  {
    prismic {
      allFooters {
        edges {
          node {
            _meta {
              id
              lang
            }
            footer_icon
            footer_title
            footer_description
            footer_links {
              link {
                ... on PRISMIC__ExternalLink {
                  _linkType
                  url
                }
              }
              link_label
            }
            footer_group {
              footer_group_title
              footer_group_content
            }
          }
        }
      }
    }
  }
`;

export default Footer;

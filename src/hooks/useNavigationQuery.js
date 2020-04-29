import { useStaticQuery, graphql } from "gatsby"

export const useNavigationQuery = () => {
  const data = useStaticQuery(graphql`
    query NavigationQuery {
      prismic {
        allNavigations {
          edges {
            node {
              navigation_links {
                link {
                  _linkType
                  ... on PRISMIC_Page {
                    _meta {
                      uid
                      type
                    }
                  }            
                  ... on PRISMIC_Eventpage {
                    _meta {
                      uid
                      type
                    }
                  }
                  ... on PRISMIC_Historypage {
                    _meta {
                      uid
                      type
                    }
                  }
                }
                link_name
              }
            }
          }
        }
      }
    }
`)

  return data.prismic.allNavigations.edges[0].node.navigation_links;
}

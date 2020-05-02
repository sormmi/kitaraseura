import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import SliceZone from "../components/SliceZone"
import { RichText } from "prismic-reactjs"
import get from "lodash/get"


const Page = ({ data }) => {

  const body = get(data, 'prismic.allPages.edges.0.node.body', []);
  const page = get(data, 'prismic.allPages.edges.0.node._meta.uid', 'Sivu');

  return (
    <Layout>
      <SEO title={page} />

      <SliceZone
        body={body}
        page={page}
      />

      <div className={page === 'linkit' ? 'container-links-grid' : 'container'}>

        { page === 'linkit' && (
          <div>
            <h2>Kitaraseuran jäsenyys</h2>
            <Link to="/liity-jaseneksi">Liity jäsenksi</Link>
          </div>
        )}

        { body.map((body,index) => {

          if (body.type === 'hero') {
            return <RichText key={index} render={body.primary.page_content}/>
          }

          if (body.type === 'link_category') {
            return (
              <div key={index}>

                <RichText render={body.primary.link_category_title} />
                { body.fields.map(field => (
                  <div key={field.link_name}>
                    <a href={field.link.url}
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                      {field.link_name}
                    </a>
                  </div>
                )) }

              </div>
            )
          }
          return null;
        })}

      </div>
    </Layout>
  );
};

export const query = graphql`
  query PageQuery($id: String!) {
    prismic {
      allPages(id: $id) {
        edges {
          node {
            _meta {
              uid
            }
            body {
              ... on PRISMIC_PageBodyLink_category {
                type
                primary {
                  link_category_title
                }
                fields {
                  link {
                    ... on PRISMIC__ExternalLink {
                      url
                    }
                  }
                  link_name
                }
              }
              ... on PRISMIC_PageBodyHero {
                type
                label
                primary {
                  hero_content
                  hero_title
                  page_content
                  background_image
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Page;

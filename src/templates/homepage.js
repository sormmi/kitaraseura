import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import SliceZone from "../components/SliceZone";

const HomePage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Home" />

      <SliceZone
        body={data.prismic.allHomepages.edges[0].node.body}
        page="home"
      />
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery($lang: String!) {
    prismic {
      allHomepages(lang: $lang) {
        edges {
          node {
            body {
              ... on PRISMIC_HomepageBodyHero {
                type
                primary {
                  background_image
                  hero_content
                  hero_title
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default HomePage;

import { graphql, Link } from 'gatsby';
import get from 'lodash/get';
import { RichText } from 'prismic-reactjs';
import React from 'react';
import Layout from '../components/Layout';
import styled from "styled-components";

import LeftIcon from "../images/arrow-left.svg"
import RightIcon from "../images/arrow-right.svg"
import SliceZone from "../components/SliceZone"
import { linkResolver } from "gatsby-source-prismic-graphql"
import SEO from "../components/seo"

export const PageNavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: var(--site-max-width);
  margin: 0 0 10px 0;

  input {
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease;

    :hover {
      opacity: 0.7;
    }
  }
`
export const ImgWrapper = styled.div`
  width: 30px;
  height: 30px;
`

export const query = graphql`
  query HistoryQuery(
    $uid: String
    $paginationPreviousUid: String!
    $paginationPreviousLang: String!
    $paginationNextUid: String!
    $paginationNextLang: String!
  ) {
    prismic {
      allHistorypages(uid: $uid) {
        edges {
          node {
            _meta {
              uid
            }
            history_content
            sequence_number
            body {
              ... on PRISMIC_HistorypageBodyHero {
                type
                label
                primary {
                  hero_title
                  hero_content
                  background_image
                }
              }
            }
          }
        }
      }
      prevHistory: historypage(uid: $paginationPreviousUid, lang: $paginationPreviousLang) {
        _meta {
          uid
          type
          lang
        }
      }
      nextHistory: historypage(uid: $paginationNextUid, lang: $paginationNextLang) {
        _meta {
          uid
          type
          lang
        }
      }
    }
  }
`;

const Pagination = ({ nextHistory, prevHistory }) => (
    <PageNavigationWrapper>

      <ImgWrapper>
        {prevHistory ? (
          <Link to={linkResolver(prevHistory)} aria-label="Prev history">
            <input type="image" alt="left-nav" src={LeftIcon} />
          </Link>
        ) : (
          ''
        )}
      </ImgWrapper>

      <ImgWrapper>
        {nextHistory ? (
          <Link to={linkResolver(nextHistory)} aria-label="Next history">
            <input type="image" alt="left-nav" src={RightIcon} />
          </Link>
        ) : (
          ''
        )}
      </ImgWrapper>
    </PageNavigationWrapper>
);

const HistoryPage = props => {
  const {
    pageContext: { paginationPreviousMeta, paginationNextMeta },
    data: {
      prismic: { prevHistory, nextHistory },
    },
  } = props;

  const title = get(props.data, 'prismic.allHistorypages.edges.0.node.body.primary.hero_title', 'historia');
  const content = get(props.data, 'prismic.allHistorypages.edges.0.node.history_content');
  const body = get(props.data, 'prismic.allHistorypages.edges.0.node.body', []);

  return (
    <Layout>
      <SEO title={title} />

      <SliceZone
        body={body}
        page={title}
      />

      <div className="container">
        <RichText render={content} />
        <Pagination prevHistory={paginationPreviousMeta} nextHistory={paginationNextMeta} />
      </div>
    </Layout>
  );
};

export default HistoryPage;

import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { RichText } from "prismic-reactjs";
import SliceZone from "../components/SliceZone"
import get from "lodash/get"

const EventWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 10px;
  
  p {
    font-size: 1rem;
  }
  
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, auto);
  }
  
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(1, auto);
  }
`;

const EventFields = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;

const EventFieldHeader = styled.div`
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
`;

const EventFieldHeaderItem = styled.div`
  flex-grow: 2;
  margin-bottom: 6px;
  color: ${ props => props.theme.colors.textDark };
  font-weight: ${ props => props.bold ? 'bold': 'normal' };
`;

const EventPage = ({ data }) => {

  const body = get(data, 'prismic.allEventpages.edges.0.node.body', []);
  const page = get(data, 'prismic.allEventpages.edges.0.node._meta.uid', 'tapahtumat');

  return (
    <Layout>
      <SEO title={page} />

      <SliceZone
        body={body}
        page={page}
      />

      <div className="container">

        { body.map((body,index) => {

          if (body.type === 'event_group') {
            return (
              <EventWrapper key={index}>
                { body.fields.map((field, i) => (

                    <EventFields key={i}>
                      <EventFieldHeader>
                        <EventFieldHeaderItem bold>{field.event.event_data}</EventFieldHeaderItem>
                        <EventFieldHeaderItem>{field.event.event_location}</EventFieldHeaderItem>
                      </EventFieldHeader>
                      <div>{field.event.event_name}</div>
                      <RichText render={field.event.event_description} />
                    </EventFields>

                )) }
              </EventWrapper>
            )
          }

          if (body.type === 'hero') {
            return <p key={index}>{body.primary.page_content.text}</p>
          }

          return null;
        })}

      </div>
    </Layout>
  );
};



export const query = graphql`
  query EventPageQuery($uid: String!) {
    prismic {
      allEventpages(uid: $uid) {
        edges {
          node {
            _meta {
              uid
            }
            body {
              ... on PRISMIC_EventpageBodyHero {
                type
                primary {
                  hero_content
                  hero_title
                  page_content
                  background_image
                }
              }
              ... on PRISMIC_EventpageBodyEvent_group {
                type
                fields {
                  event {
                    ... on PRISMIC_Event {
                      event_data
                      event_name
                      event_description
                      event_location
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default EventPage;

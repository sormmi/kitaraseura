import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { RichText } from "prismic-reactjs";
import SliceZone from "../components/SliceZone"
import get from "lodash/get"
import CalendarIcon from "../images/calendar.svg"

const EventWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 10px;
  row-gap: 0;
  
  p {
    font-size: 1rem;
  }
  
  @media screen and (min-width: 800px) {
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

const EventLocation  = styled.div`
  font-size: 0.8rem;
  margin: auto 0;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-size: 0.8rem;

  img {
    margin: 0 10px 0 0;
  }
`

const EventPage = ({ data }) => {

  const body = get(data, 'prismic.allEventpages.edges.0.node.body', []);
  const page = get(data, 'prismic.allEventpages.edges.0.node._meta.uid', 'tapahtumat');
  const events = get(data, 'prismic.allEvents.edges', []);

  return (
    <Layout>
      <SEO title={page} />

      <SliceZone
        body={body}
        page={page}
      />

      <div className="container">

          <EventWrapper>
            {events.map((event,index) => (

                <EventFields key={index}>

                  <EventFieldHeader>
                    <DateWrapper>
                      <img src={CalendarIcon} alt="date"/>
                      {event.node.event_date}
                    </DateWrapper>
                    <EventLocation>{event.node.event_location}</EventLocation>
                  </EventFieldHeader>

                  <div>{event.node.event_name}</div>
                  <RichText render={event.node.event_description} />
                </EventFields>

            )) }
          </EventWrapper>


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
                  background_image
                }
              }
            }
          }
        }
      }
      allEvents(sortBy: event_date_DESC) {
        edges {
          node {
            event_date
            event_description
            event_location
            event_name
          }
        }
      }
    }
  }
`;

export default EventPage;

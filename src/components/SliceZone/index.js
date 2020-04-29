import React from "react";
import Hero from "../Hero";

const SliceZone = ({ body, page }) => {
  return (
    <div>
      {body.map((bodyContent, index) => {
        if (bodyContent.type === "hero") {
          return (
            <Hero
              key={index}
              title={bodyContent.primary.hero_title}
              content={bodyContent.primary.hero_content}
              backgroundImage={bodyContent.primary.background_image.url}
              theme={page !== "home" ? { height: "250px" } : null}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

export default SliceZone;

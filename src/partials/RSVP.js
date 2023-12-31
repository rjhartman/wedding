import * as React from "react";
import Section from "../components/Section";
import tw from "twin.macro";

const Div = tw.div`w-full`;

const RSVP = () => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    // React uses Web APIs to create DOM elements that
    // do not execute script tags. Manually create a script tag.
    if (ref.current) {
      const script = document.createElement("script");
      script.setAttribute("src", "https://alyssaandryan2024.rsvpify.com/embed");
      script.setAttribute("type", "text/javascript");
      ref.current.appendChild(script);
    }
  }, []);
  return (
    <Section title="RSVP" noPadding id="rsvp">
      <Div ref={ref}></Div>
    </Section>
  );
};

export default RSVP;

import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="136" r="125" />
    <rect x="0" y="285" rx="15" ry="15" width="280" height="32" />
    <rect x="0" y="335" rx="15" ry="15" width="280" height="88" />
    <rect x="0" y="436" rx="15" ry="15" width="92" height="30" />
    <rect x="126" y="429" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;

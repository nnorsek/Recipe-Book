import React from "react";

const ImageLink = ({ href, src, alt }) => (
  <a href={href}>
    <img src={src} alt={alt} />
  </a>
);

export default ImageLink;

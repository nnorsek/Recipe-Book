import React from "react";
import styles from "./ImageLink.module.css";

const ImageLink = ({ href, src, alt }) => (
  <a href={href} className={styles.imageHeader}>
    <img src={src} alt={alt} className={styles.image} />
  </a>
);

export default ImageLink;

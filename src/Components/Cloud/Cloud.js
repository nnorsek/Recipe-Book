import React from "react";
import styles from "./Cloud.module.css";

const Cloud = () => {
  return (
    <div className={styles.container}>
      {/* Cloud 1 */}
      <div className={styles.cloudSmall}>
        <div className={styles.base}>
          <div className={styles.fluffOne}></div>
          <div className={styles.fluffTwo}></div>
          <div className={styles.fluffThree}></div>
        </div>
      </div>

      {/* Cloud 2 */}
      <div className={styles.cloudMedium}>
        <div className={styles.base}>
          <div className={styles.fluffFour}></div>
          <div className={styles.fluffFive}></div>
          <div className={styles.fluffSix}></div>
          <div className={styles.fluffSeven}></div>
        </div>
      </div>

      {/* Cloud 3 */}
      <div className={styles.cloudLarge}>
        <div className={styles.base}>
          <div className={styles.fluffEight}></div>
          <div className={styles.fluffNine}></div>
          <div className={styles.fluffTen}></div>
          <div className={styles.fluffEleven}></div>
          <div className={styles.fluffTwelve}></div>
        </div>
      </div>

      {/* Cloud 4 (Farther in the background) */}
      <div className={styles.cloudExtraSmall}>
        <div className={styles.base}>
          <div className={styles.fluffThirteen}></div>
          <div className={styles.fluffFourteen}></div>
        </div>
      </div>

      {/* Cloud 5 */}
      <div className={styles.cloudWide}>
        <div className={styles.base}>
          <div className={styles.fluffFifteen}></div>
          <div className={styles.fluffSixteen}></div>
          <div className={styles.fluffSeventeen}></div>
        </div>
      </div>
    </div>
  );
};

export default Cloud;

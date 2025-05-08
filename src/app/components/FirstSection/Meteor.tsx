import React from "react";
import styles from "./Meteor.module.scss";

interface MeteorProps {
  count?: number; // 유성 개수 (기본값: 4)
}

const Meteor: React.FC<MeteorProps> = ({ count = 4 }) => {
  return (
    <div className={styles.meteorContainer}>
      {/* count prop으로 유성 개수 조절 가능 */}
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={styles.star} />
      ))}
    </div>
  );
};

export default Meteor;

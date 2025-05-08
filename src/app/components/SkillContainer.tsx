import styles from "@/app/components/SkillContainer.module.scss";
import { Icon } from "@/app/components/Icons";
const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "jQuery",
  "React",
  "Next.js",
  "TypeScript",
  "Styled-components",
  "SCSS",
  "Tailwind",
  "React-query",
  "Redux",
  "Zustand",
  "Vercel",
];
export default function SkillContainer() {
  const skillsList = [...SKILLS, ...SKILLS];
  return (
    <>
      <p className={styles.skillTitle}>Skill</p>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsContainerInner}>
          {skillsList.map((skill, i) => (
            <div key={i} className={styles.skillsContainerItem}>
              <div className={styles.skillsCircle}>
                <Icon name={skill} className={styles.skillsIcon} />
              </div>
              <p className={styles.skillsCircleText}>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

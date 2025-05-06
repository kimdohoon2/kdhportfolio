import Link from "next/link";
import styles from "@/app/components/Header/NavItem.module.scss";

interface NavItemProps {
  item: string;
  onNavItemClick?: () => void;
}

export default function NavItem({ item, onNavItemClick }: NavItemProps) {
  const handleClick = () => {
    if (onNavItemClick) {
      onNavItemClick();
    }
  };

  return (
    <li className={styles.navItemContainer}>
      <div className={styles.svgWrapper}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <rect className={styles.shape} />
        </svg>
        <Link
          className={styles.navLink}
          href={`#${item.toLowerCase()}`}
          onClick={handleClick}
        >
          {item}
        </Link>
      </div>
    </li>
  );
}

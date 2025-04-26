"use client";

import styles from "@/app/components/Header/NavTrigger.module.scss";

interface NavTriggerProps {
  isActive: boolean;
  onClick: () => void;
}

export default function NavTrigger({ isActive, onClick }: NavTriggerProps) {
  return (
    <button
      id="navTrigger"
      className={`${styles.navTrigger} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

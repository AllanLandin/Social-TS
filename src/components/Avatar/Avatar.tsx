import styles from "./Avatar.module.css";
import { IAvatar } from "../../utils/types";

export function Avatar({ hasBorder = true, ...props }: IAvatar) {
  return (
    <img
      {...props}
      className={
        hasBorder ? styles.avatarWithBorder : styles.avatarWithoutBorder
      }
    />
  );
}

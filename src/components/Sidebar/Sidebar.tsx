import styles from "./Sidebar.module.css";

import perfilBackground from "../../assets/perfil-background.jpg";
import perfilPhoto from "../../assets/perfil-photo.jpg";
import { PencilSimpleLine } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";

export function Sidebar() {
  return (
    <aside className={styles.aside}>
      <img src={perfilBackground} className={styles.cover} />

      <div className={styles.profile}>
        <Avatar src={perfilPhoto} />
        <div className={styles.userInfo}>
          <strong>Allan Landin</strong>
          <small>FrontEnd Developer</small>
        </div>
      </div>

      <footer className={styles.footer}>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}

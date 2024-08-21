import styles from "./CommentCard.module.css";
import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import { IComment } from "../../utils/types";

interface ICommentCardProps {
  comData: IComment;
  handleCommentDelete: (id: number) => void;
}

export function CommentCard({
  comData,
  handleCommentDelete,
}: ICommentCardProps) {
  const [likes, setLikes] = useState(comData.likes || 0);

  function handleLikes() {
    setLikes(likes + 1);
  }

  function onCommentDelete() {
    handleCommentDelete(comData.id);
  }

  return (
    <div className={styles.cardContainer}>
      <Avatar src={comData.avatar} hasBorder={false} />

      <div>
        <div className={styles.messageContainer}>
          <div className={styles.userAndTime}>
            <div className={styles.userInfoWrapper}>
              <strong>{comData.username}</strong>
              <small>Cerca de 2h</small>
            </div>
            <button>
              <Trash onClick={onCommentDelete} />
            </button>
          </div>
          <p>{comData.comment}</p>
        </div>

        <div className={styles.likeContainer} onClick={handleLikes}>
          <ThumbsUp size={20} />
          <p>Aplaudir</p>
          <span>{likes}</span>
        </div>
      </div>
    </div>
  );
}

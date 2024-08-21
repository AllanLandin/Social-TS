import styles from "./Post.module.css";
import { formatPublishAt } from "../../utils/formatPublishAt";
import { CommentCard } from "../CommentCard/CommentCard";
import { Avatar } from "../Avatar/Avatar";
import { ChangeEvent, FormEvent, useState } from "react";
import { Comment } from "../../api/post";
import perfilPhoto from "../../assets/perfil-photo.jpg";
import { IPost } from "../../utils/types";
import { InvalidEvent } from "react";

interface IPostProps {
  postData: IPost;
}

export function Post({ postData }: IPostProps) {
  const [newCommentText, setNewCommentText] = useState("");
  const [comments, setComments] = useState(postData.comments);

  async function handleNewComment(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    const newCommentObj = new Comment({
      avatar: perfilPhoto,
      username: "Allan Landin",
      commentedAt: Date.now(),
      comment: newCommentText,
      likes: 0,
    });

    setComments([...comments, newCommentObj]);
  }

  function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity("Preencha esse campo para continuar!");
  }

  function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(e.target.value);
  }

  function handleCommentDelete(commentID: number) {
    setComments(comments.filter((comment) => comment.id !== commentID));
  }

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.userInfoWrapper}>
          <Avatar src={postData.avatar} />
          <div>
            <strong>{postData.username}</strong>
            <small>{postData.userDescription}</small>
          </div>
        </div>
        <span>{formatPublishAt(postData.publishAt)}</span>
      </header>
      <section className={styles.message}>
        <p>{postData.postMessage}</p>
        <a href={postData.linkMessage.link}>{postData.linkMessage.text}</a>
        <div>
          {postData.tags.map((tag, index) => (
            <a key={index} href={tag.link}>
              {tag.text}
            </a>
          ))}
        </div>
      </section>
      <form className={styles.footer}>
        <strong>Deixe o seu feedback</strong>
        <textarea
          placeholder="Escreva um comentário..."
          value={newCommentText}
          onChange={handleNewCommentChange}
          required
          onInvalid={handleNewCommentInvalid}
        ></textarea>
        <footer>
          <button
            type="submit"
            onClick={handleNewComment}
            disabled={newCommentText.length === 0}
          >
            Publicar
          </button>
        </footer>
      </form>

      {comments.length > 0 && (
        <section className={styles.commentsContainer}>
          {comments.map((comData) => (
            <CommentCard
              key={comData.id}
              comData={comData}
              handleCommentDelete={handleCommentDelete}
            />
          ))}
        </section>
      )}
    </article>
  );
}

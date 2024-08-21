import perfilPhoto from "../assets/perfil-photo.jpg";
import { IComment, IPost } from "../utils/types";

interface ICommentProps {
  avatar: string;
  username: string;
  commentedAt: number;
  comment: string;
  likes: number;
}

export class Comment {
  static idCounter: number = 0;
  avatar: string;
  username: string;
  commentedAt: number;
  comment: string;
  likes: number;
  id: number;
  constructor({
    avatar,
    username,
    commentedAt,
    comment,
    likes,
  }: ICommentProps) {
    this.id = Comment.idCounter;
    this.avatar = avatar;
    this.username = username;
    this.commentedAt = commentedAt;
    this.comment = comment;
    this.likes = likes;
    Comment.idCounter++;
  }
}

export let postList: IPost[] = [
  {
    id: 1,
    avatar: "https://github.com/filipedeschamps.png",
    username: "Allan Estevam Landin",
    userDescription: "Software developer",
    postMessage: `Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`,
    linkMessage: { text: "jane.design/doctorcare", link: "#" },
    tags: [
      { text: "#novoprojeto", link: "#" },
      { text: "#nlw", link: "#" },
      { text: "#rocketseat", link: "#" },
    ],
    publishAt: 1723313233000,
    comments: [],
  },
  {
    id: 2,
    avatar: "https://avatars.githubusercontent.com/u/1024025?v=4.png",
    username: "Leonardo Gonçalves",
    userDescription: "Software developer",
    postMessage: `Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`,
    linkMessage: { text: "jane.design/doctorcare", link: "#" },
    tags: [
      { text: "#novoprojeto", link: "#" },
      { text: "#nlw", link: "#" },
      { text: "#rocketseat", link: "#" },
    ],
    publishAt: 1723313233000,
    comments: [
      new Comment({
        avatar: perfilPhoto,
        username: "Allan Estevam Landin",
        commentedAt: 1723313233000,
        comment: "Muito bom Devon, Parabéns!",
        likes: 3,
      }),
      new Comment({
        avatar: perfilPhoto,
        username: "Jenny Wilson",
        commentedAt: 1723313233000,
        comment: "Adorei seu portfólio!",
        likes: 3,
      }),
    ],
  },
];

export function addComment(postID: number, comment: IComment) {
  for (let i = 0; i < postList.length; i++) {
    if (postList[i].id === postID) {
      postList[i].comments.push(comment);
    }
  }
}

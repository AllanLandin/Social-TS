import { ImgHTMLAttributes } from "react";

export interface IComment {
  id: number;
  avatar: string;
  username: string;
  commentedAt: number;
  comment: string;
  likes: number;
}

interface IPostLinkMessage {
  text: string;
  link: string;
}

interface IPostTags {
  text: string;
  link: string;
}

export interface IPost {
  id: number;
  avatar: string;
  username: string;
  userDescription: string;
  postMessage: string;
  linkMessage: IPostLinkMessage;
  tags: IPostTags[];
  publishAt: number;
  comments: IComment[];
}

export interface IAvatar extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  src: string;
}

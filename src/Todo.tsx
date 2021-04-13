import { TodoType } from "./types/todo";
import { FC, VFC } from "react";

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザ:${userId})`}</p>;
};

import React, { FC } from "react";
import { IUser } from "../type/user";

const ItemUser: FC<IUser> = ({ nickname, date, message }) => {
  return (
    <div className="message">
      <p className="message__date">
        {date.getDate()}.{date.getMonth()}.{date.getFullYear()}
      </p>
      <p className="message__name">{nickname}</p>
      <p className="message__ms">{message}</p>
    </div>
  );
};

export default ItemUser;

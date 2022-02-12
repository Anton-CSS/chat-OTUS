import React, { FC } from "react";
import { useTypedSelector } from "../hook/useSelectedType";
import ItemUser from "./ItemUser";

const Main: FC = () => {
  const { users } = useTypedSelector((state) => state.user);
  const friends: Set<string> = new Set();
  users.forEach((user) => {
    if (user.nickname) {
      friends.add(user.nickname);
    }
  });
  const friendsArray = Array.from(friends);

  return (
    <main className="main">
      <div className="main__bar">
        <h2>Friends</h2>
        {friendsArray.map((name, index) => (
          <div className="friend" key={index}>
            <img src="./images/face.webp" alt="photo" className="friend__img" />
            <div className="friend__wrap">
              <span>{name}</span>
              <span>Front-end developer</span>
            </div>
          </div>
        ))}
      </div>
      <div className="main__chat">
        <h2>Your chatty</h2>
        {users.map((user, index) => (
          <ItemUser
            date={user.date}
            message={user.message}
            nickname={user.nickname}
            key={index}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;

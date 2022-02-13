import React, { FC, useState } from "react";
import { sendMessage } from "../connection/connection";
import { useActions } from "../hook/useActions";

const Footer: FC = () => {
  const { fetchUsers } = useActions();
  const [value, setValue] = useState("");
  const btnClickHandler = () => {
    const data = {
      date: new Date(),
      nickname: "Anton",
      message: value,
    };
    if (data.message) {
      sendMessage(data);
      fetchUsers();
    }
  };
  return (
    <footer className="footer">
      <div
        className="footer__smile"
        onClick={() => setValue(value + ":)")}
      ></div>
      <div className="footer__wrap">
        <input
          type="text"
          className="footer__input"
          placeholder="Type Your message here"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
        <button onClick={btnClickHandler} className="footer__btn">
          send
        </button>
      </div>
    </footer>
  );
};

export default Footer;

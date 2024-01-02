import { FC } from "react";
import { ChatBoxProps } from "../types/types";
import styles from "../styles/ChatBox.module.css";

const ChatBox: FC<ChatBoxProps> = ({ text, role }) => {
  return (
    <div className={`${styles.ChatBox} ${styles[`${role}`]}`}>
      <pre>{text}</pre>
    </div>
  );
};

export default ChatBox;

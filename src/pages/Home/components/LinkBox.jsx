import { useState } from "react";
import style from "../styles/LinkBox.module.css";

export default function LinkBox({ data }) {
  const [copyStatus, setCopyStatus] = useState(false);

  function handleCopy() {
    navigator.clipboard
      .writeText(data.shortUrl)
      .then(() => {})
      .finally(() => {
        setCopyStatus(true);
      });
  }

  return (
    <li className={style.listItem}>
      <h1>{data.url}</h1>

      <p>{data.shortUrl}</p>
      <button
        onClick={handleCopy}
        className={copyStatus ? `${style.copiedBtn}` : `${style.copyBtn}`}
      >
        {copyStatus ? "✅ Copied" : "Copy"}
      </button>
    </li>
  );
}

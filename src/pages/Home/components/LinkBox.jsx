import { useState } from "react";
import style from "../styles/LinkBox.module.css";
import { FaLink } from "react-icons/fa6";

export default function LinkBox({ data }) {
  const [copyStatus, setCopyStatus] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(data.shortUrl).finally(() => {
      setCopyStatus(true);
      setTimeout(() => {
        setCopyStatus(false);
      }, 1000);
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
        {copyStatus ? (
          "✅ Copied"
        ) : (
          <div className={style.copyIcon}>
            <FaLink />
            Copy
          </div>
        )}
      </button>
    </li>
  );
}

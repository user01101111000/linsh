import style from "../styles/LinkGenerator.module.css";
import LinkBox from "./LinkBox";
import linkShortener from "../../../services/api/linkShortenerApi";
import { useState } from "react";
import Loading from "../../../components/Loading/Loading";

export default function LinkGenerator() {
  const [urlInput, setUrlInput] = useState("");
  const [urlArr, setUrlArr] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();

    const shortUrl = await linkShortener(urlInput);

    setUrlInput("");
    setLoading(false);

    if (shortUrl)
      setUrlArr([...urlArr, { url: urlInput, shortUrl: shortUrl.data }]);
    else alert("Invalid url");
  }

  const liBoxes = urlArr.map((x, i) => <LinkBox key={i} data={x} />);

  return (
    <section className={style.linkMain} id="linkGen">
      <article className={style.urlInputArea}>
        <form className={style.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Shorten a link here..."
            required={true}
            className={style.inp}
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
          />
          <input type="submit" value="Shorten it!" className={style.subBtn} />
        </form>
      </article>

      <article className={style.results}>
        <ul className={style.resultList}>
          {<>{loading ? <Loading /> : <>{liBoxes}</>}</>}
        </ul>
      </article>
    </section>
  );
}

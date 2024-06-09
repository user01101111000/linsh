import style from "../styles/NotFound.module.css";
import notFound from "../../../assets/images/notFound.jpg";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className={style.nF}>
      <img src={notFound} alt="error" className={style.nFimg} />
      <Link to="/">Go Home Page</Link>
    </section>
  );
}

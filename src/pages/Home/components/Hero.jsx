import style from "../styles/Hero.module.css";
import heroImg from "../../../assets/images/illustration-working.svg";
export default function Hero() {
  return (
    <section className={style.hero}>
      <article className={style.heroText}>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>Get Started</button>
      </article>

      <img src={heroImg} alt="heroImg" className={style.heroImg} />
    </section>
  );
}

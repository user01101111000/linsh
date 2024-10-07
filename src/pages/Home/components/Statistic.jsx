import style from "../styles/Statistic.module.css";
import icon1 from "../../../assets/images/icon-brand-recognition.svg";
import icon2 from "../../../assets/images/icon-detailed-records.svg";
import icon3 from "../../../assets/images/icon-fully-customizable.svg";

export default function Statistic() {
  return (
    <section id="statistic" className={style.statistic}>
      <article className={style.statisticText}>
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with <br /> our
          advanced statistics dashboard.
        </p>
      </article>
      <article className={style.statisticBoxes}>
        <div className={style.statisticBox}>
          <figure className={style.fig}>
            <img src={icon1} alt="" />
          </figure>
          <h1>Brand Recognition</h1>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div className={style.statisticBox}>
          <figure className={style.fig}>
            <img src={icon2} alt="" />
          </figure>
          <h1>Detailed Records</h1>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        <div className={style.statisticBox}>
          <figure className={style.fig}>
            <img src={icon3} alt="" />
          </figure>
          <h1>Fully Customizable</h1>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </article>
    </section>
  );
}

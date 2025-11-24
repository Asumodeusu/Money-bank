import { settingContent } from "../../../data/SettingData/SettingContent";
import style from "./Setting.module.css";

export const Setting = () => {
  return (
    <div className="page-container">
      <main className={style.settingContent}>
        <img src="./svg/Avatar.svg" alt="avatar" className={style.settingImg} />
        <strong className={style.imgName}>Push Puttichai</strong>
        <section className={style.contentUP}>
          {settingContent.map((item) => (
            <button key={item.id} className={style.buttonContent}>
              <strong className={style.buttonTitle}>{item.label}</strong>
              <img src={item.icon} className={style.buttonImg} alt={item.id} />
            </button>
          ))}
          <div className={style.buttonRow}>
            <strong className={style.buttonTitle}>Customer care</strong>
            <p className={style.buttonText}>77777186</p>
          </div>
        </section>
      </main>
    </div>
  );
};

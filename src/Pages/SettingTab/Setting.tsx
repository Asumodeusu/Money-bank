import style from "./Setting.module.css";
import { useHeaderPreset } from "../../hooks";
import { settingContent } from "../../data/SettingContent";
import { useItemNavigation } from "../../hooks/useItemNavigation";

const Setting = () => {
  const { navigateToItem } = useItemNavigation();
  useHeaderPreset("settings");

  return (
    <div className="page-container">
      <main className={style.settingContent}>
        <img
          src="./svg/profile.svg"
          alt="avatar"
          className={style.settingImg}
        />
        <strong className={style.imgName}>Настройки</strong>
        <section className={style.contentUP}>
          {settingContent.map((item) => (
            <button
              key={item.id}
              className={style.buttonContent}
              onClick={() => navigateToItem(item)}
            >
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

export default Setting;

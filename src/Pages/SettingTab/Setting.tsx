import { settingContent } from "../../data/SettingData/SettingContent";
import { useNavigate } from "react-router-dom";
import style from "./Setting.module.css";
import { DataContent } from "../../types/types";
import { useHeaderPreset } from "../../hooks";

export const Setting = () => {
  const navigate = useNavigate();
  useHeaderPreset("settings")

  const handlePathClick = (item: DataContent) => {
    if (item.path) {
    navigate(item.path)
    }
  }

  return (
    <div className="page-container">
      <main className={style.settingContent}>
        <img src="./svg/Avatar.svg" alt="avatar" className={style.settingImg} />
        <strong className={style.imgName}>Настройки</strong>
        <section className={style.contentUP}>
          {settingContent.map((item) => (
            <button key={item.id} className={style.buttonContent} onClick={() => handlePathClick(item)}>
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

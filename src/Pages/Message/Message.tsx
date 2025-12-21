import style from "./Message.module.css";
import { useItemNavigation } from "../../hooks/useItemNavigation";
import { massageContent } from "../../data/MessageContent";

const Message = () => {
  const { navigateToItem } = useItemNavigation();

  return (
    <div className="page-container">
      <main className={style.massageContent}>
        {massageContent.map((item) => (
          <button
            key={item.id}
            className={style.buttonContent}
            onClick={() => navigateToItem(item)}
          >
            {/* Левая часть */}
            <div className={style.buttonLeft}>
              <img src={item.icon} className={style.buttonImg} alt={item.id} />
              <div className={style.textContent}>
                <strong className={style.buttonTitle}>{item.label}</strong>
                <span className={style.buttonText}>{item.text}</span>
              </div>
            </div>
            {/* Правая часть */}
            <span className={style.buttonCount}>{item.count}</span>
          </button>
        ))}
      </main>
    </div>
  );
};

export default Message;

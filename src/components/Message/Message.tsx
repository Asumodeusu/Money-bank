import { Header } from "../HeaderBack/HeaderBack";
import { Footer } from "../FooterTab/FooterTab";
import { massageContent } from "../../data/MessageData/MessageContent";
import style from './Message.module.css';


export const Message = () => {
  return (
    <>
    <Header />
    <main className={style.massageContent}>
      {massageContent.map(item => (
        <button key={item.id} className={style.buttonContent}>
          {/* Левая часть */}
          <div className={style.buttonLeft}>
            <img src={item.icon} className={style.buttonImg} alt={item.id}/>
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
    <Footer />
    </>
  )
}
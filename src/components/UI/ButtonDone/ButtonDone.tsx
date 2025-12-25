import style from "./ButtonDone.module.css";

interface ButtonDoneProps {
  onClick?: () => void; // Логика при клике
  buttonOff?: boolean; // Активна/неактивна
  type?: "button" | "submit" | "reset";
  children: React.ReactNode; // Текст кнопки ("Перевод", "Войти" и т.д.)
}

export const ButtonDone: React.FC<ButtonDoneProps> = ({
  onClick, // Функция обработки клика (может быть undefined)
  buttonOff = false, // По умолчанию кнопка активна
  type = "submit", // По умолчанию кнопка типа "submit" (отправляет форму)
  children, // Обязательный пропс - содержимое кнопки
}) => {
  return (
    <button
      className={`${style.buttonDone} ${buttonOff ? style.buttonOff : ""}`}
      type={type}
      onClick={onClick}
      disabled={buttonOff} //  (блокирует взаимодействие)
    >
      {children}
    </button>
  );
};

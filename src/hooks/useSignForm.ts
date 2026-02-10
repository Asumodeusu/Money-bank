import { useState } from "react";

interface FormFields {
  user: string;
  number: string;
  password: string;
  checkbox: boolean;
}

// тип форм
type FormType = "sign" | "signin";

export const useSignForm = (formType: FormType = "sign") => {
  // Создаем состояние для хранения значений всех полей формы
  const [fields, setFields] = useState<FormFields>({
    user: "",
    number: "",
    password: "",
    checkbox: false,
  });

  // Функция проверки, что поле не пустое
  const isFieldFilled = (value: string) => value.trim() !== "";
  // value.trim() - удаляет пробелы в начале и конце строки
  // !== '' - проверяет, что после удаления пробелов строка не пустая

  // Функция для обновления значения конкретного поля
  const updateField = (field: keyof FormFields, value: string | boolean) => {
    setFields((prev) => {
      // Ограничиваем имя до 8 символов
      if (field === "user" && typeof value === "string" && value.length > 8) {
        return prev;
      }

      if (field === "number" && typeof value === "string" && value.length > 11) {
        return prev;
      }

      return { ...prev, [field]: value };
    });
  };

  // функция отправки с сохранением в localStorage
  const submitForm = () => {
    if (isSubmitActive) {
      // Сохраняем имя в localStorage
      localStorage.setItem("userName", fields.user);
      return true;
    }
    return false;
  };

  // Проверяем, должна ли кнопка отправки быть активной и для какой формы
  const isSubmitActive =
    formType === "sign"
      ? // для регистрации
        isFieldFilled(fields.user) &&
        isFieldFilled(fields.number) &&
        isFieldFilled(fields.password) &&
        fields.checkbox
      : // для входа
        isFieldFilled(fields.user) && isFieldFilled(fields.password);

  // Возвращаем объект с данными и функциями для использования в компоненте
  return {
    fields, // Текущие значения всех полей формы
    updateField, // Функция для обновления полей
    isSubmitActive, // Флаг активности кнопки отправки
    submitForm, // передача имени
  };
};

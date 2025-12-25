import { DataContent } from "../types/types";
import i18n from "../i18n/i18n";

export const massageContent: DataContent[] = [
  {
    id: "bank",
    icon: "/svg/message/5.svg",
    label: i18n.t('message.label_bank'),
    text: i18n.t('message.text_bank'),
    count: 1,
  },
  {
    id: "account",
    icon: "/svg/message/1.svg",
    label: i18n.t('message.label_account'),
    count: 0,
  },
  {
    id: "alert",
    icon: "/svg/message/2.svg",
    label: i18n.t('message.label_alert'),
    count: 0,
  },
  {
    id: "pay",
    icon: "/svg/message/3.svg",
    label: i18n.t('message.label_pay'),
    count: 0,
  },
  {
    id: "withdraw",
    icon: "/svg/message/4.svg",
    label: i18n.t('message.label_withdraw'),
    count: 0,
  },
];

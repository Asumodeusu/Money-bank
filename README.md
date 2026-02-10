# React + Vite

- Ссылка на приложение - ```money-bank-m.vercel.app``` (только для телефонов!)
- Перед запуском необходимо инициализировать проект с использованием React/Vite - npm install
- Запуск проекта осуществляется командой: `npm run dev`

# Money Bank

- Веб-приложение, разработанное на стеке:

**Frontend:**

- React 18 + TypeScript
- React Router v6 (навигация)
- Redux Toolkit (управление состоянием)
- React-i18next
- @types/yandex-maps (для работы с YMaps)
- CSS Modules (стилизация)
- Vite (сборка проекта)

**Интеграции:**

- Яндекс.Карты API
- API Центробанка РФ (курсы валют)

- Проект представляет собой прототип мобильного банковского приложения
- Основная идея: создание виртуальной песочницы для оттачивания навыков программирования, что позволяет:

Освоить полный цикл разработки приложения

Ключевое преимущество: приложение обладает масштабируемостью, что позволяет легко вносить изменения, добавлять улучшения и реализовывать различные функции, используемые в реальных веб-приложениях.

## Структура приложения

### Public

- Директория для статических ресурсов: изображения, иконки, favicon

### App

- Основной компонент приложения с импортом маршрутизации из `AppRoute`
- Содержит навигационную логику всего приложения

### Components

#### Map

- Компонент для интеграции Яндекс.Карт с реализованной логикой подключения

#### UI

- Переиспользуемые UI-компоненты: **Header** и **Footer**
- Каждый компонент содержит собственную бизнес-логику и стилизацию

### Constants

#### Layouts

- Конфигурационные константы для управления отображением Header/Footer
- Используются в `MainLayout` для рендеринга на разных страницах приложения

#### Routes

- `export const ROUTES` — централизованное хранение маршрутов приложения
- Предотвращает ошибки, связанные с опечатками в путях

### Data

- **HomeData** — контент для главной страницы
- **MessageData** — контент для сообщений
- **SearchData** — контент для карты, курса валют и покупки
- **SettingData** — контент страницы настроек
- **footerTab** — данные для нижней панели навигации
- **HeaderBack** — конфигурация заголовков страниц

### Hooks

#### useHeaderPreset

- Кастомный хук для динамического изменения стилей Header через Redux
- Управляет CSS-классами в зависимости от нахождения на страницах приложения

#### useSignForm

- Хук для управления формой регистрации/авторизации
- Реализована валидация полей, обработка данных и сохранение имени пользователя

#### useSimpleCurrency

- Хук для получения актуальных курсов валют с API ЦБ РФ
- Возвращает курсы USD, EUR, CNY с учётом банковской маржи
- Имеет резервные (fallback) данные на случай ошибок сети

### Layouts

#### MainLayout

- Основной layout-компонент, оборачивающий всё приложение
- Использует `Outlet` для рендеринга дочерних страниц
- Динамически управляет видимостью Header/Footer через `LAYOUT_CONFIG`

### Pages

- Директория содержит все страницы приложения
- Каждая страница — самостоятельный компонент с собственной логикой и стилями

### Store

#### store

- Централизованное хранилище состояния приложения (Redux)

#### hooks

- Типизированные Redux-хуки

#### headerSlice

- Слайс для управления состоянием и стилями Header
- Позволяет переиспользовать Header с разными конфигурациями

### Styles

- Глобальные CSS-стили и CSS-переменные

### Types

- `export interface DataContent` — основной интерфейс для типизации пользовательского контента
- Централизованное хранение TypeScript-интерфейсов и типов

### Utils

### main.tsx

- Точка входа в приложение
- Содержит основную логику инициализации и рендеринга

## Структура бэкенд-части приложения (в разработке)

### Архитектура репозитория

```
/src
├── App
│   ├── App.module.css
│   ├── App.tsx
│   └── AppRoute.tsx
├── Layouts
│   ├── Layout.module.css
│   └── MainLayout.tsx
├── Pages
│   ├── Home
│   │   ├── Home.module.css
│   │   └── Home.tsx
│   ├── Message
│   │   ├── Message.module.css
│   │   └── Message.tsx
│   ├── Search
│   │   ├── Currency
│   │   │   ├── Currency.module.css
│   │   │   └── Currency.tsx
│   │   ├── Exchange
│   │   │   ├── Exchange.module.css
│   │   │   └── Exchange.tsx
│   │   ├── Map
│   │   │   └── Map.tsx
│   │   ├── Search.module.css
│   │   └── Search.tsx
│   ├── SettingTab
│   │   ├── Setting.module.css
│   │   └── Setting.tsx
│   ├── Sign
│   │   ├── Sign.module.css
│   │   ├── Sign.tsx
│   │   └── SignIn.tsx
│   ├── WelcomeScreen
│   │   ├── Welcome.module.css
│   │   └── Welcome.tsx
│   └── index.ts
├── assets
│   ├── fonts
│   │   ├── IBMPlexMono-Regular.woff
│   │   ├── Inter-Variable.woff2
│   │   └── fonts.css
│   └── styles
│       ├── global.css
│       ├── theme
│       │   ├── dark.css
│       │   └── light.css
│       └── variables.css
├── components
│   ├── Map
│   │   └── Map.tsx
│   └── UI
│       ├── ButtonCurrency
│       │   ├── ButtonCurrency.module.css
│       │   ├── ButtonCurrency.tsx
│       │   ├── ButtonDownCurrency.tsx
│       │   └── ButtonUpCurrency.tsx
│       ├── ButtonDone
│       │   ├── ButtonDone.module.css
│       │   └── ButtonDone.tsx
│       ├── FooterTab
│       │   ├── FooterTab.module.css
│       │   └── FooterTab.tsx
│       └── HeaderBack
│           ├── HeaderBack.module.css
│           └── HeaderBack.tsx
├── constants
│   ├── currency.ts
│   ├── layouts.ts
│   ├── lazyApp.ts
│   └── routes.ts
├── context
│   ├── BalanceContext.tsx
│   ├── BalanceProvider.tsx
│   └── balanceReducer.ts
├── data
│   ├── HeaderBack.ts
│   ├── HomeContent.ts
│   ├── MessageContent.ts
│   ├── SearchContent.ts
│   ├── SettingContent.ts
│   └── footerTab.ts
├── hooks
│   ├── index.ts
│   ├── useBalance.ts
│   ├── useHeaderPreset.ts
│   ├── useHomeNavigation.ts
│   ├── useItemNavigation.ts
│   ├── useLang.ts
│   ├── useSignForm.ts
│   ├── useSimpleCurrency.ts
│   └── useTheme.ts
├── i18n
│   ├── i18n.ts
│   └── lang
│       ├── en
│       │   └── translation.json
│       └── ru
│           └── translation.json
├── main.tsx
├── store
│   ├── hooks.ts
│   ├── slices
│   │   └── headerSlice.ts
│   └── store.ts
├── types
│   ├── balance.ts
│   └── types.ts
└── vite-env.d.ts
```

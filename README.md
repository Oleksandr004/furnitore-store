# 🛋️ Furniture Store - E-commerce Platform

Современное веб-приложение мебельного магазина, построенное на React и Next.js с полной функциональностью e-commerce.

## 📋 Описание

**Furniture Store** - это полнофункциональный проект интернет-магазина мебели с поддержкой:

- Просмотра каталога товаров с фильтрацией и сортировкой
- Корзины покупок с управлением товарами
- Аутентификации пользователей (регистрация/вход)
- Оформления заказов с данными доставки
- Профиля пользователя и истории заказов
- Страницы контактов
- Блога с новостями
- Отзывчивого дизайна (mobile-first)

## 🚀 Технологический стек

### Frontend

- **React** 18.3.1 - UI библиотека
- **Next.js** 15.3.1 - React фреймворк с SSR/SSG
- **Redux Toolkit** 2.3.0 - управление глобальным состоянием
- **React Hook Form** 7.53.2 - управление формами
- **Framer Motion** 12.0.6 - плавные анимации

### Стили

- **Tailwind CSS** 3.4.1 - утилити-первый CSS фреймворк
- **SCSS/SASS** 1.86.3 - модульные стили с препроцессором
- **CSS Modules** - изолированные стили компонентов

### Backend & База данных

- **MongoDB** 6.11.0 - база данных NoSQL
- **Mongoose** 8.8.0 - ODM для MongoDB
- **Next.js API Routes** - серверные функции

### Безопасность

- **bcrypt** 5.1.1 - хеширование паролей
- **jsonwebtoken** 9.0.2 - JWT токены для аутентификации
- **dotenv** 16.4.5 - управление переменными окружения

## 🎯 Основные функции

- 🔐 **Аутентификация** - Регистрация и вход с хешированием паролей
- 🛒 **Корзина** - Добавление/удаление товаров с сохранением в Redux
- 🔄 **Сортировка** - По цене (возрастание/убывание), популярности
- 📦 **Оформление заказа** - Форма доставки и информация об оплате
- 📱 **Адаптивный дизайн** - Полная поддержка мобильных устройств
- 📊 **Каталог товаров** - Пагинация и детальные описания
- ✨ **Анимации** - Плавные переходы с Framer Motion
- 👤 **Профиль пользователя** - Управление аккаунтом и заказами
- 📧 **Контакты** - Форма обратной связи
- 📰 **Блог** - Новости и статьи о мебели

## 📁 Структура проекта

```
src/
├── app/                      # Next.js App Router
│   ├── page.js              # Главная страница
│   ├── layout.js            # Корневой layout
│   ├── api/                 # API маршруты
│   │   ├── login/           # Аутентификация
│   │   ├── register/        # Регистрация
│   │   └── products/        # Товары
│   ├── auth/                # Страницы аутентификации
│   ├── cart/                # Корзина покупок
│   ├── checkout/            # Оформление заказа
│   ├── contact/             # Контакты
│   ├── profile/             # Профиль пользователя
│   └── shop/                # Каталог магазина
├── components/              # Переиспользуемые компоненты
├── models/                  # Mongoose модели
├── store/                   # Redux store и слайсы
├── lib/                     # Утилиты и функции
└── styles/                  # Глобальные стили
```

## 💻 Установка и запуск

### Требования

- Node.js 16+
- npm или yarn
- MongoDB (Atlas или локально)

### Шаги

1. **Клонируйте репозиторий**

   ```bash
   git clone <repository-url>
   cd furniture-store
   ```

2. **Установите зависимости**

   ```bash
   npm install
   ```

3. **Создайте `.env.local`**

   ```bash
   MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<database>
   JWT_SECRET=your_secret_key
   BCRYPT_SALT_ROUNDS=10
   ```

4. **Запустите разработку**

   ```bash
   npm run dev
   ```

5. **Откройте в браузере**
   ```
   http://localhost:3000
   ```

## 📝 Доступные команды

```bash
npm run dev      # Разработка с hot-reload
npm run build    # Сборка для production
npm start        # Запуск production-сервера
npm run lint     # Проверка кода
```

## 🔌 API Endpoints

### Аутентификация

- `POST /api/login` - Вход пользователя
- `POST /api/register` - Регистрация пользователя

### Товары

- `GET /api/products` - Получить все товары
- `GET /api/products/[id]` - Получить товар по ID

## 🌐 Демо

Проект развернут на: [furnitore-store.vercel.app](https://furnitore-store-476y21123.vercel.app/)

## 📚 Документация

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Mongoose Guide](https://mongoosejs.com)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [Tailwind CSS](https://tailwindcss.com)

## 🤝 Contributing

Приветствуются контрибьюции!

1. Форкните репозиторий
2. Создайте ветку (`git checkout -b feature/Feature`)
3. Коммитьте (`git commit -m 'Add Feature'`)
4. Пушьте (`git push origin feature/Feature`)
5. Откройте Pull Request

## 📄 Лицензия

MIT License - смотрите LICENSE файл

## 📞 Контакты

- 📧 Email: support@furniturestore.com
- 🌐 Website: www.furniturestore.com

---

**Made with ❤️ by Furniture Store Team**

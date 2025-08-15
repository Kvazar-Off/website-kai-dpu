# Руководство разработчика

## Стек
- Статические страницы (HTML/CSS/JS), без серверной логики
- Данные вынесены в `content/*.json`
- Деплой через Nginx в Docker

## Локальный запуск без Docker
Откройте `site/index.html` в браузере. Для корректной загрузки partials/JSON лучше поднять простой http‑сервер:
```bash
python3 -m http.server --directory site 9000
# затем откройте http://localhost:9000
```

## Структура
- `site/` — страницы, стили, скрипты, изображения
- `partials/` — общий header/footer
- `content/` — JSON‑данные
- `docs/` — документация
- `Dockerfile` — сборка контейнера

## Доработки
- Добавить поиск по сайту (Lunr.js)
- Добавить Schema.org (Organization/NewsArticle)
- Включить метрику (Яндекс.Метрика/GA4) — вставьте код в `partials/footer.html`
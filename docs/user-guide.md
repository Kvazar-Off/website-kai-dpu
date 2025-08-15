# Руководство редактора (контент-менеджера)

## Где менять контент
- Новости: `content/news.json`
- Сотрудники: `content/staff.json`
- Партнёры: `content/partners.json` (логотипы лежат в `site/assets/img/logos/`)

## Форматы
### news.json
```json
[{
  "title": "Заголовок",
  "date": "YYYY-MM-DD",
  "summary": "Краткое описание",
  "source": "Источник",
  "url": "https://...",
  "image": "site/assets/img/news/cover.jpg"
}]
```

### staff.json
```json
[{
  "name": "ФИО",
  "role": "должность",
  "degree": "степень (опционально)",
  "bio": "краткое био",
  "email": "user@kai.ru",
  "scholar": "https://scholar.google.com/....",
  "tags": ["тема1","тема2"]
}]
```

### partners.json
```json
[{"name":"Название","logo":"file.svg","url":"https://..."}]
```

## Как обновлять сайт
Если используете Docker‑контейнер, достаточно заменить файлы в папке `content/` и перезапустить контейнер.
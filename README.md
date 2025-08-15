# Кафедра ДПУ — статический сайт (Docker)

## Быстрый старт
```bash
docker build -t kai-dpu-site_v2 .
docker run --rm -p 8080:80 kai-dpu-site_v2
# Откройте http://localhost:8080
```

## Горячая правка контента (без пересборки)
```bash
docker run --rm -p 8080:80 -v $(pwd)/content:/usr/share/nginx/html/content kai-dpu-site_v2
```

## Структура
- `site/` — HTML/CSS/JS
- `partials/` — header/footer
- `content/` — JSON (новости, сотрудники, партнёры)
- `docs/` — руководства редактора и разработчика
```
FROM nginx:alpine
COPY site /usr/share/nginx/html
COPY partials /usr/share/nginx/html/partials
COPY content /usr/share/nginx/html/content
EXPOSE 80
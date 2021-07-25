FROM nginx:alpine

EXPOSE 80

COPY ./web_dev/* /usr/share/nginx/html/






FROM nginx
LABEL name="vue-admin"
LABEL version="1.0"
COPY ./dist /usr/share/nginx/html
COPY ./vue-admin.conf  /etc/nginx/conf.d
EXPOSE 9999
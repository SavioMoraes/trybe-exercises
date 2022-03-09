FROM nginx
COPY ./index.html /usr/share/nginx/html
EXPOSE 3001
ENV API_URL=http://localhost:8001/api/
WORKDIR /usr/share/nginx/html
RUN ls
ENTRYPOINT [ "/usr/sbin/nginx" ]
CMD [ "-g", "daemon off;" ]

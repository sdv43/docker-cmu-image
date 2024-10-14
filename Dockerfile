FROM nginx:stable

RUN apt update
RUN apt install -y curl

RUN curl -fsSL https://deb.nodesource.com/setup_22.x -o nodesource_setup.sh
RUN chmod +x ./nodesource_setup.sh
RUN ./nodesource_setup.sh
RUN apt install -y nodejs supervisor

RUN mkdir -p /var/log/supervisor
RUN mkdir -p /tmp/mnt/data_persist
RUN mkdir -p /jci/gui

COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY backend /backend

RUN cd /backend && npm install
RUN rm -rf /usr/share/nginx/html && ln -s /jci/gui /usr/share/nginx/html

EXPOSE 2800
EXPOSE 2766
EXPOSE 2700

CMD ["/usr/bin/supervisord"]

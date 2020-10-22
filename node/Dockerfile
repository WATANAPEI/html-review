FROM node:12.19
RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app
WORKDIR $HOME/node

COPY package.json $HOME/node/
# COPY client $HOME/lang-frontend/client

COPY src $HOME/node/src

EXPOSE 3000

RUN chown -R app:app $HOME/*
RUN npm install
RUN npm install http-server

CMD ["npx", "http-server", "-p", "3000"]
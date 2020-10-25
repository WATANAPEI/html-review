FROM node:12.19
RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app/
WORKDIR $HOME/cli

COPY package*.json $HOME/cli/
# COPY client $HOME/lang-frontend/client

RUN npm i --verbose

COPY . $HOME/node

RUN chown -R app:app $HOME/*

CMD ["npx", "reload"]
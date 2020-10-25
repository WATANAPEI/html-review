FROM node:12.19
RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app/
WORKDIR $HOME/node

COPY package*.json $HOME/node/
# COPY client $HOME/lang-frontend/client

RUN npm install

COPY . $HOME/node

RUN chown -R app:app $HOME/*

# CMD ["npx", "http-server", "-p", "3000"]
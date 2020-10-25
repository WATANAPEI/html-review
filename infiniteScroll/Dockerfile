FROM node:12.19
RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app/
WORKDIR $HOME/infiniteScroll

COPY package*.json $HOME/infiniteScroll/

RUN npm i --verbose

COPY . $HOME/infiniteScroll

RUN chown -R app:app $HOME/*

# CMD ["npx", "http-server", "-p", "3000"]
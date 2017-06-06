#start

FROM mhart/alpine-node:latest 

RUN npm install -g pm2

# Install dependencies 

COPY client/package.json /app/client/package.json
RUN cd /app/client && npm install

COPY package.json app/package.json
RUN cd /app && npm install


# build dependencies 

WORKDIR /app
COPY . /app

RUN cd /app/client && npm run build 

EXPOSE 3001

COPY docker-run-script.sh /docker-run-script.sh

RUN /bin/ash /docker-run-script.sh

CMD ["pm2-docker", "start", "index.js"]

#ENTRYPOINT ["/docker-run-script.sh”]

#CMD ["npm", "run", "s"]

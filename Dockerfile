
#start

FROM alpine:latest


#initial setup

RUN apk update && apk upgrade && apk add --update nodejs-npm && rm -rf /var/cache/apk/*

RUN npm config set registry https://registry.npmjs.org/


# Install dependencies (was)

# COPY client/package.json /tmp/client/package.json
# RUN cd /tmp/client && npm install
# RUN mkdir /client && cp -a /tmp/client/node_modules /client

# COPY package.json /tmp/server/package.json
# RUN cd /tmp/server && npm install
# RUN cp -a /tmp/server/node_modules /


# Install dependencies 

COPY client/package.json /client/package.json
RUN cd /client && npm install

COPY package.json /package.json
RUN cd / && npm install


# build dependencies 

WORKDIR /
COPY . /

RUN cd /client && npm run build 

EXPOSE 3001
CMD [“npm”, “run”, “s”]

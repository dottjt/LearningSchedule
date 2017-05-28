FROM node 

# Install global dependencies
RUN npm i -g typescript node-ts

# Install client dependencies 
COPY client/package.json /tmp/client/package.json
RUN cd /tmp/client && npm install
RUN mkdir /client && cp -a /tmp/client/node_modules /client

# Install server dependencies 
COPY package.json /tmp/server/package.json
RUN cd /tmp/server && npm install
RUN cp -a /tmp/server/node_modules /


WORKDIR /
ADD . /

EXPOSE 3001
CMD npm run s


FROM node:latest


EXPOSE  19000
EXPOSE 19001
ENV ADB_IP="192.168.112.101"
ENV REACT_NATIVE_PACKAGER_HOSTNAME="192.168.1.1"

RUN mkdir -p /node
ADD ./node
WORKDIR /node

COPY package.json yarn.lock app.json ./
RUN npm install
CMD ["node","App.js"]

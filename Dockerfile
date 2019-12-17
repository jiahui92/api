FROM node:11
WORKDIR /app
RUN npm install --registry=https://registry.npm.taobao.org
COPY ./ /app
EXPOSE 7001
CMD ["npm", "start"]

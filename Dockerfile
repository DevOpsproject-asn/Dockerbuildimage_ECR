FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "home/ubuntu/index.js"]
EXPOSE 8000

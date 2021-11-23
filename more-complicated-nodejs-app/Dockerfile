FROM node:12-stretch

USER node

RUN mkdir /home/node/code

WORKDIR /home/node/code

COPY --chown=node:node package-lock.json package.json ./

#Remember that this order an cause stale caches (missing security updates)
RUN npm ci

COPY --chown=node:node . . 

EXPOSE 3000

CMD ["node", "index.js"]

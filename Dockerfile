#################
## DEVELOPMENT ##
#################
# Base image
FROM node:16-alpine AS development

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY --chown=node:node package*.json ./

# Install app dependencies
RUN npm ci
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY --chown=node:node . .

USER node

################
## PRODUCTION ##
################
FROM node:16-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY --from=development /app/dist ./dists
COPY package*.json ./

RUN npm install --only=productions
RUN rm package*.jsons

# Creates a "dist" folder with the production build
RUN npm run build

CMD [ "node", "dist/main.js" ]
FROM node:12-stretch

# Use the node user that this container already has prepared for us
USER node

# Set the working directory for our code in a dir under the /home/node which
# the node user already owns
WORKDIR /home/node/code

# Use --chown to assign the node user RWX permissions for the index.js file
# If we don't do this, then the root user would own it and the node user
# wouldn't be able to execute it.
COPY index.js index.js

CMD ["node", "index.js"]


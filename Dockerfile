# Specify a base image

FROM alpine

# Install some dependencies
RUN apk add --update npm

COPY ./ ./

RUN npm install

# Default command

CMD ["npm","start"]

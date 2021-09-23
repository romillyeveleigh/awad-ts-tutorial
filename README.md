# Fullstack React GraphQL TypeScript Tutorial working version

Reddit clone adapted from tutorial by Ben Awad

Technologies used:

- Typescript
- Express
- Docker
- Next.js
- Apollo Server
- Apollo Client
- GraphQL Code Generator
- TypeORM

- Server is deployed as a docker container, running on a Dokku droplet hosted on Digital Ocean
- Web is a Next server with SSR running on Vercel, linked to a custom domain (lireddit.eveleigh.co)

Includes features extended from original tutorial:

- Added types from next-apollo
- Updated imports for Chakra
- Updated to Node 16

# To run in production:

$ cd server
$ yarn dev2

$ cd ../web
$ yarn dev

open browser at http://localhost:3000

# To deploy server:

$ cd server
$ bash deploy.sh
$ ssh root@206.189.120.194

$ docker pull romillyeveleigh/lireddit:$VERSION 
$ docker tag romillyeveleigh/lireddit:$VERSION dokku/api:$VERSION
$ dokku deploy api $VERSION

# To deploy web:

$ cd web
$ yarn build // check for any build errors
$ vercel --prod

# Snow Alert

Notification service about snow events for skiers, snowboarders and active people.

## Idea

Users create watch lists with locations and criterias for weather changes via REST api. The backend is running a cron job that requests weather based on the watchlist locations. If the watchlist criteria is met, a user will receive a snow alert.

## Prerequisite

Please use NodeJS 18 or higher.

```bash
brew install nvm
nvm install 18
```

To run the project call:

```bash
yarn start
```

To run unit tests:

```bash
yarn test
```

## Deployment

The web service is deployed on render under this url:

https://snow-alert.onrender.com/health

The webhook endpoint URL for Slack:

https://snow-alert.onrender.com/webhooks/slack

## Other projects

1. YAWC - debuggin tool for websockets
   https://github.com/ddoronin/yawc

2. JSON parser w/o memory overhead in Rust
   https://github.com/ddoronin/json_stream_reader

3. Monas - javascript monads
   https://github.com/ddoronin/monas
4. Bytable - binary serializer in typescript ala protobuf
   https://github.com/ddoronin/bytable

5. Medium
   https://medium.com/@dmitrydoronin

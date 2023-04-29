В dev.server /src/index.js на 74 строке вызов applyHbs

applyHbs, это основная функция из webpage.provider.templates /src/index.js

В src/hbs/templates/3.0/script/index.hbs на 25 строке вызывается bootstrap, на 29 строке формируется bootstrapConfig, передающийся в вызов

bootstrap в src/index.ts основная функция

Итого: dev.server -> templates -> bootstrap
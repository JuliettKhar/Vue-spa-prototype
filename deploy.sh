#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
npm run build

# переход в каталог сборки
cd dist

# если вы публикуете на пользовательский домен
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# если вы публикуете по адресу https://<USERNAME>.github.io
# git push -f git@github.com:<juliettkhar>/<juliettkhar>.github.io.git dev

# если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>
 git push -f git@github.com:<juliettkhar>/<Vue-spa-prototype>.git master:gh-pages

cd -

#!/usr/bin/env sh

# 绾喕绻氶懘姘拱閹舵稑鍤柆鍥у煂閻ㄥ嫰鏁婄拠锟�
set -e

# 閻㈢喐鍨氶棃娆愶拷浣规瀮娴狅拷
npm run docs:build

# 鏉╂稑鍙嗛悽鐔稿灇閻ㄥ嫭鏋冩禒璺恒仚
cd docs/.vuepress/dist

# 婵″倹鐏夐弰顖氬絺鐢啫鍩岄懛顏勭暰娑斿鐓欓崥锟�
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 婵″倹鐏夐崣鎴濈閸掞拷 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 婵″倹鐏夐崣鎴濈閸掞拷 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:wyx318/panda.git master:gh-pages

cd -

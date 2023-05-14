---
group:
  title: NPM
  order: 0
---
# npm link

## 1.什么是软链
如果想在项目B引入项目A的本地npm包，就可以用 `npm link packageName`来创建软链 

## 2.如何创建/使用软链
2.1 在项目A中创建全局链接
```shell
$ cd /path/projectAPath
$ npm link
```
2.2 在项目B中链接A项目为依赖
```shell
$ cd /path/projectBPath
$ npm link packageAName

```
## 3. 如何去除软链
3.1 在使用npm包的项目B的文件目录下解除链接
```shell
$ cd /path/projectBPath
$ npm unlink packageAName
```
3.2 在项目A的文件目录下解除全局链接
```shell
$ cd /path/projectAPath
$ npm unlink
```

## 4. 如何用pnpm进行软链
4.1 在项目A中创建全局链接
```shell
$ cd /path/projectApath
$ pnpm link --global
```
4.2 在项目B中链接A项目为依赖 `pnpm link  --global / pnpm link --global`
```shell
$ cd /path/projectBPath
$ pnpm link packageAName
```

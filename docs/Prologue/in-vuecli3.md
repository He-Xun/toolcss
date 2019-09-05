# vue-cli3.0中使用

VUE-CLI3全局引入less的变量
首先确定是vue-cli3.x而不是2.9.x，我昨天就被这个给坑了，
其实这个东西也简单，用style-resources-loader来处理就OK了

```bash
vue add style-resources-loader
```

安装完成后选择less预处理器，他会在vue.config.js代码中生成

```json
pluginOptions: {
     'style-resources-loader': {
       preProcessor: 'less',
       patterns: [
       // 下面这段是自己加的，根据自己文件的位置来修改
           path.resolve(__dirname, "./src/assets/css/toolcss_mixin.less")
       ]
     }
 }
```

toolcss.css 直接在mainjs中引用
```js
import "./assets/css/toolcss.css";
```

如果你能成功安装那么你就跳过后面这段话
本人在安装的时候装不了，暂时不知道原因，才疏学浅，有知道的大佬说下

![20180929101747965](..\images\20180929101747965.png)

我是直接去他报错的源文件修改的源代码

![20180929101932128](..\images\20180929101932128.png)

等安装成功后再把这段话给删掉。。。

# Start

- level4: Project css
- level3: Elementuicss && overwrite style
- level2: Toolcss
- level1: Normalize.css/Reset css

在项目中  我一般把项目的css粗略分成4个层次

第一层normalize/reset css是用来抹平 浏览器原生样式不一致的问题

第二层也就是我当前这个库  抽离了构建业务中大量重复的样式和冗余的代码

第三层是ui框架 和我们覆写的样式

第四层是项目级的样式 往细划分还有提取出组件级、页面级、项目级、主题级的层次来



**当前的这个库不涉及任何组件的东西，不把目标设定的过于复杂 希望达到高复用的效果。**



原生基础样式建议使用normalize.css

```bash
yarn add normalize.css
```



开始使用请 单独下载这两个文件：<br>
[toolcss.css](http://git.longhu.net/hexun/toolcss/blob/master/toolcss.css)
[toolcss_mixin.less](http://git.longhu.net/hexun/toolcss/blob/master/toolcss_mixin.less)

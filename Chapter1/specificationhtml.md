# HTML规范

#### 1.基础规范

1.1 为每个HTML 页面的第一行添加标准模式（standard mode）的声明，这样能够确保在每个浏览器中拥有一致的展现。(Line1)
 1.2 html根元素指定lang属性，从而为文档设置正确的语言。(Line2)
 1.3 声明文档的编码charset，且与文件本身编码保持一致，推荐使用UTF-8编码。根据页面内容和需求填写适当的keywords和description。(Line4)
 1.4 每个页面必须有且仅有一个title元素。(Line5)
 1.5 在引入CSS和JavaScript文件时一般不需要指定type属性，因为text/css和text/javascript分别是它们的默认值。(Line6/7)
 1.6 当link元素用于引用CSS文档时, 默认media是screen, 如为特殊终端提供样式, 请指定media属性, 如`media=“print”`。
 1.7 css 引用置于头部<head>标签内。
 1.8 js 引用置于底部</body>标签前。

```
<!DOCTYPE HTML>
<html lang="zh">
    <head>
        <meta charset="utf-8" />
        <title>Sample page</title>
        <link rel="stylesheet" href="css_example_url" />
        <script src="js_example_url"></script>
    </head>
    <body>
    </body>
</html>
```

### Tip:

IE 支持通过特定的`<meta>`标签来确定绘制当前页面所应该采用的IE版本。除非有强烈的特殊需求，否则最好是设置为`edge mode`，从而通知 IE 采用其所支持的最新的模式。
 `<meta http-equiv="X-UA-Compatible" content="IE=Edge">`

#### 2.属性顺序

- `class` （class是为高可复用组件设计的，所以应处在第一位）
- `id`、`name` （id更加具体且应该尽量少使用，所以将它放在第二位）
- `data-*`
- `src`、`for`、`type`、`href`、`value`
- `placeholder`、`title`、`alt`
- `aria-*`、`role`
- `required`、`readonly`、 `disabled`

#### 3. id/class命名规则

3.1 **遵循“内容优先，表现为辅”的基本原则**
 首先根据内容命名，如`header`、`footer`。若根据内容无法找到合适的命名，再结合表现进行辅助，如`col-main`、`blue-box`。
 3.2 **一律小写，多个单词以“-”连接**
 不能使用下划线和驼峰命名法，如`main-nav`。可基于最近的父元素名称作为前缀。
 3.3 **在不影响语义的情况下，可适当使用缩写**
 缩写只用来表示结构，如`col`、`nav`、`btn`等，不可自造缩写。
 3.4 **避免广告拦截词汇**
 `ad`、`ads`、`adv`、`banner`、`sponsor`、`gg`、`guangg`、`guanggao`等，页面中尽量避免采用以上词汇来命名

#### 4. 标签使用

4.1 `<base>`标签必须放在`<head>`内。
 4.2 `<strong>`标签用于强调重要性, `<em>`标签用于表示内容的着重点。[参考](https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F644)
 4.3 当`link`元素用于引用CSS文档时, 默认`media`是`screen`, 如为特殊终端提供样式, 请指定`media`属性, 如`media=“print”`;
 4.4 `img`标签必须加`alt`，尤其是logo、商品图片等关键图片信息，对SEO友好。
 4.5 `减少标签的数量`
 编写 HTML 代码时，尽量避免多余的父元素。很多时候，这需要迭代和重构来实现。
 4.6 所有html标签必须有结束符，`<img />`, `<col />`, `<base />`, `<link />`, `<meta />`, `<input />` 除外。

#### 5. 注释规范

页面中使用注释划分结构块，注意与css中的注释达成统一格式。

```
<!-- 头部 -->
<div class="g-hd">
    <!-- LOGO -->
    <h1 class="m-logo"><a hred="#">LOGO</a></h1>
    <!-- /LOGO -->
    <!-- 导航 -->
    <ul class="m-nav">
        <li><a hred="#">NAV1</a></li>
        <li><a hred="#">NAV2</a></li>
    </ul>
    <!-- /导航 -->
</div>
<!-- /头部 -->
```

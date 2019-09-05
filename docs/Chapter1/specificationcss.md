# CSS规范

#### 1. 属性顺序

1.1 位置属性(`position`、`top`、`right`、`z-index`、`display`、`float`等)；
 1.2 大小(`width`, `height`, `padding`, `margin`等)；
 1.3 文字系列(`font`、`line-height`、`letter-spacing`、`color`、`text-align`等)；
 1.4 背景(`background`、`border`等)；
 1.5 其他(`animation`、`transition`等)。

```css
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* Box-model */
  display: block;
  float: right;
  width: 100px;
  height: 100px;

  /* Typography */
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  color: #333;
  text-align: center;

  /* Visual */
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;

  /* Misc */
  opacity: 1;
}
```

##### 2. 选择器

如无必要，不得为 `id`、`class` 选择器添加类型选择器进行限定，在性能和维护性上，都有一定的影响。

```css
/* 推荐*/
#error,
.danger-message {
    font-color: #c00;
}

/* 不推荐*/
dialog#error,
p.danger-message {
    font-color: #c00;
}
```

##### 3. 属性使用缩写

在需要显示地设置所有值的情况下，应当尽量限制使用简写形式的属性声明。常见的滥用简写属性声明的情况如下：

```
padding
margin
font
background
border
border-radius
```

另外，对于`#aabbcc`形式的颜色值也可简化为`#abc`，这样精简代码同时又能提高用户的阅读体验。

##### 4. a标签伪类书写顺序

<a>标签的这四个伪类的特殊性是一样的，所以当某个链接处于的状态同时激活多个伪类时，那么伪类的书写顺序就起到了关键作用，从而影响最终的显示效果。

```css
link->visited->hover->active
```

##### 5. 媒体查询（Media query）的位置

媒体查询放在相关规则后面或者统一放在文档底部，若统一放在文档底部的时候，顺序应按照正常样式进行排布且注释统一。

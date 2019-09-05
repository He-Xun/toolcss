# 排版



## 省略号

| 类名             | 代码                                                         | 作用            |
| ---------------- | ------------------------------------------------------------ | --------------- |
| text-ellipsis    | overflow:  hidden;<br />display:  -webkit-box;<br />-webkit-box-orient:  vertical; <br />text-overflow: ellipsis; | 单行出省略号    |
| .text-ellipsis-2 | -webkit-line-clamp:  2;                                      | 超过2行出省略号 |
| .text-ellipsis-3 | -webkit-line-clamp:  3;                                      | 超过3行出省略号 |
| .text-ellipsis-4 | -webkit-line-clamp:  4;                                      | 超过4行出省略号 |



## 文本效果

| 类名 | 效果              |
| ---- | ----------------- |
| unselectable | 文本不可选 |
| tl   | 文本左对齐        |
| tc   | 文本居中          |
| tr   | 文本右对齐        |
| t-lt | 顶线              |
| t-lm | 中划线            |
| t-lb | 底线              |
| b    | font-weight: 500; |
| bs   | font-weight: 300; |
| bm   | font-weight: 600; |
| bl   | font-weight: 700; |
| lh-1p5   | line-height: 1.5; |
| lh-2   | line-height: 2; |
| lh-2p5   | line-height: 2.5; |
| lh-3   | line-height: 3; |



## 文本大小

| 类名   | 代码           |
| ------ | -------------- |
| font12 | fontsize:12px; |
| font14 | fontsize:12px; |
| font16 | fontsize:12px; |
| ...    | ...            |
| font88 | fontsize:88px; |



## 加载动画

```html
<div class="bouncing-loader">
    <div></div>
    <div></div>
    <div></div>
</div>
```



## 滚动条

```html
<div class="thin-bar">
	overflow box
</div>
```



## 滚动条

```html
<div class="thin-bar">
	overflow box
</div>
```



## 阴刻效果

```html
<div class="etched-text">
	etched-text
</div>
```



## 在文本悬停时在文本周围创建一个阴影框

```html
<div class="hover-shadow-box-animation">
	etched-text
</div>
```



## 当文本悬停时，创建动画下划线效果。

```html
<div class="hover-underline-animation">
	hover to show effect
</div>
```



## 淡化悬停物品的兄弟姐妹

```html
<div class="sibling-fade-wrapper">
    <span>
    	text a
    </span>
    <span>
    	text b
    </span>
    <span>
    	text c
    </span>
    <span>
    	text d
    </span>
    <span>
    	text e
    </span>
    <span>
    	text f
    </span>
</div>
```

# 排版

## 省略号

| 类名             | 代码                                                         | 作用            |
| ---------------- | ------------------------------------------------------------ | --------------- |
| text-ellipsis    | overflow:  hidden;<br />display:  -webkit-box;<br />-webkit-box-orient:  vertical; <br />text-overflow: ellipsis; | 单行出省略号    |
| .text-ellipsis-2 | -webkit-line-clamp:  2;                                      | 超过2行出省略号 |
| .text-ellipsis-3 | -webkit-line-clamp:  3;                                      | 超过3行出省略号 |
| .text-ellipsis-4 | -webkit-line-clamp:  4;                                      | 超过4行出省略号 |



## 文本页面懒加载效果
在页面内容盒子外加上.loading-mask

```html
<div class="loading-mask">
	<div>
        your page content zone without table
    </div>
</div>
```

页面上所有的文字将会变成圆角矩形的块儿，用渐变的方式闪动  当页面mounted的时候  去掉这个classname  页面即可正常显示



## 文本效果

| 类名 | 效果              |
| ---- | ----------------- |
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



## 滚动条

```html
<div class="thin-bar">
	overflow box
</div>
```


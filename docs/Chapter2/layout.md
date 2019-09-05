# 布局

## 语义化盒子

| 类名         | 代码                          | 作用                             |
| ------------ | ----------------------------- | -------------------------------- |
| comm-wrapper | width:100%;<br />height:100%; | 所有子页面body下的第一个预置盒子 |
| full-box     | width:100%;<br />height:100%; | 宽高100%                         |



## 宽高 

步长5  5%-100%  pct代表percent百分比 

| 类名    | 代码         | 作用     |
| ------- | ------------ | -------- |
| pctw100 | width:100%   | 宽度100% |
| pcth100 | height:100%; | 高度100% |
| pctw5   |              |          |
| pctw10  |              |          |
| pctw15  |              |          |
| ...     |              |          |
| pctw95  |              |          |
| pcth5   |              |          |
| pcth10  |              |          |
| pcth15  |              |          |
| ...     |              |          |
| pcth95  |              |          |



## 通用margin

步长5   5px-40px  涵盖四向 上下左右单独的**外边距**  超出部分请在自己的选择器里单独写

| 类名 | 代码                         | 作用             |
| ---- | ---------------------------- | ---------------- |
| pl0  | padding-right: 0 !important; | 强制清除左内边距 |
| pr0  | padding-left: 0 !important;  | 强制清除右内边距 |
| m5   | margin:5px;                  |                  |
| mt5  | margin-top                   |                  |
| mr5  | margin-right:5px;            |                  |
| mb5  | margin-bottom:5px;           |                  |
| ml5  | margin-left:5px;             |                  |
| m10  | margin:10px;                 |                  |
| mt10 | margin-top:10px;             |                  |
| mr10 | margin-right:10px;           |                  |
| mb10 | margin-bottom:10px;          |                  |
| ml10 | margin-left:10px;            |                  |
| ...  |                              |                  |
| ..   |                              |                  |
| ml40 |                              | 左外边距40px     |



## 通用padding

步长5   5px-40px  涵盖四向 上下左右单独的**内边距**  超出部分请在自己的选择器里单独写

| 类名 | 代码                 | 作用 |
| ---- | -------------------- | ---- |
| p5   | padding:5px;         |      |
| pt5  | padding-top:5px;     |      |
| pr5  | padding-right:5px;   |      |
| pb5  | padding-bottom:5px;  |      |
| pl5  | padding-left:5px;    |      |
| p10  | padding:10px;        |      |
| pt10 | padding-top:10px;    |      |
| pr10 | padding-right:10px;  |      |
| pb10 | padding-bottom:10px; |      |
| pl10 | padding-left:10px;   |      |
| ...  |                      |      |
| ...  |                      |      |
| pl40 |                      |      |

示例：

```html
<div classname="pt20 tc">
	<div classname="pt10 pb10">是否提交？</div>
	<button classname="mt20">确定</butoon>
</div>
```



## 浮动相关

| 类名     | 代码                                                         | 作用                 |
| -------- | ------------------------------------------------------------ | -------------------- |
| fl       | float:left                                                   | 左浮                 |
| fr       | float:right                                                  | 右浮                 |
| clear    | clear:both                                                   | 不收前面元素浮动影响 |
| clearfix | .clearfix:after{<br /> content:".";<br /> display:block;<br /> height:0;<br /> clear:both;<br /> visibility:hidden<br />}<br /> .clearfix{<br /> *+height:1%;<br />} | 浮动清除             |
| zoom     | *zoom: 1;                                                    | ie8 兼容             |



## display

| 类名 | 代码                                                         | 作用         |
| ---- | ------------------------------------------------------------ | ------------ |
| dn   | display: none;                                               | 隐藏         |
| db   | display: block;                                              | 块级元素     |
| dib  | -moz-inline-stack: inline-block;<br />     vertical-align: top;<br />     *display: inline;<br />     display: inline-block;<br />     zoom: 1; <br /> | 行内块级元素 |
| di   | display: inline;                                             | 行内元素     |



## inline&&浮动等宽

| 类名                  | 代码                                                         | 备注                                         |
| --------------------- | ------------------------------------------------------------ | -------------------------------------------- |
| inline-box            | font-size: 1em; letter-spacing: -.25em;                      |                                              |
| inline-2<br />float-2 | width: 49.9%;                                                | 需要精确两分请用flex                         |
| inline-3<br />float-3 | width: 33.3%;                                                |                                              |
| inline-4<br />float-4 | width: 24.9%;                                                |                                              |
| inline-5<br />float-5 | width: 19.9%;                                                |                                              |
| inline-6<br />float-6 | width: 16.6%;                                                |                                              |
| inline-any            | display: inline-block;<br /> *display: inline; <br />letter-spacing: 0;<br /> vertical-align: top;<br /> *zoom: 1; | 不指定宽度，inline-x任意一个盒子都有这个属性 |

示例：
```html
<div class="inline-box">
    <div class="inline-3">content1</div>
    <div class="inline-3">content2</div>
    <div class="inline-3">content3</div>
</div>
```

示例：
```html
<div class="">
    <div class="float-2">content1</div>
    <div class="float-3">content2</div>
    <div class="float-2">content3</div>
</div>
```



## 定位

| 类名      | 代码                                                      | 作用                                                         |
| --------- | --------------------------------------------------------- | ------------------------------------------------------------ |
| posr      | position:relative                                         | 相对定位                                                     |
| posa      | positon:absolute                                          | 绝对定位<br />不推荐使用 <br />最好配合left top right bottom 明确写在自己的选择器内 |
| posf      | postion:fixed                                             | 固定定位<br />不推荐使用 <br />最好配合left top right bottom 明确写在自己的选择器内 |
| posa-out  | position: absolute;<br />left: -999em; <br />top: -999em; | 绝对定位隐藏                                                 |
| posa-clip | position: absolute; <br />clip: rect(0 0 0 0);            | 绝对定位隐藏                                                 |



## 弹性盒子

这里抽象了最常用的flex布局配合  在外层盒子加上 flex flex-x-y 即可完成布局

x代表justify-content的属性   分别有fs fe sb sa c 的缩写标识符

y代表align-item的属性   分别有fs fe c s b 的缩写标识符

所以不算继承的value值   能控制得出来的效果就有 5*5=25 个   我只放进去了常用的10多种

```
fs（flex-start）起始  
fe（flex-end）最后  
sa（space-around） 
sb（space-between） 
c（center）居中   
s（strentch）拉伸  
b（baseline）基线	
```

底下未涉及的缩写为保留字  今后用到再扩展



### flex外层盒子

| 类名       |                          代码                          | 作用                                 |
| ---------- | :----------------------------------------------------: | ------------------------------------ |
| flex       |                      display:flex                      | 弹性盒子                             |
| flex-rev   |                flex-direction: column;                 | 主纵轴旋转90°                        |
| flex-wrap  |                    flex-wrap: wrap;                    | flex换行                             |
| flex-cc    |    justify-content:center;<br />align-item:center;     | 水平垂直居中                         |
| flex-sb-c  | justify-content:space-between;<br />align-item:center; | 水平两端 垂直居中                    |
| flex-sb    |             justify-content:space-between;             | 水平两端对齐                         |
| flex-sa    |             justify-content:space-around;              | 水平空隙均等对齐                     |
| flex-sa-c  | justify-content:space-around;<br />align-item:center;  | 水平空隙均等 垂直居中对齐            |
| flex-fs    |              justify-content:flex-start;               | 水平从前往后排                       |
| flex-fs-c  |  justify-content:flex-start;<br />align-item:center;   | 水平从前往后排 垂直居中              |
| flex-fs-fe | justify-content:flex-start;<br />align-item:flex-end;  | 水平从前往后排  垂直从盒子底部开始排 |
| flex-fe    |               justify-content:flex-end;                | 水平从后往前排                       |
| flex-fe-c  |  justify-content:flex-start;<br />align-item:center;   | 水平从后往前  垂直居中               |
| flex-fe-fe |  justify-content:flex-end;<br />align-item:flex-end;   | 水平从后往前  垂直从后往前排         |



### flex子盒子

| 类名    | 代码    | 作用 |
| ------- | ------- | ---- |
| flex-1  | flex:1  | 1份  |
| flex-2  | flex:2  | 2份  |
| flex-3  | flex:3  | 3份  |
| flex-4  | flex:4  | 4份  |
| flex-5  | flex:5  | 5份  |
| flex-6  | flex:6  | 6份  |
| flex-7  | flex:7  | 7份  |
| flex-8  | flex:8  | 8份  |
| flex-9  | flex:9  | 9份  |
| flex-10 | flex:10 | 10份 |

flex按份数均分

```html
<div class="flex flex-cc">
    <div class="flex-1">content1</div>
    <div class="flex-2">content2</div>
    <div class="flex-1">content3</div>
</div>
```



按份数均分且不会随着文字的增加而撑大子盒子

```html
<div class="flex flex-cc">
    <div class="flex-1 ovh text-ellipsis">content1</div>
    <div class="flex-2 ovh text-ellipsis">content2</div>
    <div class="flex-1 ovh text-ellipsis">content3</div>
</div>
```



flex换行 且一排3个（flex-*）：

```html
<div class="flex flex-wrap">
    <div class="flex-3">content1</div>
    <div class="flex-3">content2</div>
    <div class="flex-3">content3</div>
    <div class="flex-3">content3</div>
    <div class="flex-3">content3</div>
    <div class="flex-3">content3</div>
    <div class="flex-3">content3</div>
</div>
```



## 网格系统

请使用element ui/bootstrap的网格系统

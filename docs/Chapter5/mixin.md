# mixin

请单独引入 [toolcss_mixin.less](http://git.longhu.net/hexun/toolcss/blob/master/toolcss_mixin.less) 

项目装好并配置less-loader  直接在你的classname引用
```css
   .classname{
      .gradient-h ( #fff, #aaa );
   }
 ```
### Backgrounds Group

**.gradient-h** 纵向渐变
```
  .gradient-h ( #fff, #aaa );
 ```

**gradient-v** 水平渐变
 ```
  .gradient-v ( #fff, #aaa );
 ```

**.gradient-vline**  纵向四色渐变
 ```
  .gradient-vline ( #fff, #ddd, #aaa, #ddd );
 ```

**.gradient-v3colors**  纵向三色渐变
 ```
  .gradient-v3colors ( #00b3ee, #7a43b6, 50%, #c3325f );
 ```

**.gradient-radial** 环形渐变

 ```
  .gradient-radial ( #fff, #aaa );
 ```

**.gradient-direction**  自定义角度的渐变
 ```
  .gradient-direction ( #fff, #aaa, 120 );
 ```

**.bg-clip** 背景裁切
 ```
  .bg-clip ( border-box );
  .bg-clip ( border );
 ```

**.bg-size** 背景尺寸
 ```
  .bg-size ( 100%, 50% );
 ```

### Transform Group
**.transform**  变形
 ```
  .transform ( perspective(0) translate3d(50px, 40px, 80px) scale3d(1, 2, 0) rotate3d(0, 1, 0, 45deg) );
 ```

**.matrix** 矩阵
 ```
  .matrix ( 0.9, 0.2, -0.5, 0.9, 0, 0 );
 ```

**.matrix3d** 3d矩阵
 ```
  .matrix3d ( "1, 0, 0, 0, 0, 0.60, 0, -0.0009, 0, 0, 1, 0, 0, 0, 0, 1" );
 ```

**.rotate** 旋转
 ```
  .rotate ( 45 );
  .rotate ( x, 45 );
  .rotate ( y, 45 );
  .rotate ( z, 45 );
 ```

**.rotate3d** 3d旋转
 ```
  .rotate ( 15, 10, 5, 45 );
 ```

**.scale** 缩放
 ```
  .scale ( 0.8 );
  .scale ( x, 0.4 );
  .scale ( y, 1.3 );
  .scale ( z, .7 );
 ```

**.scale3d** 3d缩放
 ```
  .scale3d ( .4, .5, 1.2 );
 ```

**.translate** 位移
 ```
  .translate ( 20, 40 );
  .translate ( x, 20 );
  .translate ( y, 40 );
  .translate ( z, 60 );
 ```

**.translate3d** 3d位移
 ```
  .translate3d ( 20, 40, 60 );
 ```

**.skew** 扭曲
 ```
  .skew ( 30, 4 );
  .skew ( x, 20 );
  .skew ( y, -30 );
 ```

**.perspective** 透视
 ```
  .perspective ( 250 );
  .perspective ( 250, px );
 ```

**.perspective-origin** 透视源
 ```
  .perspective-origin ( 50% 50% );
 ```

**.transform-origin** 变形源
 ```
  .transform-origin ( 30%, 40%, 0 );
 ```

**.transform-style** 变形形式
 ```
  .transform-style ( preserve-3d );
 ```



### Transition
**.transition** 过渡属性动画
 ```
  .transition ( width, .7s );
  .transition ( property, 0.2s, ease-out, 0 );
 ```


### Animation Group
**.animate** 动画
 ```
  .animate ( wobble );
  .animate ( wobble, 2s, ease, 0, 1, normal );
 ```

**.animation-state** 动画状态
 ```
  .animation-state ( running );
 ```


### Column
**.columns** 文本分栏
 ```
  .columns ( 2, normal );
 ```



### Misc Group
**.opacity** 透明度
 ```
  .opacity ( 0.7 );
 ```

**.font** 字
 ```
  .font ( italic, normal, bold, 14px, 1, "'Lucida Grande', Helvetica, Arial, Verdana, sans-serif" );
 ```

**.font-face** 字体
 ```
  .font-face ( MyFontName, "../assets/fonts/sofia-pro" );
 ```

**.size** 宽高
 ```
  .size ( 400, 200 );
 ```

**.square** 正方形
 ```
  .square ( 400 );
 ```
 
**.cirecle** 圆形
 ```
  .cirecle ( 200 );
 ```
 
 **.triangle** 三角形
 ```
  .square (30,30,#red,t);
  .square (30,30,#red,r);
  .square (30,30,#red,b);
  .square (30,30,#red,l);
  .square (30,30,#red,tl);
  .square (30,30,#red,tr);
  .square (30,30,#red,br);
  .square (30,30,#red,bl);
 ```
 

**.resizable**  可调宽高（用于文本域）
 ```
  .resizable ( both );
  .resizable ( vertical );
  .resizable ( horizontal );
 ```

**.hide-text** 隐藏文本
 ```
  .hide-text;
 ```


**从算力来说**

GPU ==> n*CPU



页面渲染简易流程

1. Download html
2. Download CSS
3. Download JS
   1. CSS rules tree ==> construct
   2. DOM API & DOM tree 
   3. CSSOM tree
4. Render ==> render tree ==> Layout ==> paint



**尽量减少reflow & repaint**

#### 会触发回流和重绘的操作

- 页面首次渲染

- 浏览器窗口大小发生改变

- 元素尺寸或位置发生改变

- 元素内容变化（文字数量或图片大小等等）

- 元素字体大小变化

- 添加或者删除可见的DOM元素

当页面中元素样式的改变并不影响它在文档流中的位置时（例如：`color`、`background-color`、`visibility`等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为**重绘**。

避免频繁的样式操作，最好一次性重写style,或者一次性更改class,避免频繁操作dom,对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。
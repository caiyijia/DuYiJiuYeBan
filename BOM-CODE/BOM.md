# BOM核心

Browser Object Model (BOM)

归纳

- Window JS层级中的顶层对象表示浏览器窗口
- Navigator包含客户端浏览器的信息
- History 包含了浏览器窗口的访问过的URL
- Location 包含了当前URL的信息
- Screen 包含了客户端显示屏的信息

## Window对象

### 几个重要的window对象属性

**innerheight** 返回窗口的文档显示区的高度。

**innerwidth** 返回窗口的文档显示区的宽度。

**pageXOffse**t 设置或返回当前页面相对于窗口显示区左上角的 X 位置

**pageYOffset** 设置或返回当前页面相对于窗口显示区左上角的 Y 位置

**screenLeft**
**screenTop**	
**screenX**
**screenY**

只读整数。声明了窗口的左上角在屏幕上的的 x 坐标和 y 坐标。IE、Safari、Chrome 和 Opera 支持 screenLeft 和 screenTop，而 Chrome、Firefox 和 Safari 支持 screenX 和 screenY。

### 几个重要的window对象方法

alert() 显示带有一段消息和一个确认按钮的警告框。

clearInterval() 取消由 setInterval() 设置的 timeout。

clearTimeout() 取消由 setTimeout() 方法设置的 timeout。

close() 关闭浏览器窗口。

confirm() 显示带有一段消息以及确认按钮和取消按钮的对话框。

open() 打开一个新的浏览器窗口或查找一个已命名的窗口window.open(URL,name,features,replace)

prompt() 显示可提示用户输入的对话框。

scrollBy() 按照指定的像素值来滚动内容

scrollTo() 把内容滚动到指定的坐标。

setInterval() 按照指定的周期（以毫秒计）来调用函数或计算表达式。

setTimeout() 在指定的毫秒数后调用函数或计算表达式。

## Navigator 对象

### Navigator 对象属性

cookieEnabled 返回指明浏览器中是否启用 cookie 的布尔值。

onLine 返回指明系统是否处于脱机模式的布尔值。

userAgent 返回由客户机发送服务器的 user-agent 头部的值。

### Navigator 对象方法

javaEnabled() 规定浏览器是否支持并启用了 Java。

taintEnabled() 规定浏览器是否启用数据污点 (data tainting)。

## History 对象

### History 对象属性

length 返回浏览器历史列表中的 URL 数量。

### Historia 对象方法

back() 加载 history 列表中的前一个 URL。

forward() 加载 history 列表中的下一个 URL。

go() 加载 history 列表中的某个具体页面。

## Location 对象

### 几个比较重要的Location 对象属性

hash 设置或返回从井号 (#) 开始的 URL（锚）。

host 设置或返回主机名和当前 URL 的端口号。

href 设置或返回完整的 URL。

pathname 设置或返回当前 URL 的路径部分。

protocol 设置或返回当前 URL 的协议。

search 设置或返回从问号 (?) 开始的 URL（查询部分）。

### Location 对象方法

assign() 加载新的文档。
reload(‘force’) 重新加载当前文档。参数可选，不填或填 false 则取浏览器缓存的文档
replace() 用新的文档替换当前文档。

## Screen 对象

Screen 对象包含有关客户端显示屏幕的信息。每个 Window 对象的 screen 属性都引用一个 Screen 对象。Screen 对象中存放着有关显示浏览器屏幕的信息。

JavaScript 程序将利用这些信息来优化它们的输出，以达到用户的显示要求。例如，一个程序可以根据显示器的尺寸选择使用大图像还是使用小图像，它还可以根据显示器的颜色深度选择使用 16 位色还是使用 8 位色的图形。另外，JavaScript 程序还能根据有关屏幕尺寸的信息将新的浏览器窗口定位在屏幕中间。

### Screen 对象属性

availHeight 返回显示屏幕的高度 (除 Windows 任务栏之外)。
availWidth 返回显示屏幕的宽度 (除 Windows 任务栏之外)。
bufferDepth 设置或返回调色板的比特深度。（仅 IE 支持）
colorDepth 返回目标设备或缓冲器上的调色板的比特深度。
deviceXDPI 返回显示屏幕的每英寸水平点数。（仅 IE 支持）
deviceYDPI 返回显示屏幕的每英寸垂直点数。（仅 IE 支持）
fontSmoothingEnabled 返回用户是否在显示控制面板中启用了字体平滑。（仅 IE 支持）
height 返回显示屏幕的高度。
logicalXDPI 返回显示屏幕每英寸的水平方向的常规点数。（仅 IE 支持）
logicalYDPI 返回显示屏幕每英寸的垂直方向的常规点数。（仅 IE 支持）
pixelDepth 返回显示屏幕的颜色分辨率（比特每像素）。
updateInterval 设置或返回屏幕的刷新率。（仅 IE11 以下支持）
width 返回显示器屏幕的宽度
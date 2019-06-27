var personArr = [{
        name: '刘小华',
        src: '1.jpg',
        sex: 'male',
        des: '漂亮的女孩子'
    },
    {
        name: '王花',
        src: '2.jpg',
        sex: 'male',
        des: '漂亮的程序猿'
    },
    {
        name: '陈军',
        src: '3.jpg',
        sex: 'female',
        des: '我是一个学霸'
    },
    {
        name: '王华',
        src: '4.jpg',
        sex: 'female',
        des: '我喜欢游泳'
    },
    {
        name: '陈思思',
        src: '5.jpg',
        sex: 'male',
        des: '我喜欢看电影'
    },
    {
        name: '陈学习',
        src: '6.jpg',
        sex: 'female',
        des: '我爸我妈爱学习'
    },
    {
        name: '王美丽',
        src: '7.jpg',
        sex: 'male',
        des: '我妈是美丽得妈妈'
    }
];

var oUl = document.getElementsByTagName('ul')[0];
// 数据渲染页面
function RenderPage(data) {
    //遍历
    var htmlStr = '';
    data.forEach(function (ele, index, self) {
        htmlStr = htmlStr + '<li>\
        <img src="./img/' + ele.src + '">\
        <p class="name">' + ele.name + '</p>\
        <p class="des">' + ele.des + '</p>\
        </li>'
    })
    // console.log(htmlStr);
    oUl.innerHTML = htmlStr;
}

RenderPage(personArr);
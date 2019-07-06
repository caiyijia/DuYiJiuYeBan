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
var oInput = document.getElementsByClassName('sText')[0];

//过滤全局状态
var filterText = '';
var filterSex = 'all';
// 数据渲染页面
function RenderPage(data) {
    //遍历
    var htmlStr = '';
    oUl.innerHTML = '';
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

// add input actions
oInput.oninput = function () {
    filterText = this.value;
    var newArr = filterArrByText(personArr, filterText);
    var newArr2 = filterArrBySex(newArr, filterSex);
    // var filterText = this.value;
    //根据过滤条件 过滤之后的数组
    // var newArr = filterArrByText(personArr, filterText);
    RenderPage(newArr2);
    // console.log(filterText);
}

// 根据文本来过滤的函数  纯函数
function filterArrByText(data, text) {
    if (!text) {
        return data;
    } else {
        return data.filter(function (ele, index) {
            // 王港 王 存在 != -1
            return ele.name.indexOf(text) != -1;
        })
    }
}

//btn style
var oBtnArr = [].slice.call(document.getElementsByClassName('btn'));
var lastActiveBtn = oBtnArr[0];
oBtnArr.forEach(function (ele, index, self) {
    ele.onclick = function () {
        changeActive(this);
        filterSex = this.getAttribute('sex');
        var newArr = filterArrBySex(personArr, filterSex);
        var newArr2 = filterArrByText(newArr, filterText);
        // RenderPage(filterArrBySex(personArr, this.getAttribute('sex')));
        RenderPage(newArr2);
    }
});

function changeActive(curActiveBtn) {
    curActiveBtn.className = 'btn active';
    lastActiveBtn.className = 'btn';
    lastActiveBtn = curActiveBtn;
}

function filterArrBySex(data, sex) {
    if(sex == 'all') {
        return data;
    } else {
        return data.filter(function (ele,index,self) {
            return ele.sex == sex;
        })
    }
}

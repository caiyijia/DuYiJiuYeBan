function filterArrBySex(data, sex) {
    if(sex == 'all') {
        return data;
    } else {
        return data.filter(function (ele,index,self) {
            return ele.sex == sex;
        })
    }
}
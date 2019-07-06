function combineFilter(config) {
    return function (data) {
        for (var prop in config) {
            // console.log(prop, config[prop], state[prop])
            data = config[prop](data, state[prop]);
        }
        return data;
    }
}

var lastFilterArr = combineFilter({
    text: filterArrByText,
    sex: filterArrBySex
});

// console.log(filterArrBySex);
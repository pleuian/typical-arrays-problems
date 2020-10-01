exports.min = function min (array) {
    var result = 0;

    if (array === undefined || array.length === 0) {
        return 0;
    }

    for(let i = 0; i < array.length; i++) {
        if (result > array[i]) {
            result = array[i];
        }
    }

    return result;
}

exports.max = function max (array) {
    var result = 0;
    if (array === undefined || array.length === 0) {
        return 0;
    }

    for(let i = 0; i < array.length; i++) {
        if (result < array[i]) {
            result = array[i];
        }
    }

  return result;
}

exports.avg = function avg (array) {
    var result = 0;
    if (array === undefined || array.length === 0) {
        return 0;
    }

    var sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i]
        result = sum / array.length;
    }

  return result;
}

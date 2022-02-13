"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort = exports.mergeSort = void 0;
/**
 *
 * @param array of numbers
 * @returns sorted array
 */
var merge = function (sublist1, sublist2) {
    var resultList = [];
    while (sublist1.length > 0 && sublist2.length > 0) {
        resultList.push(sublist1[0] < sublist2[0] ? sublist1.shift() : sublist2.shift());
    }
    return resultList.concat(sublist1.length ? sublist1 : sublist2);
};
var mergeSort = function (arr) {
    if (arr.length < 2) {
        return arr; // return once we hit an array with a single element
    }
    var mid = Math.floor(arr.length / 2);
    var left = (0, exports.mergeSort)(arr.slice(0, mid));
    var right = (0, exports.mergeSort)(arr.slice(mid));
    return merge(left, right);
};
exports.mergeSort = mergeSort;
/**
 *
 * @param arr of type array of numbers
 * @returns sorted array of numbers
 */
var quickSort = function (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivot = arr[arr.length - 1];
    var leftArr = [];
    var rightArr = [];
    for (var _i = 0, _a = arr.slice(0, arr.length - 1); _i < _a.length; _i++) {
        var el = _a[_i];
        if (el < pivot) {
            leftArr.push(el);
        }
        else {
            rightArr.push(el);
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], (0, exports.quickSort)(leftArr), true), [pivot], false), (0, exports.quickSort)(rightArr), true);
};
exports.quickSort = quickSort;

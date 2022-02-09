"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arrays = void 0;
class Arrays {
    /**
     *
     * @param array of numbers
     * @returns sorted array
     */
    mergeSort(arr) {
        if (arr.length < 2) {
            return arr; // return once we hit an array with a single element
        }
        var mid = Math.floor(arr.length / 2);
        var left = this.mergeSort(arr.slice(0, mid));
        var right = this.mergeSort(arr.slice(mid));
        return this.merge(left, right);
    }
    /**
     *
     * @param arr of type array of numbers
     * @returns sorted array of numbers
     */
    quickSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        const pivot = arr[arr.length - 1];
        const leftArr = [];
        const rightArr = [];
        for (const el of arr.slice(0, arr.length - 1)) {
            if (el < pivot) {
                leftArr.push(el);
            }
            else {
                rightArr.push(el);
            }
        }
        return [...this.quickSort(leftArr), pivot, ...this.quickSort(rightArr)];
    }
    merge(sublist1, sublist2) {
        var resultList = [];
        while (sublist1.length > 0 && sublist2.length > 0)
            resultList.push(sublist1[0] < sublist2[0] ? sublist1.shift() : sublist2.shift());
        return resultList.concat(sublist1.length ? sublist1 : sublist2);
    }
}
exports.Arrays = Arrays;

/**
 * 
 * @param array of numbers 
 * @returns sorted array
 */
const merge = (sublist1: number[], sublist2: number[]): number[] => {
    var resultList = [];
    while (sublist1.length > 0 && sublist2.length > 0) {
        resultList.push(sublist1[0] < sublist2[0] ? sublist1.shift() : sublist2.shift());
    }
    return resultList.concat(sublist1.length ? sublist1 : sublist2);
}

export const mergeSort = (arr: number[]): number[] => {
    if (arr.length < 2) {
        return arr;// return once we hit an array with a single element
    }
    var mid = Math.floor(arr.length / 2);
    var left = mergeSort(arr.slice(0, mid));
    var right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
/**
 * 
 * @param arr of type array of numbers
 * @returns sorted array of numbers
 */
export const quickSort = (arr: number[]): number[] => {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot: number = arr[arr.length - 1];
    const leftArr: number[] = [];
    const rightArr: number[] = [];
    for (const el of arr.slice(0, arr.length - 1)) {
        if (el < pivot) {
            leftArr.push(el);
        } else {
            rightArr.push(el);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}




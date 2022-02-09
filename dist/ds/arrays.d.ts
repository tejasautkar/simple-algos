import { IArrays } from "../types/IArrays";
export declare class Arrays implements IArrays {
    /**
     *
     * @param array of numbers
     * @returns sorted array
     */
    mergeSort(arr: number[]): number[];
    /**
     *
     * @param arr of type array of numbers
     * @returns sorted array of numbers
     */
    quickSort(arr: number[]): number[];
    private merge;
}
